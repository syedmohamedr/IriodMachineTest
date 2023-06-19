import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {getUrl} from '../services/api/api';

const signIn = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const onSignInPress = () => {
    Alert.alert('Logged In Sucessfully');
    navigation.navigate('Tabs');
    getUrl();
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={{width: '85%', alignSelf: 'center'}}>
        <Text style={[styles.commonFontWeight, {alignSelf: 'flex-end'}]}>
          Skip
        </Text>
      </TouchableOpacity>
      <View style={styles.subContainer}>
        <Text style={styles.heading}>Sign In</Text>
        <Text style={[styles.commonFontColour, {marginBottom: 10}]}>
          Enter your Details
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={setUserName}
          value={userName}
          placeholder="User Name"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
        />
        <TouchableOpacity style={styles.button} onPress={onSignInPress}>
          <Text style={{color: 'white'}}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.commonFontWeight}>Forgot your password?</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.commonFontColour}>Don't have an Account? </Text>
          <TouchableOpacity>
            <Text style={{color: '#5DA7A3', fontWeight: 'bold', marginTop: 15}}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default signIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    height: '80%',
    width: '85%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%',
  },
  button: {
    alignItems: 'center',
    padding: 10,
    width: '100%',
    borderRadius: 20,
    backgroundColor: '#3BB0EC',
    marginTop: 10,
  },
  input: {
    height: 40,
    margin: 12,
    width: '100%',
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#e6e8e6',
    color: '#B6B7B7',
  },
  commonFontColour: {
    color: '#7C7D7E',
    marginTop: 15,
  },
  commonFontWeight: {
    fontWeight: 'bold',
    color: '#4A4B4D',
    marginTop: 15,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#000',
  },
});
