import React, {useEffect} from 'react';
import {View, Image,StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
var splash = require('../common/image/splashScreen.png');
const Splash = () => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('signIn');
    }, 3000);
  });
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={splash}
        style={styles.image}></Image>
    </View>
  );
};
export default Splash;
const styles = StyleSheet.create({
  container:{
    height: '100%',
    width: '100%'
  },
  image:{
    height: '100%',
    width: '100%'
  }
});
