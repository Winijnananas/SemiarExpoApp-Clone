import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { KeyboardAvoidingView,View, Text, SafeAreaView, TextInput, StyleSheet, Button, TouchableOpacity, Image, Pressable } from 'react-native';
import styles from '../../css/styles';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { collection, doc, getDoc, setDoc, onSnapshot, addDoc,docRef } from "firebase/firestore";
import { db } from '../components/config';
import { v4 as uuidv4 } from 'uuid';

export default function RegisterScreen({ navigation }) {
    const [fname, setFname] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("")
    const [confirm, setConfirm] = React.useState("");
    const auth = getAuth();
   

  
  const handleCreateAccount = () =>{
    if(!email || !password || !confirm ) {
      return alert('กรอกข้อมูลให้ครบถ้วน !')
    }
    if(!email) {
      return alert('กรอกอีเมลล์ของท่าน')
    }
    if(password.length < 6) {
      return alert('รหัสผ่านต้องยาวกว่า 6 ตัวอักษร')
    }
    if(password !== confirm){
      alert('หรัสผ่านไม่ตรงกัน')
      return
    }
    createUserWithEmailAndPassword(auth,email, password,confirm)
    .then((userCredential) => {
      console.log('สร้างบัญชีเเล้ว')
      navigation.navigate('Login');
      const user = userCredential.user;
      console.log(user)
      const userRef = db.collection("users").doc(userUid);
      userRef.set({
        email: email,
        fname: fname
        // Any other user data you want to store
      });
    })
    .catch((error) => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
        Alert.alert('That email address is already in use!')
    }
    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
      Alert.alert('That email address is invalid!');
  }

  console.error(error);
     
    });
  }




    return (
        <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
         
              <View style={{display: 'flex', justifyContent: 'flex-start', height: '100%'}}> 
              <Text style={styles.titleregis}>ลงทะเบียนเพื่อเข้าใช้</Text>
              <View>
  
            
              <TextInput
                  
                  placeholder='ชื่อบัญชี'
                  style={styles.textInput}
                  onChangeText={setFname}
                  value={fname}
                  clearButtonMode="always"    
              />
              <TextInput
                  
                  placeholder='อีเมลล์'
                  style={styles.textInput}
                  onChangeText={setEmail}
                  value={email}
                  clearButtonMode="always"    
              />
        
              <TextInput
                  secureTextEntry={true}
                  placeholder='รหัสผ่าน'
                  style={styles.textInput}
                  onChangeText={setPassword}
                  value={password}
                  clearButtonMode="always"
              />
              <TextInput
                  secureTextEntry={true}
                  placeholder='ยืนยันรหัสผ่าน'
                  style={styles.textInput}
                  onChangeText={setConfirm}
                  value={confirm}
                  clearButtonMode="always"
              />
              <TouchableOpacity style={styles.RegisButton}
                  onPress={handleCreateAccount}
                // onPress={() => { navigation.navigate('Login') }}
                >
                  <Text style={styles.buttonLabel}>ลงทะเบียน</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{marginVertical: 10,flexDirection: 'row'}}
              onPress={() => {navigation.navigate('Login')}}
            >
             <Text style={{color:'black'}}>มีบัญชีอยู่เเล้ว ?</Text>
             <Text style={{color: '#FFF', fontWeight: '700', fontSize: 15, textAlign: 'left',marginLeft:5,backgroundColor:'#ADD8E6'}}>เข้าสู่ระบบ</Text>
            </TouchableOpacity>
              </View>
              </View>
         
  </KeyboardAvoidingView>
          
      )
  };