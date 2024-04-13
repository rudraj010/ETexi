import {NavigationProp} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {
  GestureResponderEvent,
  ImageSourcePropType,
  KeyboardTypeOptions,
} from 'react-native';

export type RootStackParamlist = {
  OtpScreen: undefined;
  LoginScreen: undefined;
};

// DYNAMIC PROP FOR NAVIGATION AND ROUTE
export type DynamicScreenProps<RoutName extends keyof RootStackParamlist> =
  StackScreenProps<RootStackParamlist, RoutName>;
