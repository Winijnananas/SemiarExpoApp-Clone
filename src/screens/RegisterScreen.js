import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { KeyboardAvoidingView,View, Text, SafeAreaView, TextInput, StyleSheet, Button, TouchableOpacity, Image, Pressable } from 'react-native';
import styles from '../../css/styles';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
export default function RegisterScreen({ navigation }) {
    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("")
    const [confirm, setConfirm] = React.useState("");
    const auth = getAuth();
  

  
  const handleCreateAccount = () =>{
    if(!username || !password || !confirm ) {
      return alert('กรอกข้อมูลให้ครบถ้วน !')
    }
    if(!username) {
      return alert('กรอกอีเมลล์ของท่าน')
    }
    if(password.length < 6) {
      return alert('รหัสผ่านต้องยาวกว่า 6 ตัวอักษร')
    }
    if(password !== confirm){
      alert('หรัสผ่านไม่ตรงกัน')
      return
    }
    createUserWithEmailAndPassword(auth,username, password,confirm)
    .then((userCredential) => {
      console.log('สร้างบัญชีเเล้ว')
      navigation.navigate('Login');
      const user = userCredential.user;
      console.log(user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error)
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
                  
                  placeholder='อีเมลล์'
                  style={styles.textInput}
                  onChangeText={setUsername}
                  value={username}
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