import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const More = () => {
  return (
    <View styles={styles.container}>
      <Text>more</Text>
    </View>
  );
};

export default More;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
