import { Text ,SafeAreaView} from 'react-native'
import LogoutBtn from './LogoutBtn';
import styles from '../../css/styles';
import { getAuth } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler';

export default function UserScreen({navigation}) {
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
      <ScrollView>
      <SafeAreaView style={{flex:1,alignContent:"center",alignItems:'center',justifyContent: 'center',}}>
        <Text style={{color:'black',fontWeight:'bold',fontSize:25,marginTop:150}}>Hello User : {email}</Text>
        {/* <Text style={{fontWeight:'bold',fontSize:40}}>User Screen</Text> */}
      
        <Text style={{fontSize:20}}>This app duration development.</Text>
        <Text style={{
                        textAlign: 'center',
                        borderRadius:7,
                        justifyContent: 'center',
                        alignItems:'center',
                        fontSize: 20,
                        fontWeight: "800",
                        paddingTop: 5,
                        marginTop:10,
                        paddingBottom:5,
                        color: "#ffff",
                        backgroundColor:'#007ACC',
                        width:'80%'
                    }}
                    onPress={()=>
                        navigation.navigate('Detail')
                    }
                    >กดเพื่อดูประวัติการลงทุน</Text>
        <LogoutBtn/>
      </SafeAreaView>
      </ScrollView>
    );
  
  
}
