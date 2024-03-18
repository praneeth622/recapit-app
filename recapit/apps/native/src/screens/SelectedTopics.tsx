import { Platform, Dimensions, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, ButtonGroup, withTheme, Text, Avatar } from '@rneui/themed';
import { View } from './Themed';
import { useState } from 'react';
import { useAuth, useUser } from '@clerk/clerk-expo';
import { api } from '@packages/backend/convex/_generated/api';
import { useMutation,useQuery } from 'convex/react';
export default function SelectedTopics({ navigation }) {
    const allTopics = useQuery(api.topics.getAllTopics);
    const selectedTopics=useQuery(api.userSelectedTopics.getSelectedTopics);
    const selectTopic = useMutation(api.userSelectedTopics.selectTopic);
    // const selectTopicfunction = async () => {
    //     await selectTopic({
    //       subTopic: "subTopic",
    //       topicId: "topicId",
    //     });
    //     // navigation.navigate('NotesDashboardScreen');
    //   };
    
    return (
        <View >
            <Text>{JSON.stringify(selectedTopics)}</Text>
            <Text>{JSON.stringify(allTopics)}</Text>
        </View>
    );

}