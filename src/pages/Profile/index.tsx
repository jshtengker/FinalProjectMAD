/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, ScrollView, TextInput, ScrollViewBase} from 'react-native';
import React, {useEffect, useState} from 'react';
import {PageHeader, Gap, Button} from '../../components';
import PageFooter from '../../components/molecules/PageFooter';
import TextBox from '../../components/molecules/TextBox';
import { getDatabase, ref, onValue } from 'firebase/database';

const Profile = ({navigation, route}) => {
  const {uid} = route.params;
  const [user, setUser] = useState({})
  const [nama, setNama] = useState('')
  const [nim, setNim] = useState('0')
  const [fakultas, setFakultas] = useState('')
  const db = getDatabase();

  useEffect(() => {
    const userRef = ref(db, 'users/' + uid);
    onValue(userRef, snapshot => {
      if(snapshot.exists()){
        const data = snapshot.val();
        setUser(data)
        setNama(data.userProfile.nama)
        setNim(data.userProfile.nim)
        setFakultas(data.userProfile.fakultas)
      }
    });
  }, [])

  const homeButtonStyle = {
    // backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginRight: 0,
    paddingLeft: 0,
    marginHorizontal: -225,
    marginVertical: -10,
    paddingTop: 19,
    opacity: 0.3
  }  
  const customContainerStyle = {
    flex: 1,
    backgroundColor: '#A109C7',
    paddingTop: 30,
    paddingBottom: 40,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 70,
    marginTop: 5, 
  }
  const textBoxStyle = {
    backgroundColor: 'grey',
        borderRadius: 8,
        padding: 5,
        marginBottom: 10,
        borderWidth: 1,
        paddingBottom: 500,
        marginTop: -20,
    
  }
  const profileButtonStyle = {
    // backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginRight: 0,
    paddingLeft: 0,
    marginHorizontal: 190,
    marginVertical: -10,
  };
  const namaStyle = {
    color: 'white'
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
        PROFILE
      </Text>
      <Gap height={44} />
      <TextBox
      textBoxStyle={textBoxStyle}
      nama={nama}
      fakultas={fakultas}
      nim={nim}
      namaStyle={namaStyle}
      />
      <Gap height={42} />
      </View>
      </ScrollView>
      <PageFooter 
      OnPressHome={() => navigation.navigate('Home', {uid:uid})}
      homeButton={true}
      profileButton={true}
      homeButtonStyle={homeButtonStyle}
      containerStyle={customContainerStyle}
      profileButtonStyle={profileButtonStyle}
      />
    </View>
  );
};

export default Profile;

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