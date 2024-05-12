/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, ScrollView, TextInput, ScrollViewBase} from 'react-native';
import React, {useState, useEffect} from 'react';
import {PageHeader, Gap, Button} from '../../components';
import PageFooter from '../../components/molecules/PageFooter';
import TextBox from '../../components/molecules/TextBox';
import { getDatabase, ref, onValue } from 'firebase/database';

const Home = ({navigation, route}) => {
  const {uid} = route.params;

  const homeButtonStyle = {
    // backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginRight: 0,
    paddingLeft: 0,
    marginHorizontal: 20,
    marginVertical: -10,
    paddingTop: 19,
    // opacity: 0.3
  }  

  const profileButtonStyle = {
    // backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginRight: 0,
    paddingLeft: 0,
    marginHorizontal: -10,
    marginVertical: -10,
    opacity: 0.3

  }  
  const kalenderButtonStyle = {
    // backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
    marginVertical: -40,
    marginHorizontal: 160,
    marginRight: -190,
    opacity: 0.3
  };  
  const buttonStyle = {
    backgroundColor: 'red',
    paddingVertical: 12,
    borderRadius: 8,
    width: 80,
    marginLeft: 130,
    marginTop: 0,
    marginBottom: 20,
  }

  return (
    <View style={styles.container}>
      <PageHeader 
      label="U-PIL"  
      />
      <Gap height={5} />  
      <ScrollView>
      <View style={styles.contentWrapper}>
      <Gap height={24} />
      <Text style={styles.textStyle}>
        NEWS
      </Text>
      <Gap height={44} />
      <TextBox/>
      <TextBox/>
      <TextBox/>
      <TextBox/>
      <Gap height={15} />
      <Button buttonStyle={buttonStyle}  label="Vote" onSubmit={() => navigation.navigate('Candidate', {uid:uid})} />
      </View>
      </ScrollView>
      <Gap height={5} />
      <PageFooter 
      onPressProfile={() => navigation.navigate('Profile', {uid: uid})}
      OnPressKalender={() => navigation.navigate('Schedule', {uid: uid})}
      label="test"
      profileButton={true}
      kalenderButton={true}  
      homeButton={true}
      homeButtonStyle={homeButtonStyle}
      kalenderButtonStyle={kalenderButtonStyle}
      profileButtonStyle={profileButtonStyle}
      
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginLeft: 20,
    // marginRight: 20,
    // marginTop: 20
  },
  contentWrapper: {
    backgroundColor: '#A109C7',
    flex: 1,
    paddingHorizontal: 24,
  },
  textStyle: {
    fontFamily: 'Poppins-Medium',
    fontWeight: "700",
    fontSize: 33,
    lineHeight: 49,
    color: "#FFFFFF"
  },
  textStyle2: {
    fontFamily: 'Poppins-Medium',
    fontWeight: "600",
    fontSize: 24,
    color: "#000000",
    textAlign: "center",
    lineHeight: 36,
  },
  textStyle3: {
    fontFamily: 'Poppins-Medium',
    fontWeight: "400",
    fontSize: 14,
    color: "#000000",
    lineHeight: 21,
  },
  line: {
    borderWidth: 1,

  },
});