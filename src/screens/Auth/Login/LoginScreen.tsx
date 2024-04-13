import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import {windowWidth, windowHeight} from '../../../constant/helper';
import { FLAG_IMAGE } from '../../../constant/images';
import {DynamicScreenProps} from '../../../constant/types';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {scale} from 'react-native-size-matters';

const LoginScreen: React.FC<DynamicScreenProps<'LoginScreen'>> = ({
  navigation,
}) => {
  return (
    <>
      <View style={styles.mainContainer}>
        <View style={{alignItems: 'flex-end'}}>
          <TouchableOpacity style={styles.helpstyle}>
            <Text style={styles.helpText}>Help</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.subContainer}>
          <View style={styles.logoImage}>
            <Text style={{color: 'white', fontSize: 30}}>EV Taxi</Text>
          </View>
          <Text style={styles.text1}>What's Your Number</Text>
          <Text style={styles.text2}>Enter Your Phone Number To Proceed</Text>

          <View style={styles.inputView}>
            <Image
              source={FLAG_IMAGE}
              style={{height: 20, width: 20, marginRight: 5, marginLeft: 5}}
            />
            <Text>+91</Text>

            <TextInput
              placeholder="0000000000"
              keyboardType="numeric"
              style={styles.textInput}></TextInput>
          </View>
        </View>

        <View style={styles.nextButtoView}>
          <Pressable
            onPress={() => navigation.navigate('OtpScreen')}
            style={({pressed}) => [
              styles.nextButton,
              pressed && styles.pressed,
            ]}>
            <Text style={{color: 'white'}}>Next</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  subContainer: {
    alignItems: 'center',
  },
  helpText: {
    color: 'white',
  },
  helpstyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 12,
    marginTop: scale(10),
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#909090',
    borderRadius: 10,
    backgroundColor: 'black',
  },
  nextButton: {
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: 'black',
    height: scale(45),
    borderWidth: 1,
    borderColor: '#909090',
    borderRadius: 10,
  },
  nextButtoView: {
    justifyContent: 'flex-end',
    marginBottom: 30,
    marginHorizontal: '5%',
    height: scale(260),
  },

  text1: {
    fontSize: 20,
    marginTop: '5%',
  },
  text2: {
    fontWeight: '400',
    color: '#909090',
    marginTop: 10,
  },
  logoImage: {
    marginTop: '20%',
    height: 167,
    width: 167,
    borderWidth: 1,
    backgroundColor: 'black',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputView: {
    marginTop: '10%',
    width: '90%',
    borderColor: '#909090',
    borderWidth: 1,
    borderRadius: 10,
     flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textInput: {
    borderColor: '#909090',
    height: '100%',
    width: '90%',
    marginStart: 3,
  },
  pressed: {
    opacity: 0.7,
  },
});
