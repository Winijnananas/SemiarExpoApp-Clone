import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, SafeAreaView, Image, Alert ,ActivityIndicator} from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from '../../css/styles';
import { auth } from '../components/config';

import {AsyncStorage} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";



const LoginScreen = ({ navigation }) => {
  const auth = getAuth();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getUserToken = async () => {
      try {
        const userToken = await AsyncStorage.getItem('userToken');
        if (userToken !== null) {
          // The user is already authenticated, navigate to the Tab screen
          navigation.replace('Tab');
        } else {
          // The user is not authenticated, stay on the Login screen
        }
      } catch (error) {
        console.log(error);
      }
    };
    getUserToken();
  }, []);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="orange" />
        <Text style={{ marginTop: 16, fontSize: 30 }}>กำลังโหลดข้อมูล...</Text>
      </View>
    );
  }
  

  // const handleSigIn =()=>{
  //   signInWithEmailAndPassword(auth, username, password)
  // .then((userCredential) => {
  //   navigation.replace('Tab')
  //   console.log('เข้าสู่ระบบ')
  //   const user = userCredential.user;
  //   console.log(user)
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   Alert.alert('กรุณากรอกอีเมลล์เเละรหัสผ่าน')
  //   console.log(error)
  // });   
  // }

  
  const handleSigIn =()=>{
    setLoading(true);
    signInWithEmailAndPassword(auth, username, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        const userToken = await user.getIdToken();
        await AsyncStorage.setItem('userToken', userToken);
        console.log('User Token')
        console.log(userToken)
  
        console.log('User Keyapi')
        console.log(user)
        console.log('Login Success')
        navigation.replace('Tab');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert('กรุณากรอกอีเมลล์เเละรหัสผ่าน');
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });   
  };


  // const handleSigIn =()=>{
  //   signInWithEmailAndPassword(auth, username, password)
  //     .then(async (userCredential) => {
  //       const user = userCredential.user;
  //       const userToken = await user.getIdToken();
  //       await AsyncStorage.setItem('userToken', userToken);
  //       console.log('User Token')
  //       console.log(userToken)

  //       console.log('User Keyapi')
  //       console.log(user)
  //       console.log('Login Success')
  //       navigation.replace('Tab');
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       Alert.alert('กรุณากรอกอีเมลล์เเละรหัสผ่าน');
  //       console.log(error);
  //     });   
  // };


 
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >

      <View style={{ display: 'flex', justifyContent: 'flex-start', height: '100%' }}>

        <Text style={styles.title}>ล็อคอินเข้าสู่ระบบ</Text>

        <View>


          <TextInput
            style={styles.textInput}
            onChangeText={setUsername}
            value={username}
            placeholderTextColor="#A9A9A9"
            autoCapitalize='none'
            placeholder="อีเมลล์ผู้ใช้"
            clearButtonMode="always"
          />

          <TextInput
            style={styles.textInput}
            onChangeText={setPassword}
            value={password}
            placeholderTextColor="#A9A9A9"
            // secureTextEntry 
            // right={<TextInput.Icon icon="eye"/>}
            secureTextEntry={true}
            autoCapitalize='none'
            placeholder="รหัสผ่าน"
            clearButtonMode="always"
          />


          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleSigIn}
            // onPress={() => navigation.navigate('Tab')}
          // onPress={Login}
          >
            <Text style={styles.buttonLabel}
            >เข้าสู่ระบบ</Text>
          </TouchableOpacity>

          { /* register */}
          <TouchableOpacity style={{ marginVertical: 10, flexDirection: 'row' }}
            onPress={() => { navigation.navigate('Regis') }}
          >
            <Text style={{ color: '#D93D04' }}>ผู้ใช้ใหม่?</Text>
            <Text style={{ color: '#13678A', fontWeight: '700', textDecorationLine: 'underline', fontSize: 15, textAlign: 'left', marginLeft: 5 }}>ลงทะเบียน</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen