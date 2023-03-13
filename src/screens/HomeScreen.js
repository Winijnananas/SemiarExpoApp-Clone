
import { useNavigation } from '@react-navigation/core'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, SafeAreaView, Image, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from '../../css/styles';
import { doc, setDoc } from "firebase/firestore";
import { db } from '../components/config';



const HomeScreen = ({ navigation }) => {
  const [investment, setUsername] = React.useState('');
  const [price, setPassword] = React.useState('');
  




  function create() { 
    // Add a new document 
    setDoc(doc(db, "users", "New Collection"), {
      investment: investment,
      price: price,
    }).then(()=>{
      
      //data save succuss
      Alert.alert('บันทึกข้อมูลลงในฐานข้อมูลเเล้ว')
      console.log('data submitted');
    }).catch(()=>{
      console.log(error);
    });
  } 


  return (
    <KeyboardAvoidingView
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
    </KeyboardAvoidingView>
  )
}


export default HomeScreen