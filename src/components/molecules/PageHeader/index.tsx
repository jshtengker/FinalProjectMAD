/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {BackButton} from '../../../assets/icon';
import {Button} from '../../atoms';
import Unklab from '../../../assets/images/Unklab.png';
import LogoHeader from '../../../assets/icon/LogoHeader.png';

const PageHeader = ({label, backButton, onPress, type, profileButton}) => {

  return (
    <View style={styles.container}>
      
      <Image source={Unklab} style={styles.imageStyle}/>
      
      <Text style={styles.labell}>{label}</Text>
    </View>

  );
};

export default PageHeader;

const styles = StyleSheet.create({
  containerWithPhoto: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingVertical: 37,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    // flex: 1,
    backgroundColor: '#A109C7',
    paddingTop: 80,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 0,
 
  },
  labell: {
    fontFamily: 'Poppins',
    color: '#FFFFFF', 
    fontWeight: '700', 
    textAlign:'center',
    fontSize: 30,
    marginTop: -80,
    marginLeft: 10,
  
  },
  imageStyle: {
    width: 60, 
    height: 50,
    resizeMode: 'stretch',
    alignItems: 'center',
    marginBottom: 0,
    paddingBottom: 0,
    paddingTop: -100,
    marginTop: -80,
    marginLeft: 10
  
    
    
   },
});