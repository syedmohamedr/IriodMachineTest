import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import signIn from './app/screens/signIn';
import MyTabs from './app/navigation/myTabs';
import Splash from './app/screens/splashScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="splash" component={Splash} />
        <Stack.Screen name="Tabs" component={MyTabs} />
        <Stack.Screen name="signIn" component={signIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
