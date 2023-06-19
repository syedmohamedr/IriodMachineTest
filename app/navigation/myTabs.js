import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

import home from '../screens/home';
import meals from '../screens/meals';
import profile from '../screens/profile';
import more from '../screens/more';

const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#3BB0EC"
      barStyle={{backgroundColor: '#F6F6F6'}}>
      <Tab.Screen
        name="Home"
        component={home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <AntDesign name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Meals"
        component={meals}
        options={{
          tabBarLabel: 'Meals',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="calendar-blank-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={more}
        options={{
          tabBarLabel: 'More',
          tabBarIcon: ({color}) => (
            <Feather name="more-horizontal" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
