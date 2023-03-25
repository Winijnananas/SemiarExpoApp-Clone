
import { useNavigation } from '@react-navigation/core'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, SafeAreaView, Image, Alert, Dimensions, Button, FlatList, Pressable } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import styles from '../../css/styles';
import { collection, doc, getDoc, setDoc, onSnapshot, addDoc } from "firebase/firestore";
import { db } from '../components/config';
import { Picker } from '@react-native-picker/picker';


const FirstScreen = ({ navigation }) => {
    const [investment, setUsername] = React.useState('');
    const [price, setPassword] = React.useState('');
    const [selectedtype, setSelectedtype] = useState();
    const pickerRef = useRef();

    const [data, setData] = useState([]);

    const usersRef = collection(db, "users");

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "users"), (querySnapshot) => {
            const dataArray = [];
            querySnapshot.forEach((doc) => {
                dataArray.push({ id: doc.id, ...doc.data() });
            });
            setData(dataArray);
        });
        return () => unsubscribe();
    }, []);

    //   function create(){
    //     if (investment && price) {
    //       setDoc(collection(db, "users", "Random").doc(), {
    //         investment: investment,
    //         price: price,
    //         type: selectedtype,
    //       })
    //       .then(() => {
    //         //data save success
    //         Alert.alert('บันทึกข้อมูลลงในฐานข้อมูลเเล้ว')
    //         console.log('data submitted');
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //     } else {
    //       Alert.alert('เตือน','กรอกข้อมูลไม่ครบถ้วน')
    //       console.log('Investment or price is null');
    //     }
    //   }

    // function create(){
    //     if (investment && price) {
    //       collection(db, "users").add({
    //         investment: investment,
    //         price: price,
    //       })
    //       .then((docRef) => {
    //         // data save success
    //         Alert.alert('บันทึกข้อมูลลงในฐานข้อมูลเเล้ว')
    //         console.log('data submitted with ID: ', docRef.id);
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //     } else {
    //       Alert.alert('เตือน','กรอกข้อมูลไม่ครบถ้วน')
    //       console.log('Investment or price is null');
    //     }
    //   }

    function create() {
        if (investment && price && selectedtype) {
            addDoc(usersRef, {
                investment: investment,
                price: price,
                type: selectedtype,
            })
                .then((docRef) => {
                    Alert.alert("บันทึกข้อมูลลงในฐานข้อมูลเเล้ว");
                    console.log('บันทึกลงประวัติเเล้ว')
                    console.log("data submitted with ID: ", docRef.id);
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            Alert.alert("เตือน", "กรอกข้อมูลไม่ครบถ้วน");
            console.log("Investment or price is null");
        }
    }
    return (
        <View
            style={styles.container}
            behavior="padding"
        >

            <View style={{ display: 'flex', justifyContent: 'flex-start', height: '100%' }}>
                <Text style={styles.title}>FirstPage TEST Flastlist</Text>



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
                    <Text style={{
                        textAlign: 'center',
                        justifyContent: 'center',
                        fontSize: 25,
                        fontWeight: "800",
                        color: "orange",
                    }}>เลือกประเภทการลงทุน</Text>
                    <Picker
                        ref={pickerRef}
                        selectedValue={selectedtype}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedtype(itemValue)}
                        style={{ marginTop: 10 }}
                    >
                        <Picker.Item label="การเกษตรกรรม" value="เกษตรกรรม" />
                        <Picker.Item label="การประมง" value="ประมง" />
                        <Picker.Item label="ขายออก" value="ขายออก" />
                        <Picker.Item label="ได้รับเงิน" value="ได้รับเงิน" />
                        <Picker.Item label="จ่ายเงิน" value="จ่ายเงิน" />
                        <Picker.Item label="ถอนเงิน" value="ถอนเงิน" />
                    </Picker>




                    <TouchableOpacity
                        style={styles.loginButtonHome}
                        //  onPress={() =>navigation.navigate('Tab')}

                        onPress={create}
                    >
                        <Text style={styles.buttonLabel}
                        >บันทึกข้อมูล</Text>
                    </TouchableOpacity>

                    <Text style={{
                        textAlign: 'center',
                        justifyContent: 'center',
                        fontSize: 25,
                        fontWeight: "800",
                        paddingTop: 15,
                        color: "#36454F",
                    }}>ประวัติการลงทุน</Text>

                    <FlatList
                        data={data}
                        renderItem={({ item }) =>
                            <Text style={styles.containerfirstsub}>{item.investment} ประเภท - {item.type}- {item.price} บาท</Text>}
                        keyExtractor={(item) => item.id}

                    />

                </View>
            </View>
        </View>
    )
}


export default FirstScreen


{/* <View style={{ flex: 1, padding: 20 }}>
      <TextInput style={{ padding: 10, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }} placeholder="Investment" />
      <TextInput style={{ padding: 10, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }} placeholder="Price" />
      <Button title="Create" onPress={create} />
      <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </View> */}


#Json data
#Schema
{
    id:objectID,
    "investment":"String",
    "payment":"numberic",
    "type":"String"
}
