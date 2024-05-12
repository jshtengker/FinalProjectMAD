/* eslint-disable prettier/prettier */
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Router from './src/router/';
import './src/config/Firebase';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
      <FlashMessage position="top"/>
    </NavigationContainer>
  );
};

export default App;