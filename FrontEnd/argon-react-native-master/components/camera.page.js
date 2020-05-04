import React from "react";
import { Camera } from "expo-camera";
import {
  View,
  Text,
  Platform,
  AsyncStorage,
  ActivityIndicator,
} from "react-native";
import * as Permissions from "expo-permissions";

import styles from "./styles";
import Toolbar from "./toolbar.component";
import Gallery from "./gallery.component";

export default class CameraPage extends React.Component {
  camera = null;

  state = {
    captures: [],
    capturing: null,
    hasCameraPermission: null,
    cameraType: Camera.Constants.Type.back,
    flashMode: Camera.Constants.FlashMode.off,
    jwt: "",
    loading: false,
  };

  setFlashMode = (flashMode) => this.setState({ flashMode });
  setCameraType = (cameraType) => this.setState({ cameraType });
  handleCaptureIn = () => this.setState({ capturing: true });

  handleCaptureOut = () => {
    if (this.state.capturing) this.camera.stopRecording();
  };

  handleShortCapture = async () => {
    try {
      console.log("Camera pressed");
      if (this.camera) {
        this.camera
          .takePictureAsync({
            skipProcessing: true,
          })
          .then((data) => {
            this.setState((prevState) => ({
              ...prevState,
              loading: true,
            }));
            this.serverUpload(data, this.state.jwt);
          });
      } else {
        console.log("Camera unavailable");
      }
    } catch (error) {
      alert("Error with Camera");
      console.log(error);
    }
    this.setState({
      capturing: false,
      // captures: [photoData, ...this.state.captures],
    });
  };

  serverUpload = async (photo, jwt) => {
    let url = "http://192.168.1.4:8080/upload_image";
    let options = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + jwt,
      },
      method: "POST",
      mode: "cors",
      body: this.createFormData(photo),
    };
    console.log(options);

    await fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.pushInfo(
          data.foodName,
          data.servingDescription,
          data.servingWeight
        );
        // alert(data);
      })
      .catch((error) => {
        console.log("error", error);
        alert("Error: Problem with gettng prediction");
      });
    return;
  };

  createFormData = (photo) => {
    const data = new FormData();
    data.append("file", {
      type: "image/jpeg",
      uri: photo.uri,
      name: "image1.jpg",
    });
    return data;
  };

  pushInfo(foodName, servingDescription, servingWeight) {
    console.log(foodName);
    this.setState((prevState) => ({
      ...prevState,
      loading: false,
    }));
    this.props.navigation.push("MealLog", {
      foodName: foodName,
      servingDescription: servingDescription,
      servingWeight: servingWeight,
    });
  }
  //   handleLongCapture = async () => {
  //     const videoData = await this.camera.recordAsync();
  //     this.setState({
  //       capturing: false,
  //       captures: [videoData, ...this.state.captures],
  //     });
  //   };

  async componentDidMount() {
    const camera = await Permissions.askAsync(Permissions.CAMERA);
    const audio = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
    try {
      const jwt = await AsyncStorage.getItem("userToken");
      this.setState({
        jwt: jwt,
      });
    } catch (error) {
      console.log(error);
    }

    const hasCameraPermission =
      camera.status === "granted" && audio.status === "granted";

    this.setState({ hasCameraPermission });
  }

  render() {
    const {
      hasCameraPermission,
      flashMode,
      cameraType,
      capturing,
      captures,
    } = this.state;

    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>Access to camera has been denied.</Text>;
    }

    if (this.state.loading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0c9" />
        </View>
      );
    } else {
      return (
        <React.Fragment>
          <View>
            <Camera
              type={cameraType}
              flashMode={flashMode}
              style={styles.preview}
              ref={(camera) => (this.camera = camera)}
            />
          </View>

          {captures.length > 0 && <Gallery captures={captures} />}

          <Toolbar
            capturing={capturing}
            flashMode={flashMode}
            cameraType={cameraType}
            setFlashMode={this.setFlashMode}
            setCameraType={this.setCameraType}
            onCaptureIn={this.handleCaptureIn}
            onCaptureOut={this.handleCaptureOut}
            //   onLongCapture={this.handleLongCapture}
            onShortCapture={this.handleShortCapture}
          />
        </React.Fragment>
      );
    }
  }
}
