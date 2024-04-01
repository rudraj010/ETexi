import { Button, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { height,width } from '../../../constant/helper'
import flag from "../../../assets/flag.png"
import { useNavigation } from '@react-navigation/native'


const OtpScreen = () => {
  const navigation =useNavigation()
  return (
    <>

      <View style={styles.mainContainer}>
        <View style={{ alignItems: "flex-end" }}>

          <Pressable style={({pressed})=>[styles.helpstyle, pressed && styles.pressed]} >

            <Text style={styles.helpText}>Help</Text>
          </Pressable>
        </View>


        <View style={styles.subContainer}>
          <View style={styles.logoImage}>
<Text style={{color:"white", fontSize:30}}>EV Taxi</Text>
          </View>
          <Text style={styles.text1}>Verify OTP</Text>
          <Text style={styles.text2}>Enter Varification Code</Text>

          <View style={styles.inputView}>
          <Image source={flag} style={{height:20,width:20,marginRight:5,marginLeft:5}}/>
          <Text>+91</Text>

            <TextInput placeholder='0000000000' style={styles.textInput}></TextInput>

          </View>
        </View>


        <View  style={styles.nextButtoView}>
        <Pressable     
 style={({pressed})=>[styles.nextButton, pressed && styles.pressed]}>

            <Text style={{color:"white"}} >Next</Text>
          </Pressable>
        </View>

      </View>

    </>
  )
}

export default OtpScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: "100%",
    height: "100%",




  },
  subContainer: {
    flex: 1,

    // justifyContent: "center",
    alignItems: "center",


  },
  helpText: {
    color: "white",
    // paddingVertical:5,
    // paddingHorizontal:12,
  },
  helpstyle: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 12,
    marginTop: "15%",
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: "#909090",
    borderRadius: 10,
    backgroundColor:"black"
  },
  nextButton:{
    justifyContent: "center",
    alignItems: "center",
    // paddingVertical: 5,
    // paddingHorizontal: 12,
    // marginTop: "10%",
    backgroundColor:"black",
    height:"25%",
    // width:"90%",
    borderWidth: 1,
    borderColor: "#909090",
    borderRadius: 10,
    // opacity:1,
  },
  nextButtoView:{ 
    justifyContent: "flex-end", 
    marginBottom:"15%",
    marginHorizontal:"5%",
    // opacity:5,

  },

  text1: {
    fontSize: 20,
    marginTop:"5%"

  },
  text2: {
    fontWeight: "400",
    color: "#909090",
    marginTop: 10
  },
  logoImage: {
    marginTop:"20%",
    // flex:1,
    height:167,
    width: 167,
    borderWidth: 1,
    backgroundColor: "black",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
inputView:{
  marginTop:"10%",
  width:"90%",
  borderColor: "#909090",
  borderWidth: 1,
  borderRadius:10,
  height:"10%",
  flexDirection:"row",
  justifyContent:"flex-start",
  alignItems:"center",


},
  textInput: {
    // margin: "5%",
    borderColor: "#909090",
    // borderWidth: 1,
    height:"100%",
    width:"90%",
    marginStart:3

  },
  pressed:{
    opacity:0.7,
},
})