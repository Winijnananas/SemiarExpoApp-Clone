
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native';
import { getAuth, signOut } from "firebase/auth";



export default function LogoutBtn() {
  const navigation = useNavigation();
  const auth = getAuth();
  const handleSignOut = async () => {

    const user = auth.currentUser;
  
    if (user) {
      await signOut(auth)
        .then(() => {
          AsyncStorage.removeItem('userToken');
          console.log('User signed out');
          navigation.replace('Splash');

        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  }


  return(
    <TouchableOpacity style={styles.card} onPress={handleSignOut}>
      <Text style={styles.label}>ออกจากระบบ</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 0,
    borderColor: '#B24129',
    borderRadius: 7,
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: 'red',
    marginVertical: 4
  },
  label: {
    color: '#FFF',
    fontWeight: '800',
    alignSelf: 'center'
  }
});