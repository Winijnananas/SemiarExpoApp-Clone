import { View, Text ,Image,StyleSheet} from 'react-native'
import React ,{useEffect, useState}from 'react'

export default function SplashScreen({navigation}) {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login');
        //    handleGetToken();
        }, 2000);
      })
  return (
    <View
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'#FFFF'}}>
       
      <Text style={{fontWeight:'bold',color:'#D93D04',fontSize:35}}>ACCOUNTING APP📈</Text>
  
    </View>
  )
}

// const styles = StyleSheet.create({
//     image: {
//         marginBottom: 1,
//         height: 350,
//         width: 350,
        

//     },
// });