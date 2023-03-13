
import { useNavigation } from '@react-navigation/core'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, SafeAreaView, Image, Alert,Dimensions,Button,FlatList } from 'react-native'
import React, { useEffect, useState,useRef } from 'react'
import styles from '../../css/styles';
import { collection, doc, getDoc, setDoc ,onSnapshot} from "firebase/firestore";
import { db } from '../components/config';
import { LineChart } from 'react-native-chart-kit';
import {Picker} from '@react-native-picker/picker';


const HomeScreen = ({ navigation }) => {
  const [investment, setUsername] = React.useState('');
  const [price, setPassword] = React.useState('');
  const [selectedtype, setSelectedtype] = useState();
  const [dataPoints, setDataPoints] = useState([]);
  const [data, setData] = useState([]);
  const pickerRef = useRef();

function open() {
  pickerRef.current.focus();
}

function close() {
  pickerRef.current.blur();
}
  // useEffect(() => {
  //   const unsubscribe = onSnapshot(collection(db, 'users', 'Random'), (snapshot) => {
  //     const data = [];
  //     snapshot.forEach((doc) => {
  //       data.push({ id: doc.id, ...doc.data() });
  //     });
  //     setData(data);
  //   });
  //   return () => unsubscribe();
  // }, []);
  // const renderItem = ({ item }) => (
  //   <View style={{ padding: 10 }}>
  //     <Text>Investment: {item.investment}</Text>
  //     <Text>Price: {item.price}</Text>
  //     <Text>Type: {item.type}</Text>
  //   </View>
  // );

  // function create() {
  //   // Check if the collection already exists
  //   const usersCollectionRef = collection(db, "users");
  //   const newCollectionRef = collection(usersCollectionRef, "New Collection");
  //   getDoc(newCollectionRef)
  //     .then((docSnapshot) => {
  //       if (docSnapshot.exists()) {
  //         // Collection already exists, show error message or take appropriate action
  //         Alert.alert("Error", "Collection มีอยู่เเล้ว");
  //         return;
  //       }
  
  //       // Collection does not exist, add a new document
  //       setDoc(newCollectionRef, {
  //         investment: investment,
  //         price: price,
  //       })
  //         .then(() => {
  //           // Data save success
  //           Alert.alert("Success", "Data submitted");
  //           console.log("Data submitted");
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //         });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  // function create() { 
  //   // Add a new document 
  //   setDoc(doc(db, "users", "New Collection"), {
  //     investment: investment,
  //     price: price,
  //   }).then(()=>{
      
  //     //data save succuss
  //     Alert.alert('บันทึกข้อมูลลงในฐานข้อมูลเเล้ว')
  //     console.log('data submitted');
  //   }).catch(()=>{
  //     console.log(error);
  //   });
  // } 

  // function create(){
  //   if (investment && price && selectedtype) {
  //     setDoc(doc(db, "users", "New Collection"), {
  //       investment: investment,
  //       price: price,
  //       type:selectedtype,
  //     }).then(()=>{
        
  //       //data save success
  //       Alert.alert('บันทึกข้อมูลลงในฐานข้อมูลเเล้ว')
  //       console.log('data submitted');
  //       // setDataPoints([...dataPoints, { price }]);
  //     }).catch(()=>{
  //       console.log(error);
  //     });
  //   } else {
  //     Alert.alert('เตือน','กรอกข้อมูลไม่ครบถ้วน')
  //     console.log('Investment or price is null');
  //   }
  // }
  function create(){
    if (investment && price && selectedtype) {
      setDoc(collection(db, "users", "Random").doc(), {
        investment: investment,
        price: price,
        type: selectedtype,
      })
      .then(() => {
        //data save success
        Alert.alert('บันทึกข้อมูลลงในฐานข้อมูลเเล้ว')
        console.log('data submitted');
      })
      .catch((error) => {
        console.log(error);
      });
    } else {
      Alert.alert('เตือน','กรอกข้อมูลไม่ครบถ้วน')
      console.log('Investment or price is null');
    }
  }
  return (
    <View
      style={styles.container}
      behavior="padding"
    >

      <View style={{ display: 'flex', justifyContent: 'flex-start', height: '100%' }}>
        <Text style={styles.title}>กรอกข้อมูล</Text>
        
      
   
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
          <Text style={{textAlign:'center',
    justifyContent: 'center',
    fontSize: 25,
    fontWeight: "800",
    color: "orange",}}>เลือกประเภทการลงทุน</Text>
          <Picker
           ref={pickerRef}
  selectedValue={selectedtype}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedtype(itemValue)
  }>
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
          {/* <View style={{ flex: 1, padding: 20 }}>
      <TextInput style={{ padding: 10, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }} placeholder="Investment" />
      <TextInput style={{ padding: 10, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }} placeholder="Price" />
      <Button title="Create" onPress={create} />
      <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </View> */}
          
          {/* <LineChart
  data={{
    labels: dataPoints.map((dataPoint, index) => index.toString()),
    datasets: [{
      data: dataPoints.map(dataPoint => dataPoint.price)
    }]
  }}
  width={Dimensions.get('window').width}
  height={220}
  yAxisSuffix=" บาท"
  chartConfig={{
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "#fb8c00",
    backgroundGradientTo: "#ffa726",
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#ffa726"
    }
  }}
  bezier
  style={{
    marginVertical: 8,
    borderRadius: 16
  }}
/> */}
        </View>
      </View>
    </View>
  )
}


export default HomeScreen