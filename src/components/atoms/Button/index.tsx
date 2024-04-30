/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Profile, Logo} from '../../../assets/icon';

const Button = ({
  label,
  backgroundColor = '#02CF8E',
  textColor = '#020202',
  onSubmit,
  type,
  icon,
 
}) => {
  if (type === 'icon-only') {
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={onSubmit}>
        {icon === 'profile-button' && <Profile />}
        {icon === 'logo' && <Logo />}
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      style={styles.container(backgroundColor)}
      activeOpacity={0.7}
      onPress={onSubmit}>
      <Text style={styles.label(textColor)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: backgroundColor => ({
    backgroundColor: backgroundColor,
    paddingVertical: 12,
    borderRadius: 8,
    width: 150,
    marginLeft: 13,
  }),
  label: textColor => ({
    textAlign: 'center',
    color: textColor,
  }),
});