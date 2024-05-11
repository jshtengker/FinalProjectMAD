/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, ScrollView, TextInput, ScrollViewBase} from 'react-native';
import React from 'react';
import {PageHeader, Gap, Button} from '../../components';
import PageFooter from '../../components/molecules/PageFooter';
import TextBox from '../../components/molecules/TextBox';

const Candidate = ({navigation}) => {

  const homeButtonStyle = {
    // backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginRight: 0,
    paddingLeft: 0,
    marginHorizontal: 95,
    marginVertical: -10,
    paddingTop: 19,
    // opacity: 0.3
  }  

  const buttonStyle = {
    backgroundColor: 'grey',
    paddingVertical: 12,
    borderRadius: 8,
    width: 300,
    marginLeft: 25,
    marginTop: 0,
    marginBottom: 20,
    height: 80,
    paddingTop: 18,
  }
  const textButtonStyle = {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 40,
    color: 'yellow',
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
        CANDIDATE
      </Text>
      <Gap height={20} />
      <Button buttonStyle={buttonStyle} textButtonStyle={textButtonStyle} label="PRESIDENT" onSubmit={() => navigation.navigate('President')} />
      <Button buttonStyle={buttonStyle} textButtonStyle={textButtonStyle} label="VICE PRESIDENT" onSubmit={() => navigation.navigate('VicePresident')} />
      <Button buttonStyle={buttonStyle} textButtonStyle={textButtonStyle} label="SECRETARY" onSubmit={() => navigation.navigate('Secretary')} />
      <Button buttonStyle={buttonStyle} textButtonStyle={textButtonStyle} label="TREASURER" onSubmit={() => navigation.navigate('Treasurer')} />
      <Button buttonStyle={buttonStyle} textButtonStyle={textButtonStyle} label="PARLEMENTARY" onSubmit={() => navigation.navigate('Parlementary')} />
      <Button buttonStyle={buttonStyle} textButtonStyle={textButtonStyle} label="SPORT" onSubmit={() => navigation.navigate('Sport')} />
      <Button buttonStyle={buttonStyle} textButtonStyle={textButtonStyle} label="HEALTH" onSubmit={() => navigation.navigate('Health')} />
      <Button buttonStyle={buttonStyle} textButtonStyle={textButtonStyle} label="SPIRITUAL" onSubmit={() => navigation.navigate('Spiritual')} />
      <Button buttonStyle={buttonStyle} textButtonStyle={textButtonStyle} label="EDITOR GEMA" onSubmit={() => navigation.navigate('EditorGema')} />
      <Button buttonStyle={buttonStyle} textButtonStyle={textButtonStyle} label="AGRICULTURE" onSubmit={() => navigation.navigate('Argiculture')} />
      <Button buttonStyle={buttonStyle} textButtonStyle={textButtonStyle} label="PUBLIC RELATION" onSubmit={() => navigation.navigate('PublicRelation')} />
      <Button buttonStyle={buttonStyle} textButtonStyle={textButtonStyle} label="EDUCATION" onSubmit={() => navigation.navigate('Education')} />
   
      <Gap height={15} />
      </View>
      </ScrollView>
      <Gap height={5} />
      <PageFooter  
      OnPressHome={() => navigation.navigate('Home')}
      homeButton={true}
      homeButtonStyle={homeButtonStyle}
      
      />
    </View>
  );
};

export default Candidate;

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
    color: "#FFFFFF",
    textAlign: 'center'
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