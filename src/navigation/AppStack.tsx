import {View, Text} from 'react-native';
import React from 'react';
import { StatusBar} from 'react-native'

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/App/Home/HomeScreen';

const AppStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        
      }}>
      <Stack.Screen 
      name="HomeScreen" 
      options={{
        title:"Login"
      }}
      component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
