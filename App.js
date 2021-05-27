import React, { useState } from 'react'
import * as Font from '@use-expo/font'
import Navigator from './routes/homeStack'
import { AppLoading } from 'expo';

const getFonts = () =>{
  return Font.loadAsync({
  'nunito-regular': require('./assets/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/Nunito-Bold.ttf')
});
};

export default function App() {
  return (<Navigator />);
}
// export default function App() {
//   const [fontsLoaded, setFontsLoaded] = useState(false);

//   if(!fontsLoaded){
//     return (
//       <AppLoading
//         startAsync={getFonts}
//         onFinish={()=> setFontsLoaded(true)}
//     />
//     );
//   }
//   else{
//     return (<Navigator />);
//   }
// }