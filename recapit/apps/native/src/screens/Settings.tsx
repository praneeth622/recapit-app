import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, ButtonGroup, withTheme, Avatar } from '@rneui/themed';
import { useQuery, useMutation } from 'convex/react';
import { api } from '@packages/backend/convex/_generated/api';
import { useRef } from 'react'
import { useAuth, useUser } from "@clerk/clerk-expo";
import { BottomSheet, BottomSheetRef } from 'react-spring-bottom-sheet'
import * as Notifications from 'expo-notifications';
Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });
async function schedulePushNotification() {
    console.log("pushed")
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "You've got mail! 📬",
        body: 'Here is the notification body',
        data: { data: 'goes here' },
      },
      trigger: { seconds: 2 },
    }).catch((error) => {
        console.log("error", error)}).then((response) => {
            console.log("response", response)});
  }
export default function Settings({ navigation }) {
    
    const user = useUser();
    const image_url = user?.user?.imageUrl;
    const userdata = user?.user?.fullName;
    
    return(
        <View >
            <View >
            <Avatar
              size={64}
              rounded
              source={image_url ? { uri: image_url } : {}}
              onPress={() => navigation.navigate('SettingsScreen')}

            />
          </View>
            <Text >{JSON.stringify(userdata)}</Text>
            <Button
        title="Press to schedule a notification"
        onPress={async () => {
          await schedulePushNotification();
        }}
      />
        </View>
    );
}