import React, { useState } from 'react';
import { View, Text, Dimensions, ScrollView, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Button, ButtonGroup, withTheme, Avatar } from '@rneui/themed';
import { useQuery, useMutation } from 'convex/react';
import { api } from '@packages/backend/convex/_generated/api';
import { useRef } from 'react'
import RBSheet from "react-native-raw-bottom-sheet";
import { useUser } from '@clerk/clerk-expo';

const { width, height } = Dimensions.get('window');

export default function SelectedTopics({ navigation }) {
    const sheetRef = useRef<RBSheet>()
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

    const image_url_back =
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fback-arrow-symbol-vector-26063374&psig=AOvVaw2fJikDoFqYIgjYaiDQiogv&ust=1710797458173000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKjI8amf_IQDFQAAAAAdAAAAABAR";

    const user = useUser();
    const image_url = user?.user?.imageUrl;

    return (
        <View style={styles.container}>
            <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            // ...Platform.select({
            //   ios: {
            //     marginLeft: width * 0.09, // For iOS specific styling
            //   },
            //   android: {
            //     marginLeft: width * 0.09, // For Android specific styling
            //   },
            // }),
          }}
        >
          <View style={styles.avatarContainer}>
            <Avatar
              size={64}
              rounded
              source={image_url_back ? { uri: image_url_back } : {}}
            />
          </View>
          <View style={styles.avatarContainer}>
            <Avatar
              size={64}
              rounded
              source={image_url ? { uri: image_url } : {}}
            />
          </View>
        </View>
            <Text style={styles.heading}>Selected Sub Topics:</Text>
            <View>
            <Button
                title="Option 1"
                disabled={false}
                titleStyle={{ fontWeight: "700", color: "#000" }}
                buttonStyle={styles.commonContainerButton}
                containerStyle={styles.commonContainer}
            />
            </View>

            {selectedTopics && selectedTopics.map(topic => (
                <Text>{topic.subTopic}</Text>
            ))}
            <Text style={styles.heading}>All Topics:</Text>
            {/* {allTopics && allTopics.map(topic => (
                <Text>{topic.topicName} : {JSON.stringify(topic.subTopics)}</Text>
            ))} */}
            <View>
            {allTopics && allTopics.map(topic => (
                <Button
                    key={topic._id} // Assuming each topic has a unique identifier
                    title={topic.topicName}
                    disabled={false}
                    titleStyle={{ fontWeight: "700", color: "#000" }}
                    buttonStyle={styles.commonContainerButton}
                    containerStyle={styles.commonContainer}
                />
            ))}
            </View>            
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
    avatarContainer: {
        backgroundColor: "transparent",
    },
    topicList: {
        maxHeight: 200,
        marginBottom: 20,
    },
    commonContainer: {
        width: "90%",
        padding: "2%",
        display: 'flex',
        flexWrap: 'wrap'
        // marginTop: "2%",
        // backgroundColor: "blue",
    },
    commonContainerButton: {
        backgroundColor: "#E8E8E8",
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 5,
        // display: '',
        ...Platform.select({
            ios: {
                padding: width * 0.025,
            },
            android: {
                padding: width * 0.035,
            },
        }),
    },
});
