import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {windowWidth, windowHeight} from '../../../constant/helper';
import {FLAG_IMAGE} from '../../../constant/images';
import {DynamicScreenProps} from '../../../constant/types';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {scale} from 'react-native-size-matters';

interface otpInputType {
  name: string;
  type: string;
  keyboardType:string
}

const data: otpInputType[] = [
  {
    name: 'input1',
    type: 'input',
    keyboardType:'numeric'
  },
  {
    name: 'input2',
    type: 'input',
    keyboardType:'numeric'
  },
  {
    name: 'input3',
    type: 'input',
    keyboardType:'numeric'
  },
  {
    name: 'input4',
    type: 'input',
    keyboardType:'numeric'
  },
];

const OtpScreen: React.FC<DynamicScreenProps<'OtpScreen'>> = ({navigation}) => {
  const [otp, setOtp] = useState();

  const renderItem = (item: any, index: number) => {
    switch (item.type) {
      case 'input':
        return <TextInput style={styles.input} 
        keyboardType={item.keyboardType}
        />;
    }
  };

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
          <Text style={styles.text1}>Verify OTP</Text>
          <Text style={styles.text2}>Enter verification code</Text>

          <View style={{flexDirection: 'row', marginTop: 35}}>
            {data.map((item, index) => {
              return <View key={index}>{renderItem(item, index)}</View>;
            })}
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

export default OtpScreen;

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

  pressed: {
    opacity: 0.7,
  },

  inputView: {
    flexDirection: 'row',
    backgroundColor: 'red',
    width: '90%',
  },

  input: {
    width: 50,
    height: 50,
    borderWidth: 1,
    marginHorizontal: 25,
    borderRadius: 10,
    borderColor: '#909090',
    textAlign:'center'
  },
});
