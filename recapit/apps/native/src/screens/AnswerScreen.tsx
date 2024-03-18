import { Platform, Dimensions, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, ButtonGroup, withTheme, Text, Avatar } from '@rneui/themed';
import { View } from './Themed';
import { useState } from 'react';
import ViewMoreText from 'react-native-view-more-text';
const image_url = 'https://uifaces.co/our-content/donated/6MWH9Xi_.jpg'
const image_url_back = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fback-arrow-symbol-vector-26063374&psig=AOvVaw2fJikDoFqYIgjYaiDQiogv&ust=1710797458173000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKjI8amf_IQDFQAAAAAdAAAAABAR'

const { width, height } = Dimensions.get('window');

export default function TabOneScreen() {

  const [isVisible, setIsVisible] = useState(true);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View style={styles.main_container}>
      <View style={styles.q_contianer}>
        <View style={{
          backgroundColor: "#9E2BD0",
          marginTop: height * 0.02,
          flexDirection: 'row',
          ...Platform.select({
            ios: {
              marginLeft: width * 0.09, // For iOS specific styling
            },
            android: {
              marginLeft: width * 0.09, // For Android specific styling
            },
          }),
        }}>
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

        <View style={{
          backgroundColor: "transparent",
          marginLeft: width * 0.14,
          marginRight: 0,
          marginBottom: height * 0.05,
          alignContent: 'center',
          ...Platform.select({
            ios: {
              marginTop: height * 0.08, // For iOS specific styling
            },
            android: {
              marginTop: height * 0.07, // For Android specific styling
            },
          }),
        }}>
          
          {isVisible && (<Text style={{
            fontWeight: '700',
            color: '#fff',
            fontSize: 22.5
          }}>
            What are the pillars of object-oriented programming?riented programming?riented programming?
          </Text>)}
        </View>
      </View>
      <View style={{
          backgroundColor: "transparent",
          marginLeft: width * 0.1,
          marginRight: width * 0.1,
          marginBottom: height * 0.2,
          alignContent: 'center',
          ...Platform.select({
            ios: {
              marginTop: height * 0,
              marginBottom: height * 0.1, // For iOS specific styling
            },
            android: {
              marginTop: height * 0.05,
              marginBottom: height * 0.18, // For Android specific styling
            },
          }),
        }}>
          {/* Wrap your text with ViewMoreText */}
          <ViewMoreText
            numberOfLines={4} // Number of lines to display before "Read more" is shown
            renderViewMore={(onPress) => <Text style={{ color: '#9E2BD0', marginTop: 8 }} onPress={onPress}>Read more</Text>}
            renderViewLess={(onPress) => <Text style={{ color: '#9E2BD0', marginTop: 8 }} onPress={onPress}>Read less</Text>}
          >
            <Text style={{
              fontWeight: '700',
              color: '#000',
              fontSize: 20
            }}>
              Semaphore is a synchronization tool to solve the critical section problem. It facilitates mutual exclusion, ensuring only one process accesses a shared resource at a time, while also allowing processes to coordinate their actions via wait and signal operations.
            </Text>
          </ViewMoreText>
        </View>
      <TouchableOpacity
        style={styles.newNoteButton}
      >
        <Text style={{color: '#fff', fontWeight: '700'}}>Next Question</Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  main_container: {
    backgroundColor: "#fff",
    flex: 1
  },
  q_contianer: {
    backgroundColor: "#9E2BD0",
    flex: 1,

    ...Platform.select({
      ios: {
        marginBottom: height * 0.12, // For iOS specific styling
      },
      android: {
        marginBottom: height * 0.0, // For Android specific styling
      },
    }),
    borderBottomLeftRadius: 56,
    borderBottomRightRadius: 56,
  },
  avatarContainer: {
    backgroundColor: "transparent",

    ...Platform.select({
      ios: {
        marginLeft: width * 0.0,
        marginRight: width * 0.55,
      },
      android: {
        marginLeft: width * 0.0,
        marginRight: width * 0.49,
      },
    }),
  },
  oddcontainerStyle: {
    width: width * 0.4,
    height: 45,
    // marginHorizontal: width * 0.15,
    marginVertical: 10,
    ...Platform.select({
      ios: {
        marginHorizontal: width * 0.15, // For iOS specific styling
      },
      android: {
        marginHorizontal: width * 0.19, // For Android specific styling
      },
    }),
  },
  evencontainerStyle: {
    width: width * 0.4,
    height: 45,
    // marginHorizontal: -20,
    marginVertical: 10,
    ...Platform.select({
      ios: {
        marginHorizontal: width * -0.05, // For iOS specific styling
      },
      android: {
        marginHorizontal: width * -0.05, // For Android specific styling
      },
    }),
  },
  dontrememberButton: {
    width: width * 0.8,
    marginVertical: width * .05,
    ...Platform.select({
      ios: {
        width: width * 0.8, // For iOS specific styling
        marginHorizontal: width * 0.1,
        marginVertical: width * .05
      },
      android: {
        width: width * 0.8, // For Android specific styling
        marginHorizontal: width * 0.1,
        marginVertical: width * .06
      },
    }),
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  newNoteButton: {
    flexDirection: 'row',
    backgroundColor: '#9E2BD0',
    borderRadius: 7,
    width: Dimensions.get('window').width / 1.6,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 44,
    position: 'absolute',
    bottom: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});
