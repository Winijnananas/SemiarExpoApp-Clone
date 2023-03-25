import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, SafeAreaView, Image, Alert, Dimensions, Button, FlatList, Pressable ,Keyboard,TouchableWithoutFeedback} from 'react-native'
import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState, useRef } from 'react'
import styles from '../../css/styles';
import { collection, doc, getDoc, setDoc, updateDoc, onSnapshot, addDoc, docId  ,docRef,docSnap} from "firebase/firestore";
import { db } from '../components/config';
import { Picker } from '@react-native-picker/picker';
import { Swipeable } from 'react-native-gesture-handler';
import { deleteDoc } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditScreen = ({ route }) => {
    const { id } = route.params || {};
    const [investment, setInvestment] = useState('');
    const [price, setPrice] = useState('');
    const [type, setType] = useState('');
    const [loading, setLoading] = useState(true);
   
    const usersRef = collection(db, "users");
      
    useEffect(() => {
        const fetchDocument = async () => {
            console.log(id)
            try {
                
                const docRef = doc(usersRef, id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    setInvestment(data.investment);
                    setPrice(data.price);
                    setType(data.type);
                    setLoading(false);
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.error("Error fetching document: ", error);
            }
        };
      
        fetchDocument();
    }, [id]);
      
    const updateDocument = async () => {
        try {
            const docRef = doc(usersRef, id);
            await updateDoc(docRef, {
                investment,
                price,
                type,
            });
            Alert.alert("Success", "Document updated successfully");
        } catch (error) {
            console.error("Error updating document: ", error);
            Alert.alert("Error", "Failed to update document");
        }
    };
  
 
    
    // const updateDocument = async () => {
    //     try {
    //         const docRef = doc(usersRef, id);
            
    //         await setDoc(docRef, {
    //           investment: newInvestment,
    //           price: newPrice,
    //           type: newType,
    //         }, { merge: true });
    //         Alert.alert("Success", "Document updated successfully");
    //       } catch (error) {
    //         console.log(usersRef)
    //         console.error("Error updating document: ", error);
    //         Alert.alert("Error", "Failed to update document");
    //       }
    //     };



    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{ backgroundColor: "#fff", height: 100 ,flex:1,justifyContent:'center',padding:10}}>
        
        <TouchableOpacity
          style={{
            width: 70,
            height: 40,
            backgroundColor: "green",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 0,
            padding: 0,
            margin: 5,
          }}
          onPress={updateDocument}
        >
          <Text style={{ color: "#fff", fontWeight: "800" }}>อัพเดต</Text>
        </TouchableOpacity>
        
        <TextInput
          style={styles.textInputHome}
          onChangeText={setInvestment}
          value={investment}
          placeholderTextColor="#A9A9A9"
          autoCapitalize="none"
          placeholder="สิ่งที่ต้องการลงทุน"
          clearButtonMode="always"
        />
        <TextInput
          style={styles.textInputHome}
          onChangeText={setPrice}
          keyboardType="numeric"
          value={price}
          placeholderTextColor="#A9A9A9"
          autoCapitalize="none"
          placeholder="ราคา"
          clearButtonMode="always"
        />
        <TextInput
          style={styles.textInputHome}
          onChangeText={setType}
          value={type}
          placeholderTextColor="#A9A9A9"
          autoCapitalize="none"
          placeholder="ประเภท"
          clearButtonMode="always"
        />
        
      </View>
      </TouchableWithoutFeedback>
      
    );
  };
export default EditScreen