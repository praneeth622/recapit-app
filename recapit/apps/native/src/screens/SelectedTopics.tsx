import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, ButtonGroup, withTheme, Avatar } from '@rneui/themed';
import { useQuery, useMutation } from 'convex/react';
import { api } from '@packages/backend/convex/_generated/api';
import { useRef } from 'react'
import { BottomSheet, BottomSheetRef } from 'react-spring-bottom-sheet'
export default function SelectedTopics({ navigation }) {
    const sheetRef = useRef<BottomSheetRef>()
    const allTopics = useQuery(api.topics.getAllTopics);
    const selectedTopics = useQuery(api.userSelectedTopics.getSelectedTopics);
    const selectTopicMutation = useMutation(api.userSelectedTopics.selectTopic);

    const [selectedSubTopics, setSelectedSubTopics] = useState([]);

    const handleTopicPress = (topicId) => {
        const selectedTopic = selectedTopics.find(topic => topic.topicId === topicId);
        if (!selectedTopic) {
            // Topic is not selected, show subtopics popup
            const topic = allTopics.find(topic => topic._id === topicId);
            if (topic) {
                // Show subtopics popup here and handle subtopic selection
                // For simplicity, let's assume a function `showSubtopicsPopup` is defined elsewhere
                // You would need to implement this function to show the popup with subtopics
                // showSubtopicsPopup(topic.subTopics, handleSubTopicSelection);
            }
        }
    };

    const handleSubTopicSelection = (subTopic) => {
        const index = selectedSubTopics.indexOf(subTopic);
        if (index === -1) {
            setSelectedSubTopics([...selectedSubTopics, subTopic]);
        } else {
            setSelectedSubTopics(selectedSubTopics.filter(item => item !== subTopic));
        }
    };

    const handleSaveTopics = async (topicId) => {
        // Call mutation to select the topic with selected subtopics
        for (const subTopic of selectedSubTopics) {
            await selectTopicMutation({
                subTopic: subTopic,
                topicId: topicId,
            });
        }
        // After selecting topics, you might want to refresh the selected topics query or navigate to another screen
        // For example:
        // selectedTopics.refetch();
        // navigation.navigate('NotesDashboardScreen');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Selected Topics:</Text>
            {selectedTopics&&selectedTopics.map(topic => (
            <Text>{topic.subTopic}</Text>
            ))}
            <Text style={styles.heading}>All Topics:</Text>
            {allTopics&&allTopics.map(topic => (
            <Text>{topic.topicName} : {JSON.stringify(topic.subTopics)}</Text>
            ))}
            {/* <Button onPress={() => handleSaveTopics(topicId)}>Save</Button> */}
        
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    topicList: {
        maxHeight: 200,
        marginBottom: 20,
    },
});
