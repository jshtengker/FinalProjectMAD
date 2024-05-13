/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, ScrollView, TextInput, ScrollViewBase} from 'react-native';
import React, {useEffect, useState} from 'react';
import {PageHeader, Gap, Button, PlainText} from '../../components';
import PageFooter from '../../components/molecules/PageFooter';
import TextBox from '../../components/molecules/TextBox';
import { getDatabase, ref, push, set, onValue, get } from "firebase/database";
import Treasurer from '../Treasurer';

const Schedule = ({navigation, route}) => {
  const {uid} = route.params 
  const db = getDatabase();
  const [dataPresiden, setDataPresiden] = useState('')
  const [results, setResultsArray] = useState([])

  useEffect(() => {
    const votingRef = ref(db, `voting/${uid}`)
    onValue(votingRef, snapshot => {
      if (snapshot.exists()){
        const data = snapshot.val()
        const resultsArray = [];
        Object.keys(data).map(key => {
          resultsArray.push(data[key])
        })
        setResultsArray(resultsArray);
        console.log(resultsArray)
      }
    })
  }, [])
  

  const homeButtonStyle = {
    // backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginRight: 0,
    paddingLeft: 0,
    marginHorizontal: -50,
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
    marginHorizontal: -10,
    marginVertical: -10,
    opacity: 0.3
  }  
  const kalenderButtonStyle = {
    // backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
    marginVertical: -40,
    marginHorizontal: 190,
    marginRight: -190,
    // opacity: 0.3

  };

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
        VOTING INFORMATION
      </Text>
      <Gap height={44} />
      {/* <TextBox
      textBoxStyle={textBoxStyle}
      // {dataPresiden}
      />
      {
        results.map( item =>(
          <PlainText label={item.pilihanPresiden} label2={item.pilihanWakilPresiden}/>
        ))
      } */}
      <TextBox textBoxStyle={textBoxStyle}>
      {
          results.map(item => (
          <PlainText  label={`Presiden : ${item.pilihanPresiden}`} 
          label2={`Wakil Presiden : ${item.pilihanWakilPresiden}`}
           Secretary={`Sekertaris : ${item.pilihanSecretary}`} 
           Treasurer={`Bendahara : ${item.pilihanTreasurer}`}
           Parlementary={`Parlementari : ${item.pilihanParlementary}`}
           Sport={`Olaraga : ${item.pilihanSport}`} 
           Health={`Kesehatan : ${item.pilihanHealth}`}
           Spiritual={`Kerohanian : ${item.pilihanSpiritual}`}
           EditorGema={`Editor Gema : ${item.pilihanEditorGema}`}
           Argiculture={`Pertanian : ${item.pilihanAgriculture}`} 
           PublicRelation={`Public Relation : ${item.pilihanPublicRelation}`}
           Education={`Pendidikan : ${item.Education}`} 
          />
        ))
      }
      </TextBox>
      <Gap height={42} />
      </View>
      </ScrollView>
      {/* <Gap height={0} /> */}
      <PageFooter 
      OnPressHome={() => navigation.navigate('Home', {uid:uid})}
      homeButton={true}
      kalenderButton={true}
      kalenderButtonStyle={kalenderButtonStyle}
      homeButtonStyle={homeButtonStyle}
      containerStyle={customContainerStyle}

      
      />
    </View>
  );
};

export default Schedule;

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