 import { View, Text} from 'react-native'
 import React,{useState} from 'react'
 import { StatusBar} from 'react-native'

 import {
    NavigationContainer,
  } from '@react-navigation/native'
 import AppStack from './AppStack';
 import AuthStack from './AuthStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


 const AppNavContainer = () => {
    const [isAuth,setIsAuth]=useState(false)
   return (
    

     <NavigationContainer>

      {
        isAuth?<AppStack/>:<AuthStack/>
      }
     </NavigationContainer>
   )
 }
 
 export default AppNavContainer