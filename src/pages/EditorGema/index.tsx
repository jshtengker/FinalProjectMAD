/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, ScrollView, ScrollViewBase} from 'react-native';
import React, {useState, useEffect} from 'react';
import {PageHeader, Gap, Button, TextInput} from '../../components';
import PageFooter from '../../components/molecules/PageFooter';
import TextBox from '../../components/molecules/TextBox';
import { getDatabase, ref, push, set } from "firebase/database";


const EditorGema = ({navigation, route}) => {
  const {uid} = route.params;
  const [pilihanEditorGema, setPilihanEditorGema] = useState('')

  const onSubmit = () => {
    const data = {
      pilihanEditorGema: pilihanEditorGema,
    }

    const db = getDatabase();
    const votingRef = ref(db, `voting/${uid}`);
    const newVotingRef = push(votingRef);
    set(newVotingRef, data)
    // ...
  }

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
    height: 300,
    paddingTop: 18,
    paddingBottom: 0,
  }
  const buttonStyle2 = {
    backgroundColor: 'red',
    paddingVertical: 12,
    borderRadius: 8,
    width: 80,
    marginLeft: 130,
    marginTop: 0,
    marginBottom: 20,
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
       EDITOR GEMA CANDIDATE 
      </Text>
      <Gap height={20} />
      <Button buttonStyle={buttonStyle} textButtonStyle={textButtonStyle} label="NAME" onSubmit={() => navigation.navigate('Home')} />
      <Button buttonStyle={buttonStyle} textButtonStyle={textButtonStyle} label="NAME" onSubmit={() => navigation.navigate('Home')} />
      <Button buttonStyle={buttonStyle} textButtonStyle={textButtonStyle} label="NAME" onSubmit={() => navigation.navigate('Home')} />

      <Gap height={15} />
      <TextInput
          label="Nama Kandidat"
          placeholder="Masukkan nama kandidat Editor Gema"
          value={pilihanEditorGema}
          onChangeText={value => setPilihanEditorGema(value)}

        />
      <Button buttonStyle2={buttonStyle2}  label="Vote" onSubmit={onSubmit} />       
      </View>
      </ScrollView>
      <Gap height={5} />
      <PageFooter  
      OnPressHome={() => navigation.navigate('Candidate', {uid:uid})}
      homeButton={true}
      homeButtonStyle={homeButtonStyle}
      
      />
    </View>
  );
};

export default EditorGema;

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