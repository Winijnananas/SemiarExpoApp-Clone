import { StyleSheet, Text, View, FlatList, Button, Alert, TouchableOpacity } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'

import { collection, doc, getDocs, setDoc, onSnapshot, addDoc, docId, deleteDoc, docRef } from "firebase/firestore";
import { db } from '../components/config';

const EditScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [selectedDocumentId, setSelectedDocumentId] = useState(null);

  function deleteData(docId) {
    const usersCollectionRef = doc(db, "users", docId);
    deleteDoc(usersCollectionRef)
      .then(() => {
        navigation.navigate('Detail');
        Alert.alert("ลบข้อมูลเรียบร้อยแล้ว");
        console.log('ลบข้อมูลเรียบร้อยแล้ว')
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    if (selectedDocumentId) { // check if a document has been selected
      const docRef = doc(db, "users", selectedDocumentId); // create a document reference using the selected document ID
      const unsubscribe = onSnapshot(docRef, (doc) => {
        if (doc.exists()) {
          const userData = { id: doc.id, ...doc.data() };
          setData([userData]);
        } else {
          setData([]);
        }
      });
      return () => unsubscribe();
    } else {
      setData([]);
    }
  }, [selectedDocumentId]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <View>

      <Text style={{ fontSize: 30 ,marginTop:30,alignSelf:'center',fontWeight:'bold'}}>รายละเอียด</Text>

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View>
            {console.log(item.id)}
            <Text style={styles.TextTitle}>รอบการลงทุนที่ {item.roundNumber}</Text>
            <Text style={styles.TextDetails}>สิ่งที่ลงทุน: {item.investment}</Text>
            <Text style={styles.TextDetails}>ประเภท: {item.type}</Text>
            <Text style={styles.TextDetails}>งบลงทุน: {item.cost} บาท</Text>
            <View style={[styles[item.status]]}>
            <Text style={styles.TextStatus}>สถานะ: {item.status.toUpperCase()}</Text>
            </View>
            <View>

              <TouchableOpacity style={{
                width: '30%',
                height: 35, backgroundColor: '#FF0000', justifyContent: 'center', alignItems: 'center', borderRadius: 0, padding: 0,
                margin: 0, width: '100%'
              }}
              >

                <Text
                  style={{ color: '#fff', fontWeight: '800' }}

                  onPress={() => deleteData(item.id)}
                >ลบข้อมูล</Text>

              </TouchableOpacity>
            </View>
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

const styles = StyleSheet.create({
  TextTitle: {
    marginTop: 20,
    textAlign: 'center',
    color: '#358CD6',
    fontWeight: '500',
    fontSize: 30,
    
  },
  TextDetails: {
    paddingLeft: 10,
    textAlign: 'auto',
    color: '#1E1E1E',
    fontWeight: '300',
    fontSize: 20,
    marginBottom: 10,
  },
  TextStatus: {
    paddingLeft: 10,
    textAlign: 'auto',
    color: '#1E1E1E',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
    color:'white'
  },
  TextDetailsStatus: {
    marginLeft:5,
    borderRadius:7,
    width:'40%',
    paddingLeft: 10,
    textAlign: 'auto',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10
  },
  active:{
    marginLeft:5,
    borderRadius:7,
    backgroundColor:'green',
    width:'40%',
    height:35,
    marginBottom:5
    
  },
  unactive:{
    marginLeft:5,
    borderRadius:7,
    backgroundColor:'black',
    width:'50%',
    height:35,
    marginBottom:5
  }

})