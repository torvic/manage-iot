import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/DashboardScreen/DashboardScreen';
import Entypo from 'react-native-vector-icons/MaterialIcons';
import DevicesScreen from '../screens/DevicesScreen/DevicesScreen';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarInactiveTintColor: '#ffbd7d',
        tabBarActiveTintColor: '#e47911',
      }}>
      <Tab.Screen
        component={HomeScreen}
        name="dashboard"
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="dashboard" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        component={DevicesScreen}
        name="devices"
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="device-hub" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
