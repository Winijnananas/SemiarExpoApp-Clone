import { View, Text,TextInput,Button,Pressable,onPress,Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { collection, doc, getDoc, setDoc, onSnapshot, addDoc,roundRef } from "firebase/firestore";
import { db } from '../components/config';
import React, { useEffect, useState, useRef } from 'react'
import Logo from '../../css/logo';
export default function RoundScreen(props) {
    const navigation = useNavigation();
    const { title = 'สร้างรอบ' } = props;
    const [cost,setCost] = useState('');
    const [data, setData] = useState([]);
   

  return (
    <View style={{justifyContent:'center',alignContent:'center',alignItems:'center',marginTop:100,flex:1}}>
      <Text style={{fontSize:25,fontWeight:'bold',color:'#B24B0F'}}>ยินดีต้อนรับ ♥</Text>
      <Logo/>
      {/* <Text>จำนวนเงินลงทุน:</Text>
                        <TextInput
                        style={{marginBottom:5,
                            borderWidth:1,
                            height:35,
                            padding:5,
                            width:'20%'
                            
                        
                        }}
                            placeholder="เงินลงทุน"
                            value={cost}
                            onChangeText={setCost}
                            keyboardType="numeric"
                        /> */}
      <Pressable style={{alignItems: 'center',
      marginTop:10,
      width:'80%',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: '#1F8857',}}
      
      onPress={() => {
        // createcost();
        navigation.navigate('Home');
      }}>
      <Text style={{fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',}}>{title}</Text>
    </Pressable>
    
    </View>
  )
}

