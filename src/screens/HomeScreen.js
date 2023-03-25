
// import { useNavigation } from '@react-navigation/core'
// import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, SafeAreaView, Image, Alert, Dimensions, Button, FlatList, Component } from 'react-native'
// import React, { useEffect, useState, useRef } from 'react'
// import styles from '../../css/styles';
// import { collection, doc, getDoc, setDoc, onSnapshot } from "firebase/firestore";
// import { db } from '../components/config';



// const HomeScreen = () => {
//   const [round, setRound] = React.useState('');
  
//   return (
//     <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
//       <Text>HomeScreen</Text>
//       <TextInput style={{height: 40,
//         width: "90%",
//         borderWidth: 1,
//         borderColor: "#3D3D3D",
//         borderRadius: 1,
//         backgroundColor: "#FFFF",
//         padding: 5,
//         color: "#A9A9A9",
//         fontWeight: "700",
//         fontSize: 15,
//         marginBottom: 15,}}
//         onChangeText={setRound}
//         value={round}
//         placeholderTextColor="#A9A9A9"
//         autoCapitalize='none'
//         placeholder="รอบที่ต้องการลงทุน"
//         clearButtonMode="always"
//       />
//     </View>
//   )
// };

// export default HomeScreen



import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

  
class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: ''
    };
  }

  handleNameChange = (text) => {
    this.setState({ name: text });
  };

  handleEmailChange = (text) => {
    this.setState({ email: text });
  };

  handleSubmit = () => {
    // Add user to database or perform other actions here
    console.log('Name:', this.state.name);
    console.log('Email:', this.state.email);
  };
   

  render() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <TextInput
        style={{fontSize:25,
          height: 50,
        width: "90%",
        borderWidth: 1,
        borderColor: "#3D3D3D",
        borderRadius: 1,
        backgroundColor: "#FFFF",
        padding: 5,
        color: "#A9A9A9",
        fontWeight: "700",
        fontSize: 15,
        marginBottom: 15
        }}
          placeholder="Enter name"
          onChangeText={this.handleNameChange}
          value={this.state.name}
        />
        <TextInput
        style={{fontSize:25,
          height: 50,
        width: "90%",
        borderWidth: 1,
        borderColor: "#3D3D3D",
        borderRadius: 1,
        backgroundColor: "#FFFF",
        padding: 5,
        color: "#A9A9A9",
        fontWeight: "700",
        fontSize: 15,
        marginBottom: 15
        }}
          placeholder="Enter email"
          onChangeText={this.handleEmailChange}
          value={this.state.email}
        />
        <Button icon={<Icon
        name='check'
        size={15}
        color='white'
        />}title="Submit" onPress={this.handleSubmit} />
      </View>
    );
  }
}

export default HomeScreen;



