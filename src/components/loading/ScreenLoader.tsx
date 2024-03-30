import {StyleSheet, View, ActivityIndicator, Modal} from 'react-native';
import React from 'react';
import { COLORS } from '../../constant/colors';

const ScreenLoader = () => {
  return (
    <View style={styles.main_container}>
      <ActivityIndicator size={50} color={'green'} />
    </View>
  );
};

export default ScreenLoader;

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
