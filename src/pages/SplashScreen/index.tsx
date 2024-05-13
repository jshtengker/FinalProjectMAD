/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
// import LogoUnklab from '../../assets/icon/logoUnklab.svg'
import Unklab from '../../assets/icon/LogoUnklab.svg'

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => navigation.replace('Login'), 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Unklab width={300} height={300} style={styles.logo}/>
      <Text style={styles.text}>U-PIL</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#A109C7',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  text: {
    fontSize: 32,
    fontFamily: 'Poppins-Medium',
    marginBottom: 80

  },
  logo: {
    marginLeft: 5,
    marginBottom: 30,
    resizeMode: 'contain'
  }
});