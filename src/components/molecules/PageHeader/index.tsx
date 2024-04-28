/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {BackButton} from '../../../assets/icon';
import {Button} from '../../atoms';
import Unklab from '../../../assets/images/Unklab.png';


const PageHeader = ({label, backButton, onPress, type}) => {

  return (
    <View style={styles.container}>
      {backButton && (
        <Button type="icon-only" icon="back-button" onSubmit={onPress} />
      )}
      <Text style={styles.label}>
      <Image source={Unklab} style={styles.imageStyle}/> {''}
      {label}
      </Text>
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
    flex: 1,
    backgroundColor: '#A109C7',
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 0,
    
  },
  label: {
    fontFamily: 'Poppins',
    color: '#FFFFFF', 
    fontWeight: '700', 
    textAlign:'center',
    lineHeight: 22,
    fontSize: 35,
    marginLeft: 10,
    marginTop: 0,
    
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