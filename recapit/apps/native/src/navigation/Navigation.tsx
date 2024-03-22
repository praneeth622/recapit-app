import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import NotesDashboardScreen from '../screens/NotesDashboardScreen';
import InsideNoteScreen from '../screens/InsideNoteScreen';
import CreateNoteScreen from '../screens/CreateNoteScreen';
import TwoScreen from '../screens/QuestionScreen'
import SelectedTopics from '../screens/SelectedTopics';
import Settings from '../screens/Settings';
import DashboardScreen from '../screens/DashboardScreen';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SelectedTopics" component={SelectedTopics} />
        <Stack.Screen name="SettingsScreen" component={Settings} />
        <Stack.Screen
          name="TwoScreen"
          component={TwoScreen}
        />
        <Stack.Screen name="InsideNoteScreen" component={InsideNoteScreen} />
        <Stack.Screen name="CreateNoteScreen" component={CreateNoteScreen} />
        <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
