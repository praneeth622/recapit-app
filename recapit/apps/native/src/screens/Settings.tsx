import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, ButtonGroup, withTheme, Avatar } from '@rneui/themed';
import { useQuery, useMutation } from 'convex/react';
import { api } from '@packages/backend/convex/_generated/api';
import { useRef } from 'react'
import { useAuth, useUser } from "@clerk/clerk-expo";
import { BottomSheet, BottomSheetRef } from 'react-spring-bottom-sheet'
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
        </View>
    );
}