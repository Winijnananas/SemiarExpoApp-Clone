import { Text ,SafeAreaView} from 'react-native'
import LogoutBtn from './LogoutBtn';
import styles from '../../css/styles';
import { getAuth } from 'firebase/auth';
import React, { useEffect, useState } from 'react'

export default function UserScreen() {
  const auth = getAuth();
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setDisplayName(user.displayName);
      setEmail(user.email);
    }
  }, [auth.currentUser]);

 
    return (
      <SafeAreaView style={{flex:1,alignContent:"center",alignItems:'center',justifyContent: 'center',}}>
        <Text style={{color:'orange',fontWeight:'bold',fontSize:25}}>Hello User : {email}</Text>
        <Text style={{fontWeight:'bold',fontSize:40}}>User Screen</Text>
      
        <Text style={{fontSize:20}}>This app duration development.</Text>
        <LogoutBtn/>
      </SafeAreaView>
    );
  
  
}
