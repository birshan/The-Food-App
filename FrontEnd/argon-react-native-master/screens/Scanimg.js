import React, { Component }  from "react";
import { AppRegistry, StyleSheet, View, Button, PermissionsAndroid} from "react-native";
import { RNCamera as Camera } from 'react-native-camera';
import Constants from "expo-constants";

// Galio components
import { Text } from "galio-framework";

class Scanimg extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.Camera = cam;
          }}
          style={styles.View}
          //aspect={Camera.Constants.Aspect.fill}
          //captureAudio={false}
          >
          <Text
            onPress={this.takePicture.bind(this)}>
            [CAPTURE_IMAGE]
            </Text>
        </Camera>
      </View>
    );
}

takePicture(){
  const options = {}

  this.Camera.capture({metadata: options}).then((data) =>{
    console.log(data)
    }).catch((error) => {
      console.log(error)
    })
  }
}

// const requestCameraPermission = async () => {
//   try {
//     const granted = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.CAMERA,
//       {
//         title: "Food App Camera Permission",
//         message:
//           "Food App needs access to your camera " +
//           "so you can take the picture.",
//         buttonNeutral: "Ask Me Later",
//         buttonNegative: "Cancel",
//         buttonPositive: "OK"
//       }
//     );
//     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//       console.log("You can use the camera");
//     } else {
//       console.log("Camera permission denied");
//     }
//   } catch (err) {
//     console.warn(err);
//   }
// };

// class Scanimg extends React.Component {

//   // render() {
//   //   return (
//   //     <View style={styles.container}>
//   //       <Text style={styles.item}>Try permissions</Text>
//   //       <Button title="request permissions" onPress={requestCameraPermission} />
//   //     </View>
//   //   );
//   // }

//     constructor(props) {
//         super(props);
//         this.state = {
//           isCameraVisible: false
//         }
//       }
    
//       showCameraView = () => {
//         this.setState({ isCameraVisible: true });
//       }
//       render() {
//         const { isCameraVisible } = this.state;
//         return (
//           <View style={styles.container}>
//             <Text style={styles.item}>Try permissions</Text>
//             <Button title="request permissions" onPress={requestCameraPermission} />
//             {!isCameraVisible &&<Button align="center" title="Show me Camera" onPress={this.showCameraView} />}
//             {isCameraVisible &&
//             <Camera
//               ref={(cam) => {
//                 this.camera = cam;
//               }}
//               style={styles.preview}
//               //aspect={Camera.constants.Aspect.fill}
//               >
//               <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
//             </Camera>}
//           </View>
//         );
//       }
    
//       takePicture() {
//         const options = {};
//         //options.location = ...
//         this.camera.capture({metadata: options})
//           .then((data) => {
//              console.log(data);
//              this.setState({ isCameraVisible: false });
//         }).catch(err => console.error(err));
//       }
// }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8
  },
  item: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  }
  });

AppRegistry.registerComponent('Scanimg', () => Scanimg);
export default Scanimg;