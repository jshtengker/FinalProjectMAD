/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashScreen, Login, Home, Profile, Schedule, Candidate, President, VicePresident, Secretary, Treasurer, Parlementary, Sport, Health, Spiritual, EditorGema, PublicRelation, Agriculture, Education} from '../pages';

const Stack = createNativeStackNavigator();
const index = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Schedule"
        component={Schedule}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Candidate"
        component={Candidate}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="President"
        component={President}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="VicePresident"
        component={VicePresident}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="Secretary"
        component={Secretary}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Treasurer"
        component={Treasurer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Parlementary"
        component={Parlementary}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Sport"
        component={Sport}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Health"
        component={Health}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Spiritual"
        component={Spiritual}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditorGema"
        component={EditorGema}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PublicRelation"
        component={PublicRelation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Argiculture"
        component={Agriculture}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Education"
        component={Education}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
    
  );
};

export default index;