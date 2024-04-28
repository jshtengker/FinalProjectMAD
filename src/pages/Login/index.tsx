/* eslint-disable prettier/prettier */
import React from 'react';
import {ScrollView, StyleSheet, View, Text, Image} from 'react-native';
import {Button, Gap, PageHeader, TextInput} from '../../components';
import Unklab from '../../assets/images/Unklab.png';
// import { Image } from 'react-native-svg';

const Login = ({navigation}) => {
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
        />
        <Gap height={16} />
        <TextInput label="PASSWORD" placeholder="Type your password" />
        <Gap height={24} />
        <Button label="Login" onSubmit={() => navigation.navigate('Home')} />
        <Gap height={12} />
        {/* <Button
          label="Create New Account"
          backgroundColor="#8D92A3"
          textColor="#FFFFFF"
          onSubmit={() => navigation.navigate('SignUp')}
        /> */}
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