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
    return(
        <View >
            <Text >Settings</Text>
            <Button onPress={() => navigation.navigate('SelectedTopics')}>Select Topics</Button>
        </View>
    );
}