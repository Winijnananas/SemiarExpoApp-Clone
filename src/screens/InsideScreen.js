import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, SafeAreaView, Image, Alert, Dimensions, Button, FlatList, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState, useRef } from 'react'
import styles from '../../css/styles';
import { collection, doc, getDoc, setDoc, onSnapshot, addDoc, docId, deleteDoc } from "firebase/firestore";
import { db } from '../components/config';
import { Picker } from '@react-native-picker/picker';
import { Swipeable } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EditScreen from './EditScreen';

export default function InsideScreen({ navigation }) {
  const [investment, setUsername] = React.useState('');
  const [price, setPassword] = React.useState('');
  const [selectedtype, setSelectedtype] = useState();
  const pickerRef = useRef();
  const [data, setData] = useState([]);
  const usersRef = collection(db, "users");
  const swipeableRef = useRef(null);

  const EditScreen = () => {
    navigation.navigate('Edit', { id: docId });
    };
  
    

  function deleteData(docId) {
    const usersCollectionRef = doc(db, "users", docId);
    deleteDoc(usersCollectionRef)
      .then(() => {
        Alert.alert("ลบข้อมูลเรียบร้อยแล้ว");
        console.log('ลบข้อมูลเรียบร้อยแล้ว')
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "users"), (querySnapshot) => {
      const dataArray = [];
      querySnapshot.forEach((doc, index) => { // add index as the second parameter
        dataArray.push({ id: doc.id, ...doc.data(), index }); // add index to the object
      });
      setData(dataArray);
    });
    return () => unsubscribe();
  }, []);



  const RightSwipe = ({ item }) => {

    return (
      <View style={{ height: 100, flexDirection: 'column' }}>
        <TouchableOpacity style={{
          height: 35, backgroundColor: '#38AEE6', justifyContent: 'center', alignItems: 'center', borderRadius: 0, padding: 0,
          marginBottom: 5,width:'100%'
        }}

        >
          <Text
            style={{ color: '#ffff', fontWeight: '800' }}
            onPress={EditScreen}
          >เเก้ไข</Text>

        </TouchableOpacity>
        <TouchableOpacity style={{
           height: 35, backgroundColor: '#FF0000', justifyContent: 'center', alignItems: 'center', borderRadius: 0, padding: 0,
          margin: 0,width:'100%'
        }}
        >
          
          <Text
            style={{ color: '#fff', fontWeight: '800' }}
            
            onPress={() => deleteData(item.id)}
          >ลบข้อมูล</Text>

        </TouchableOpacity>

      </View>
    )
  }


  return (
    <View>
      <Text style={{
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 25,
        fontWeight: "bold",
        paddingTop: 100,
        color: "#36454F",
      }}>ประวัติการลงทุน</Text>

     
        <FlatList
          data={data}
          renderItem={({ item, index }) => (
            <View>
              <Text style={styles.containerfirstsub}>
                รอบที่ {item.roundNumber} - {item.investment} ประเภท - {item.type} - {item.price} THB
              </Text>
              <RightSwipe item={item}/>
            </View>
          )}
        />
  
  {/* <FlatList
          data={data}
          renderItem={({ item, index }) => (
            <View>
              <Text style={styles.containerfirstsub}>
                {index + 1} - รอบที่ {item.roundNumber} - {item.investment} ประเภท - {item.type} - {item.price} THB
              </Text>
              <RightSwipe item={item}/>
            </View>
          )}
        /> */}
  

      <Text style={{
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        fontWeight: "800",
        paddingTop: 5,
        marginTop: 10,
        paddingBottom: 5,
        color: "#ffff",
        backgroundColor: 'orange'
      }}
        onPress={() => navigation.navigate('Tab')}
      >Go back to main page</Text>
    </View>
  );
};