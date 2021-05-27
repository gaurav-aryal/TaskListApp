import React from 'react';
//import react in our code. 
import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native';
//import all the components we are going to use. 

export default class Settings extends React.Component {
  render() {
    return (
      <ImageBackground
        style={{ flex: 1 }}
        //We are using online image to set background
        source={{
          uri:
            'https://raw.githubusercontent.com/AboutReact/sampleresource/master/crystal_background.jpg',
        }}
        //You can also set image from your project folder
        //require('./images/background_image.jpg')        //
        >
        <View style={styles.MainContainer}>
          <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/logosmalltransparen.png',
            }}
            style={{ width: 40, height: 40, marginTop: 90 }}
          />
          <Text style={styles.TextStyle}>Background Images</Text>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  TextStyle: {
    color: '#0250a3',
    textAlign: 'center',
    fontSize: 30,
    marginTop: 10,
  },
});




// import React, {Component} from 'react';  
// import {View,Text} from 'react-native';  
// import Icon from 'react-native-vector-icons/Ionicons';  
// export default class SettingScreen extends Component{  
//     render(){  
//         return(  
//             <View>  
//                 <Text>this is setting screen</Text>  
//             </View>  
//         )  
//     }  
// }  
// SettingScreen.navigationOptions={  
//     tabBarIcon:({tintColor, focused})=>(  
//         <Icon  
//             name={focused ? 'ios-settings' : 'md-settings'}  
//             color={tintColor}  
//             size={25}  
//         />  
//     )  
// }  


// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   Image,
//   View,
//   Text,
// } from 'react-native';

// const remote = 'https://s15.postimg.org/tw2qkvmcb/400px.png';

// export default class Settings extends Component {
//   render() {
//     const resizeMode = 'center';
//     const text = 'I am some centered text';

//     return (
//       <View
//         style={{
//           flex: 1,
//           backgroundColor: '#eee',
//         }}
//       >
//         <View
//           style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//           }}
//         >
//           <Image
//             style={{
//               flex: 1,
//               resizeMode,
//             }}
//             source={{ uri: remote }}
//           />
//         </View>
//         <View
//           style={{
//             flex: 1,
//             backgroundColor: 'transparent',
//             justifyContent: 'center',
//           }}
//         >
//           <Text
//             style={{
//               textAlign: 'center',
//               fontSize: 40,
//             }}
//           >
//             {text}
//           </Text>
//         </View>
//       </View>
//     );
//   }
// }

// AppRegistry.registerComponent('BackgroundImage', () => BackgroundImage);