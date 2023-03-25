import { View, Text,TextInput,Button,Pressable,onPress,Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { collection, doc, getDoc, setDoc, onSnapshot, addDoc,roundRef } from "firebase/firestore";
import { db } from '../components/config';
import React, { useEffect, useState, useRef } from 'react'

export default function RoundScreen(props) {
    const navigation = useNavigation();
    const { title = 'สร้างรอบ' } = props;
    const [cost,setCost] = useState('');
    const [data, setData] = useState([]);
    useEffect(() => {
      try {
        const usersCollectionRef = collection(db, "users");
          const query = query(
            collection(usersCollectionRef, "cost", "round", "transactions"),
            orderBy("investment")
          );
          
          onSnapshot(query, (querySnapshot) => {
              const dataArray = [];
              querySnapshot.forEach((doc, index) => { // add index as the second parameter
                  dataArray.push({ id: doc.id, ...doc.data(), index }); // add index to the object
              });
              setData(dataArray);
          });
          return () => unsubscribe();
      }
      catch (error) {
          console.log(error);
      }


  }, []);
   
  function createcost() {
    if (cost) {
        const otherCollectionRef = collection(db, "users");
        addDoc(otherCollectionRef, {
            cost:cost
        })
            .then((docRef) => {
                Alert.alert("บันทึกข้อมูลลงในฐานข้อมูลเเล้ว");
                console.log('บันทึกลงประวัติเเล้ว')
                console.log("data submitted with ID: ", docRef.id);
            })
            .catch((error) => {
                console.log(error);
            });
    } else {
        Alert.alert("เตือน", "กรอกข้อมูลไม่ครบถ้วน");
        console.log("Investment or price is null");
    }
}

  return (
    <View style={{justifyContent:'center',alignContent:'center',alignItems:'center',marginTop:100,flex:1}}>
      <Text>RoundScreen</Text>
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

