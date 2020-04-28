import React from "react";
import { Camera } from "expo-camera";
import { View, Text, Platform } from "react-native";
import * as Permissions from "expo-permissions";

import styles from "./styles";
import Toolbar from "./toolbar.component";
import Gallery from "./gallery.component";
import { resetWarningCache } from "prop-types";

export default class CameraPage extends React.Component {
  camera = null;

  state = {
    captures: [],
    capturing: null,
    hasCameraPermission: null,
    cameraType: Camera.Constants.Type.back,
    flashMode: Camera.Constants.FlashMode.off,
  };

  setFlashMode = (flashMode) => this.setState({ flashMode });
  setCameraType = (cameraType) => this.setState({ cameraType });
  handleCaptureIn = () => this.setState({ capturing: true });

  handleCaptureOut = () => {
    if (this.state.capturing) this.camera.stopRecording();
  };

  handleShortCapture = async () => {
    // const photoData = await this.camera.takePictureAsync();
    // console.log(photoData);
    // let response = this.serverUpload(photoData);
    // console.log(response);
    console.log("Camera pressed");
    if (this.camera) {
      this.camera
        .takePictureAsync({
          skipProcessing: true,
        })
        .then((data) => {
          this.serverUpload(data);
        });
    } else {
      console.log("Camera unavailable");
    }
    this.setState({
      capturing: false,
      // captures: [photoData, ...this.state.captures],
    });
  };

  serverUpload = async (photo) => {
    let url = "http://192.168.1.10:8080/upload_image";
    let options = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
      mode: "cors",
      body: this.createFormData(photo),
    };
    console.log(options);

    await fetch(url, options)
      .then((response) => {
        if (response.ok) {
          console.log(response);
          alert("Image Uploaded");
        } else {
          console.log("error occured");
          console.log(response);
        }
      })
      .catch((error) => {
        console.log("error", error);
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
