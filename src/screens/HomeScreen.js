
import { useNavigation } from '@react-navigation/core'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, SafeAreaView, Image, Alert } from 'react-native'
import React, { useEffect, useState,useRef } from 'react'
import styles from '../../css/styles';
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from '../components/config';

import {Picker} from '@react-native-picker/picker';
const HomeScreen = ({ navigation }) => {
  const [investment, setUsername] = React.useState('');
  const [price, setPassword] = React.useState('');
  const [selectedtype, setSelectedtype] = useState();


  const pickerRef = useRef();

function open() {
  pickerRef.current.focus();
}

function close() {
  pickerRef.current.blur();
}
  const items = [
    { label: 'Item 1', value: 'item1' },
    { label: 'Item 2', value: 'item2' },
    { label: 'Item 3', value: 'item3' },
  ];
  


  // function create() {
  //   // Check if the collection already exists
  //   const usersCollectionRef = collection(db, "users");
  //   const newCollectionRef = collection(usersCollectionRef, "New Collection");
  //   getDoc(newCollectionRef)
  //     .then((docSnapshot) => {
  //       if (docSnapshot.exists()) {
  //         // Collection already exists, show error message or take appropriate action
  //         Alert.alert("Error", "Collection มีอยู่เเล้ว");
  //         return;
  //       }
  
  //       // Collection does not exist, add a new document
  //       setDoc(newCollectionRef, {
  //         investment: investment,
  //         price: price,
  //       })
  //         .then(() => {
  //           // Data save success
  //           Alert.alert("Success", "Data submitted");
  //           console.log("Data submitted");
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //         });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  // function create() { 
  //   // Add a new document 
  //   setDoc(doc(db, "users", "New Collection"), {
  //     investment: investment,
  //     price: price,
  //   }).then(()=>{
      
  //     //data save succuss
  //     Alert.alert('บันทึกข้อมูลลงในฐานข้อมูลเเล้ว')
  //     console.log('data submitted');
  //   }).catch(()=>{
  //     console.log(error);
  //   });
  // } 

  function create(){
    if (investment && price && selectedtype) {
      setDoc(doc(db, "users", "New Collection"), {
        investment: investment,
        price: price,
        type:selectedtype,
      }).then(()=>{
        
        //data save success
        Alert.alert('บันทึกข้อมูลลงในฐานข้อมูลเเล้ว')
        console.log('data submitted');
      }).catch(()=>{
        console.log(error);
      });
    } else {
      Alert.alert('เตือน','กรอกข้อมูลไม่ครบถ้วน')
      console.log('Investment or price is null');
    }
  }

  return (
    <ScrollView
      style={styles.container}
      behavior="padding"
    >

      <View style={{ display: 'flex', justifyContent: 'flex-start', height: '100%' }}>
        <Text style={styles.title}>กรอกข้อมูล</Text>
        
      
   
        <View>

        
          <TextInput
            style={styles.textInputHome}
            onChangeText={setUsername}
            value={investment}
            placeholderTextColor="#A9A9A9"
            autoCapitalize='none'
            placeholder="สิ่งที่ต้องการลงทุน"
            clearButtonMode="always"
          />

          <TextInput
            style={styles.textInputHome}
            onChangeText={setPassword}
            value={price}
            placeholderTextColor="#A9A9A9"
            // secureTextEntry={true}
            autoCapitalize='none'
            placeholder="ราคา"
            clearButtonMode="always"
          />
          <Text style={{textAlign:'center',
    justifyContent: 'center',
    fontSize: 25,
    fontWeight: "800",
    color: "orange",}}>เลือกประเภทการลงทุน</Text>
          <Picker
           ref={pickerRef}
  selectedValue={selectedtype}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedtype(itemValue)
  }>
  <Picker.Item label="เกษตรกรรม" value="เกษตรกรรม" />
  <Picker.Item label="ประมง" value="ประมง" />
  <Picker.Item label="ขายของ" value="ขายของ" />
  <Picker.Item label="ฝากเงิน" value="ฝากเงิน" />
  <Picker.Item label="ถอนเงิน" value="ถอนเงิน" />
</Picker>
            


          <TouchableOpacity
            style={styles.loginButtonHome}
            //  onPress={() =>navigation.navigate('Tab')}
            
            onPress={create}
          >
            <Text style={styles.buttonLabel}
            >บันทึกข้อมูล</Text>
          </TouchableOpacity>

        </View>
      </View>
    </ScrollView>
  )
}


export default HomeScreen