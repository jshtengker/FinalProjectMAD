/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Profile, Logo, Kalender, Home, BackButton} from '../../../assets/icon';

const Button = ({
  style,
  label,
  backgroundColor = '#02CF8E',
  textColor = '#020202',
  onSubmit,
  type,
  icon,
  buttonStyle,
  textButtonStyle,
  buttonStyle2
 
}) => {
  if (type === 'icon-only') {
    return (
      <TouchableOpacity style={style} activeOpacity={0.7} onPress={onSubmit}>
        {icon === 'profile-button' && <Profile />}
        {icon === 'logo' && <Logo />}
        {icon === 'kalender-button' && <Kalender />}
        {icon === 'home-button' && <Home />}
        {icon === 'back-button' && <BackButton />}


      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      style={[styles.container(backgroundColor), buttonStyle, buttonStyle2]}
      activeOpacity={0.7}
      onPress={onSubmit}>
      <Text style={[styles.label(textColor), textButtonStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: backgroundColor => ({
    backgroundColor: backgroundColor,
    paddingVertical: 12,
    borderRadius: 8,
    width: 80,
    marginLeft: 130,
    marginTop: 0,
    marginBottom: 20,
  }),
  label: textColor => ({
    textAlign: 'center',
    color: textColor,
    fontSize: 20
  }),
});