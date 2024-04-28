/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {BackButton} from '../../../assets/icon';
import {Button} from '../../atoms';
import Unklab from '../../../assets/images/Unklab.png';


const PageFooter = ({label, backButton, onPress, type}) => {

  return (
    <View style={styles.container}>
     <Text style={styles.label}>
      {label}
      </Text>
    </View>
  );
};

export default PageFooter;

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
    flex: 1,
    backgroundColor: '#A109C7',
    paddingTop: 0,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 0,
    height: 90,

  },
  label: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: '#020202',
    marginLeft: 26,
  },
  appTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: '#020202',
  },
  appSubTitle: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    color: '#8D92A3',
  },
  imageStyle: {
    width: 60, 
    height: 40,
    resizeMode: 'stretch',
    alignItems: 'center',
    marginBottom: 50,
    marginTop: 10,
    
   },
});