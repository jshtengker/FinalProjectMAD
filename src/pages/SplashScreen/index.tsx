/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
// import LogoUnklab from '../../assets/icon/logoUnklab.svg'
import Unklab from '../../assets/icon/Unklab.svg'

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => navigation.replace('Login'), 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Unklab style={styles.logo}/>
      <Text style={styles.text}>U - PILIHAN</Text>
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
  },
  logo: {
    marginLeft: 100,
    
  }
});