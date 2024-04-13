import {View, Text, Button} from 'react-native';
import React from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/Auth/Login/LoginScreen';
import OtpScreen from '../screens/Auth/Login/OtpScreen';
import { RootStackParamlist } from '../constant/types';
import {createStackNavigator} from '@react-navigation/stack';


const AuthStack = () => {
const Stack = createStackNavigator<RootStackParamlist>();
  

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen 
      name="LoginScreen" 
  
      component={LoginScreen}
       />

<Stack.Screen 
      name="OtpScreen" 
  
      component={OtpScreen}
       />
       
    </Stack.Navigator>
  );
};

export default AuthStack;
