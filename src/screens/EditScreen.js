import { StyleSheet, Text, View ,FlatList,Button,Alert} from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import styles from '../../css/styles';
import { collection, doc, getDoc, setDoc, onSnapshot, addDoc, docId, deleteDoc } from "firebase/firestore";
import { db } from '../components/config';

const EditScreen = ({ item }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const docRef = doc(db, "users", "9AAite2OZjFx28vilFLt"); // replace "user_id_here" with the actual user ID
    const unsubscribe = onSnapshot(docRef, (doc) => {
      if (doc.exists()) {
        const userData = { id: doc.id, ...doc.data() };
        setData([userData]);
      } else {
        setData([]);
      }
    });
    return () => unsubscribe();
  }, []);


  return (
    <View>
      <Text style={{fontSize:50}}>EditScreen</Text>
      <FlatList
        
          data={data}
          renderItem={({ item, index }) => (
            <View>
              <Text style={styles.containerfirstsub}>
                รอบที่ {item.roundNumber} | {item.investment} ประเภท | {item.type} - {item.price} บาท
                {console.log(item.id)}
              </Text>
              
            </View>
          )}
        />
        <View>
                <Button
                title='ลงทุนเพิ่มเติม'
              
                >

                
                </Button>
                </View>
    </View>
  )
}

export default EditScreen

