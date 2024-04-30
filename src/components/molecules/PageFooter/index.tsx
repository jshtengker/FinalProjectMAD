/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Profile from '../../../assets/icon/Profile.svg';
import {Button} from '../../atoms';

const PageFooter = ({label, onPress, type, profileButton}) => {

  return (
    <View style={styles.container}>
      {profileButton && (
        <Button type="icon-only" icon="profile-button" onSubmit={onPress} />
      )}
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