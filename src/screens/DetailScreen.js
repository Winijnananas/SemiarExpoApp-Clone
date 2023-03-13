import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from '../../css/styles';
import { doc, setDoc } from "firebase/firestore";
import { db } from '../components/config';

const DetailScreen=()=>{
  return (
    <View>
      <Text>detailScreen</Text>
    </View>
  )
}

export default DetailScreen