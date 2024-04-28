/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, ScrollView, TextInput} from 'react-native';
import React from 'react';
import {PageHeader, Gap, Button} from '../../components';
import PageFooter from '../../components/molecules/PageFooter';

const Home = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <PageHeader 
      label="U-PIL"  
      />
      <Gap height={5} />  
      <View style={styles.contentWrapper}>
      <Gap height={24} />
      <Text style={styles.textStyle}>
        NEWS
      </Text>
      <Gap height={44} />
      </View>
      <Gap height={5} />
      <PageFooter label="closing"/>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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