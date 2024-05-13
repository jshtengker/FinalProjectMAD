/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {ScrollView, StyleSheet, View, Text, Image} from 'react-native';
import {Button, Gap, PageHeader, TextInput} from '../../components';
import Unklab from '../../assets/images/Unklab.png';
// import { Image } from 'react-native-svg';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { showMessage } from 'react-native-flash-message';


const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
      // Signed in 
      const user = userCredential.user;
      navigation.navigate('Home', {uid: user.uid});
    })
    .catch(error => {
      const errorMessage = error.message;
      showMessage({
        message: errorMessage,
        type: 'danger',
      })
    });
  }

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.title}>
        <Image source={Unklab} style={styles.imageStyle}/> {''}U - PILIHAN
        </Text>
        <Gap height={25} />
        <Text style={styles.head}>
          SISTEM PEMILIHAN ANGGOTA{'\n'}
          <Gap height={20} />
          BADAN EKSEKUTIF MAHASISWA (BEM){'\n'}
          <Gap height={20} />
          UNIVERSTIAS KLABAT
          </Text>
      </View>
      <Gap height={80} />
      <View style={styles.contentWrapper}>
        <Gap height={24} />
        <TextInput
          label="EMAIL ADDRESS"
          placeholder="Type your email address"
          value={email}
          onChangeText={value => setEmail(value)}
        />
        <Gap height={16} />
        <TextInput 
        label="PASSWORD" 
        placeholder="Type your password"
        value={password}
        onChangeText={value => setPassword(value)}
        secureTextEntry={true}
        />
        <Gap height={24} />
        <Button label="Login" onSubmit={onSubmit} />
        <Gap height={12} />
        <Button
          label="Create New Account"
          backgroundColor="#8D92A3"
          textColor="#FFFFFF"
          onSubmit={() => navigation.navigate('SignUp')}
        />
      </View>
    </ScrollView>
  );
};

export default Login;

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
    fontSize: 50,
    marginTop: 70,
  },
  head: {
    fontFamily: 'Poppins',
    color: '#FFFFFF',
    textAlign:'center',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 12,
  },
  imageStyle: {
   width: 60, 
   height: 50,
   resizeMode: 'contain',
  //  alignItems: 'center',
   marginBottom: 100,
   marginTop: 100,
  },
  buttonStyle: {
    width: 150,
    marginLeft: 85, 
  }
});