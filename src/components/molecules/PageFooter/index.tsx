/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Profile from '../../../assets/icon/Profile.svg';
import {Button} from '../../atoms';

const PageFooter = ({label, onPressProfile, OnPressKalender, OnPressHome, type, profileButton, kalenderButton, profileButtonStyle, kalenderButtonStyle, homeButton, homeButtonStyle, containerStyle, backButton}) => {
  
  return (
    <View style={[styles.container, containerStyle]}>
      {profileButton && (
        <Button type="icon-only" icon="profile-button" onSubmit={onPressProfile} style={profileButtonStyle}/>
      )}
      
      {kalenderButton &&  (
        <Button type="icon-only" icon="kalender-button" onSubmit={OnPressKalender} style={kalenderButtonStyle} />
      )}

      {homeButton &&  (
        <Button type="icon-only" icon="home-button" onSubmit={OnPressHome} style={homeButtonStyle} />
      )}

      {backButton &&  (
        <Button type="icon-only" icon="back-button" onSubmit={OnPressBack} style={backButtonStyle} />
      )}
    
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
    paddingTop: 40,
    paddingBottom: 40,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 70,
    
  },
  container1: {
    flex: 1,
    backgroundColor: '#A109C7',
    paddingTop: 40,
    paddingBottom: 40,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 70,
    
  },
  label: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    color: 'white',
    marginLeft: 0,
    backgroundColor: 'black',
    padding: 10,
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