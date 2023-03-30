import { KeyboardAvoidingView, StyleSheet, Text, TextInput, Keyboard, TouchableOpacity, TouchableWithoutFeedback, View, ScrollView, SafeAreaView, Image, Alert, Dimensions, Button, FlatList, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState, useRef } from 'react'
import styles from '../../css/styles';
import { collection, doc, getDoc, setDoc, onSnapshot, addDoc ,docRef} from "firebase/firestore";
import { db } from '../components/config';
import { Picker } from '@react-native-picker/picker';
import { Swipeable } from 'react-native-gesture-handler';
import { deleteDoc } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStackNavigator } from '@react-navigation/stack';
import RoundScreen from './RoundScreen';

const FirstScreen = ({ navigation }) => {
    const [roundNumber, setRoundNumber] = useState('');
    const [cost, setCost] = useState('');
    const [investment, setInvestment] = React.useState('');
    const [price, setPassword] = React.useState('');
    const [selectedtype, setSelectedtype] = useState();
    const [status, setStatus] = useState();
    const pickerRef = useRef();
    const [data, setData] = useState([]);
    const usersRef = collection(db, "users");
    const Stack = createStackNavigator();
    const [income, setincome] = useState('')
    useEffect(() => {
        try {
            const unsubscribe = onSnapshot(collection(db, "users"), (querySnapshot) => {
                const dataArray = [];
                querySnapshot.forEach((doc, index) => { // add index as the second parameter
                    dataArray.push({ id: doc.id, ...doc.data(), index }); // add index to the object
                });
                setData(dataArray);
            });
            return () => unsubscribe();
        }
        catch (error) {
            console.log(error);
        }


    }, []);


    const CalculatorCost = () => {
        // const cost = (expenses - payment)/payment*100
        const income = (cost - price)
        setincome(income.toFixed(0))
    }

    function create() {
        if (roundNumber && investment && selectedtype && cost &&status) {
          const otherCollectionRef = collection(db, "users");
          const docRef = doc(otherCollectionRef); // create a new document reference
          const id = docRef.id; // get the auto-generated ID
      
          setDoc(docRef, { // set the document data
            id: id, // add the ID to the document data
            roundNumber: roundNumber,
            investment: investment,
            price: price,
            type: selectedtype,
            cost: cost,
            status:status,
          })
            .then(() => {
              Alert.alert("บันทึกข้อมูลลงในฐานข้อมูลเเล้ว");
              console.log("บันทึกลงประวัติเเล้ว");
              console.log("data submitted with ID: ", id);
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          Alert.alert("เตือน", "กรอกข้อมูลไม่ครบถ้วน");
          console.log("Investment or price is null");
        }
      }
    // function create() {
    //     if (roundNumber && investment && price && selectedtype) {
    //         const otherCollectionRef = collection(db, "users");
    //         addDoc(otherCollectionRef, {
    //             roundNumber: roundNumber,
    //             investment: investment,
    //             price: price,
    //             type: selectedtype,
    //             cost: cost,
    //         })
    //             .then((docRef) => {
    //                 Alert.alert("บันทึกข้อมูลลงในฐานข้อมูลเเล้ว");
    //                 console.log('บันทึกลงประวัติเเล้ว')
    //                 console.log("data submitted with ID: ", docRef.id);
    //             })
    //             .catch((error) => {
    //                 console.log(error);
    //             });
    //     } else {
    //         Alert.alert("เตือน", "กรอกข้อมูลไม่ครบถ้วน");
    //         console.log("Investment or price is null");
    //     }
    // }


    const RightSwipe = () => {
        return (
            <View style={{ backgroundColor: "#fff", height: 100 }}>
                <TouchableOpacity style={{
                    width: 70, height: 40, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', borderRadius: 0, padding: 0,
                    margin: 5,
                }}

                >
                    <Text
                        style={{ color: '#fff', fontWeight: '800' }}
                    >ลบข้อมูล</Text>

                </TouchableOpacity>

            </View>
        )
    }


    return (

        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View
                style={styles.container}
                behavior="padding"
            >

                
                    
                <View style={{ display: 'flex', justifyContent: 'flex-start', height: '100%' }}>
                    <Text style={styles.titlefirst}>กรอกสิ่งที่ต้องการลงทุน</Text>
                    {/* <Text style={{ color: 'red', fontWeight: '700', fontSize: 15, textAlign: 'left', marginLeft: 5 }}>เงินที่เหลือจากการลงทุน</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' ,marginLeft: 5 ,color: 'orange'}}>{income}</Text>
                    <Text style={{ fontSize: 15,marginLeft: 5  }}>จาก</Text>
                    <Text style={{ color: '#13678A', fontWeight: '700', fontSize: 15, textAlign: 'left', marginLeft: 5 }}>{cost}</Text> */}


                    <View>
                        <View style={{ justifyContent: 'center', alignContent: 'center', alignContent: 'center' }}>
                            <Text>รอบการลงทุน:</Text>
                            <TextInput
                                style={{
                                    marginBottom: 5,
                                    borderWidth: 0,
                                    height: 35,
                                    padding: 5,
                                    width: '20%'


                                }}
                                placeholder="กรอกรอบ"
                                value={roundNumber}
                                onChangeText={setRoundNumber}
                                keyboardType="numeric"
                            />

                          
                            <TextInput
                                style={styles.textInputHome}
                                placeholder="เงินลงทุน"
                                value={cost}
                                onChangeText={setCost}
                                keyboardType="numeric"
                            />
                        </View>

                        <TextInput
                            style={styles.textInputHome}
                            onChangeText={setInvestment}
                            value={investment}
                            placeholderTextColor="#A9A9A9"
                            autoCapitalize='none'
                            placeholder="สิ่งที่ต้องการลงทุน"
                            clearButtonMode="always"


                        />

                        {/* <TextInput
                            style={styles.textInputHome}
                            onChangeText={setPassword}
                            keyboardType='numeric'
                            value={price}
                            placeholderTextColor="#A9A9A9"
                            // secureTextEntry={true}
                            autoCapitalize='none'
                            placeholder="จำนวนเงิน"
                            clearButtonMode="always"

                        /> */}
                        {/* <Text style={{
                        textAlign: 'center',
                        justifyContent: 'center',
                        fontSize: 15,
                        fontWeight: "800",
                        color: "#606A74",
                    }}>เลือกประเภทการลงทุน</Text> */}
                        <TextInput
                            style={{
                                height: 40,
                                width: "100%",
                                borderWidth: 1,
                                borderColor: "#3D3D3D",
                                borderRadius: 7,
                                backgroundColor: "#FFFF",
                                padding: 5,
                                color: "#A9A9A9",
                                fontWeight: "700",
                                fontSize: 15,
                                marginTop: 5,
                                marginBottom: 5,
                            }}
                            onChangeText={setSelectedtype}

                            value={selectedtype}
                            placeholderTextColor="#A9A9A9"
                            // secureTextEntry={true}
                            autoCapitalize='none'
                            placeholder="กำหนดประเภทเอง"
                            clearButtonMode="always"

                        />
                        <Text style={{
                            textAlign: 'center',
                            justifyContent: 'center',
                            fontSize: 15,
                            fontWeight: "800",
                            color: "#606A74",
                        }}>เลือกประเภทการลงทุน</Text>
                        <Picker
                            ref={pickerRef}
                            selectedValue={selectedtype}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedtype(itemValue)}
                            style={{ marginTop: 10 }}
                        >
                            <Picker.Item label="ไม่มีประเภท" value="none" />
                            <Picker.Item label="เกษตรกรรม" value="เกษตรกรรม" />
                            <Picker.Item label="การประมง" value="ประมง" />
                            <Picker.Item label="ขายออก" value="ขายออก" />
                            <Picker.Item label="ได้รับเงิน" value="ได้รับเงิน" />
                            <Picker.Item label="จ่ายเงิน" value="จ่ายเงิน" />
                            <Picker.Item label="ถอนเงิน" value="ถอนเงิน" />
                            <Picker.Item label="ไม่ระบุ" value="ไม่ระบุ" />
                        </Picker>
                        <Text style={{
                            textAlign: 'center',
                            justifyContent: 'center',
                            fontSize: 15,
                            fontWeight: "800",
                            color: "#606A74",
                        }}>สถานะ</Text>
                        <Picker
                            ref={pickerRef}
                            selectedValue={selectedtype}
                            onValueChange={(itemValue, itemIndex) =>
                                setStatus(itemValue)}
                            style={{ marginTop: 10 }}
                        >
                            <Picker.Item label="ระบุสถานะ" value="ระบุสถานะ" />
                            <Picker.Item label="Active" value="active" />
                            <Picker.Item label="Unactive" value="unactive" />
                            
                        </Picker>




                        <TouchableOpacity
                            style={styles.loginButtonHome}
                            //  onPress={() =>navigation.navigate('Tab')}

                            onPress={() => {
                                CalculatorCost();
                                create();
                                setCost('');
                                setInvestment('');
                                setSelectedtype('');
                                setRoundNumber('');
                                setStatus('');
                            }}

                        >


                            <Text style={styles.buttonLabel}
                            >บันทึกข้อมูล</Text>
                        </TouchableOpacity>


                        {/* <Swipeable renderRightActions={RightSwipe}>
                        <FlatList
                            data={data}
                            renderItem={({ item, index }) => (
                                <Text style={styles.containerfirstsub}
                                
                                onPress={()=>
                                    navigation.navigate('Detail')
                                }>
                                    {index + 1} - {item.investment} ประเภท - {item.type} - {item.price} บาท
                                </Text>
                            )}
                            keyExtractor={(item) => item.id}
                        />
                    </Swipeable> */}

                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default FirstScreen

