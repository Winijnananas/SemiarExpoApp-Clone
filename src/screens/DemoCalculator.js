import { View, Text, SafeAreaView, KeyboardAvoidingView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { Constants } from 'expo-constants'
const DemoCalculator = () => {
    //กำไรขั้นต้น
    const [cost, setCost] = useState('')
    //รายได้
    const [expenses, setExpenses] = useState('')

    //ต้นทุนขาย
    const [payment, setPayment] = useState('')

    const CalculatorCost = () => {
        const cost = expenses - payment
        setCost(cost.toFixed(0))
    }
    return (
        <ScrollView>
            <SafeAreaView style={{ flex: 1, alignContent: "center", alignItems: 'center', justifyContent: 'center', }}>
                <Text style={{ fontWeight: 'bold', fontSize: 40 }}>Demo Calculator</Text>
                <KeyboardAvoidingView>
                    <TextInput style={styles.inputBox}
                        onChangeText={(text) => setExpenses(text)}
                        placeholder='รายได้'
                        keyboardType='numeric'
                        secureTextEntry={false}
                        autoCapitalize='none'
                        clearButtonMode="always"
                    />
                </KeyboardAvoidingView>
                <KeyboardAvoidingView>
                    <TextInput style={styles.inputBox}
                        onChangeText={(text) => setPayment(text)}
                        placeholder='เงินที่จ่าย'
                        keyboardType='numeric'
                        secureTextEntry={false}
                        autoCapitalize='none'
                        clearButtonMode="always"

                    />
                </KeyboardAvoidingView>
                <View>
                    <TouchableOpacity
                        onPress={CalculatorCost}
                    >
                        <View style={styles.CalBtn}>
                        <Text style={{fontSize:25,fontWeight:'bold',color:'#FFF'}}>คำนวณกำไรขั้นต้น</Text>
                        </View>
                    </TouchableOpacity>
                    <View>
                    <Text style={{ color: 'black', fontWeight: '700', fontSize: 15, textAlign: 'left', marginLeft: 5 }}>กำไรขั้นต้น</Text>
                        <Text style={{fontSize:30,fontWeight:'bold'}}>{cost}</Text>
                        <Text style={{ color: '#13678A', fontWeight: '700', fontSize: 15, textAlign: 'left', marginLeft: 5 }}>บาท</Text>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

export default DemoCalculator

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
    },
    inputBox: {
        height: 55,
        width: 300,
        margin: 15,
        borderWidth: 0.5,
        padding: 10,
        borderRadius: 0,
        backgroundColor: "#FFFA"
    },
    CalBtn: {
        height: 55,
        width: 250,
        margin: 15,
        padding: 10,
        borderRadius: 0,
        backgroundColor: "#F25C05",
        alignItems:'center',
    }

});