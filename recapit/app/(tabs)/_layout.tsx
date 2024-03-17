import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';

import Dashboard from './Dashboard';
import SettingsScreen from './SettingsScreen';
import Index from './index';
import Two from './two';
import  Profile  from '../../components/profile'; // Import Profile component
import { View } from '@/components/Themed';
import { Button } from 'react-native';

import { NavigationProp } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  const colorScheme = useColorScheme();


    
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Dashboard') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'cog' : 'cogs';
            } else if (route.name === 'Index') {
              iconName = focused ? 'code' : 'code';
            } else if (route.name === 'Two') {
              iconName = focused ? 'info' : 'info';
            }

            return <FontAwesome name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: Colors[colorScheme ?? 'light'].tint,
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Dashboard" component={Dashboard} options={{ title: 'Dashboard',headerRight: () => <Profile />}}  />
        <Tab.Screen name="Index" component={Index} options={{ title: 'Index', headerRight: () => <Profile /> }}  />
        <Tab.Screen name="Two" component={Two} options={{ title: 'Tab Two',headerRight: () => <Profile />}}  />
        <Tab.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} />
      </Tab.Navigator>
  );
}
