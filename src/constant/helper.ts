import {Dimensions, PixelRatio, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Snackbar from 'react-native-snackbar';

export const width = Dimensions.get('window').width
export const height =Dimensions.get('window').height

export const normalizeFont = (size: number) => {
    const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
  
    const scale = SCREEN_WIDTH / 375;
  
    function normalize(size: number) {
      const newSize = size * scale;
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
    }
    return normalize(size);
  };

  export const Snackerror = (msg: string) => {
    if (msg) {
      return Snackbar.show({
        text: msg,
        duration: 2000,
        backgroundColor: '#dc3545',
      });
    }
  };
  
  export const Snacksuccess = (msg: string) => {
    if (msg) {
      return Snackbar.show({
        text: msg,
        duration: 2000,
        backgroundColor: 'green',
      });
    }
  };