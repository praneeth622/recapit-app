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
import Screen from '../screens/NotificationTest';
import * as Notifications from 'expo-notifications';
import { Linking } from 'react-native';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer
    linking={{
      prefixes: ['recapit://'],
      config: {
        // Configuration for linking
        screens: {
          SelectedTopics: 'SelectedTopics',
          // Other screens
        },
      },
      async getInitialURL() {
        // First, you may want to do the default deep link handling
        // Check if app was opened from a deep link
        const url = await Linking.getInitialURL();

        if (url != null) {
          return url;
        }

        // Handle URL from expo push notifications
        const response = await Notifications.getLastNotificationResponseAsync();

        return response?.notification.request.content.data.url;
      },
      subscribe(listener) {
        const onReceiveURL = ({ url }: { url: string }) => listener(url);

        // Listen to incoming links from deep linking
        const eventListenerSubscription = Linking.addEventListener('url', onReceiveURL);

        // Listen to expo push notifications
        const subscription = Notifications.addNotificationResponseReceivedListener(response => {
          const url = response.notification.request.content.data.url;

          // Any custom logic to see whether the URL needs to be handled
          //...

          // Let React Navigation handle the URL
          listener(url);
        });

        return () => {
          // Clean up the event listeners
          eventListenerSubscription.remove();
          subscription.remove();
        };
      },
    }}
>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Notification" component={Screen} />
        <Stack.Screen name="SelectedTopics" component={SelectedTopics} />
        <Stack.Screen name="SettingsScreen" component={Settings} />
        <Stack.Screen
          name="TwoScreen"
          component={TwoScreen}
        />
        <Stack.Screen name="InsideNoteScreen" component={InsideNoteScreen} />
        <Stack.Screen name="CreateNoteScreen" component={CreateNoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
