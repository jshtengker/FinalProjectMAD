/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {ScrollView, StyleSheet, View, Text, Image} from 'react-native';
import {Button, Gap, PageHeader, TextInput} from '../../components';
import Unklab from '../../assets/images/Unklab.png';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
// import { Image } from 'react-native-svg';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import { showMessage } from 'react-native-flash-message';
import { getDatabase, ref, set } from "firebase/database";


const SignUp = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = () => {
        const data = {
            email: email,
            // password: password,
        };

        const userProfile = {
            nama: 'null',
            nim: 0,
            fakultas: 'null'
        };

        const auth = getAuth();
        const db = getDatabase();
        createUserWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // simpan ke dalam realtime database
            set(ref(db, 'users/' + user.uid), data);
            set(ref(db, 'users/' + user.uid + '/userProfile'), userProfile);
            showMessage({
                message: 'Registration Success',
                type: 'success',
            });
            navigation.navigate('Login');
            // console.log(user)
        })
         .catch(error => {
            // const errorCode = error.code;
            const errorMessage = error.message;
            showMessage({
                message: errorMessage,
                type: 'danger',
            });
        });
    };

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.title}>
        <Image source={Unklab} style={styles.imageStyle}/> {''}U - PILIHAN
        </Text>
        <Text style={styles.head}>
          SISTEM PEMILIHAN ANGGOTA{'\n'}
          <Gap height={15} />
          BADAN EKSEKUTIF MAHASISWA (BEM){'\n'}
          <Gap height={15} />
          UNIVERSTIAS KLABAT
          </Text>
      </View>
      <Gap height={140} />
      <View style={styles.contentWrapper}>
        <Gap height={24} />
        <TextInput
          label="EMAIL ADDRESS"
          placeholder="Type your email address"
          value={email} onChangeText={value => setEmail(value)}
        />
        <Gap height={16} />
        <TextInput label="PASSWORD" placeholder="Type your password"
        value={password} onChangeText={value => setPassword(value)} secureTextEntry={true} />
        <Gap height={24} />
        <Button label="Create Account" onSubmit={onSubmit} />
        <Gap height={12} />
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#A109C7',
    flex: 1,
  },
  contentWrapper: {
    backgroundColor: '#A109C7',
    flex: 1,
    paddingHorizontal: 24,
  },
  title: {
    fontFamily: 'Poppins',
    color: '#FFFFFF', 
    fontWeight: '700', 
    textAlign:'center',
    lineHeight: 52,
    fontSize: 35,
    marginTop: 33,
  },
  head: {
    fontFamily: 'Poppins',
    color: '#FFFFFF',
    textAlign:'center',
    fontSize: 13,
    fontWeight: '500',
    marginTop: 12,
  },
  imageStyle: {
   width: 60, 
   height: 50,
   resizeMode: 'stretch',
   alignItems: 'center',
   marginBottom: 50,
   marginTop: 100,
  },
  buttonStyle: {
    width: 150,
    marginLeft: 85, 
  }
});