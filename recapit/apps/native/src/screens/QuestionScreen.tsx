import { StyleSheet, Dimensions, Platform } from 'react-native';
import { Button, ButtonGroup, withTheme, Text, Avatar } from '@rneui/themed';
import { View } from './Themed';

const image_url = 'https://uifaces.co/our-content/donated/6MWH9Xi_.jpg'
const image_url_back = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fback-arrow-symbol-vector-26063374&psig=AOvVaw2fJikDoFqYIgjYaiDQiogv&ust=1710797458173000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKjI8amf_IQDFQAAAAAdAAAAABAR'

const { width, height } = Dimensions.get('window');

export default function TabTwoScreen() {

  return (
    <View style={styles.main_container}>
      <View style={styles.q_contianer}>
        <View style={{
          backgroundColor: "#9E2BD0",
          marginTop: 20,
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

          alignContent: 'center',
          ...Platform.select({
            ios: {
              marginTop: height * 0.13, // For iOS specific styling
            },
            android: {
              marginTop: height * 0.04, // For Android specific styling
            },
          }),
        }}>
          <Text style={{
            fontWeight: '700',
            color: '#fff',
            fontSize: 25
          }}>
            What are the pillars of object-oriented programming?riented programming?riented programming?
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#fff',
          marginBottom: height * 0.05,
          // ...Platform.select({
          //   ios: {

          //   },
          //   android: {

          //   },
          // }),
          ...Platform.select({
            ios: {
              marginBottom: height * 0.05,
              marginLeft: height * (-.05), // For iOS specific styling
            },
            android: {
              marginTop: height * 0.04,
              marginLeft: height * (-.08), // For Android specific styling
            },
          }),
        }}>
        <Button
          title="Option 1"
          disabled={false}
          titleStyle={{ fontWeight: '700', color: '#000' }}
          buttonStyle={{
            backgroundColor: '#E8E8E8',
            borderColor: 'transparent',
            borderWidth: 0,
            borderRadius: 5,
          }}
          containerStyle={styles.oddcontainerStyle}
        />
        <Button
          title="Option 2"
          disabled={false}
          titleStyle={{ fontWeight: '700', color: '#000' }}
          buttonStyle={{
            backgroundColor: '#E8E8E8',
            borderColor: 'transparent',
            borderWidth: 0,
            borderRadius: 5,
          }}
          containerStyle={styles.evencontainerStyle}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#fff',
          marginBottom: 20,
          marginLeft: -50
        }}>
        <Button
          title="Option 3"
          disabled={false}
          titleStyle={{ fontWeight: '700', color: '#000' }}
          buttonStyle={{
            backgroundColor: '#E8E8E8',
            borderColor: 'transparent',
            borderWidth: 0,
            borderRadius: 5,
          }}
          containerStyle={styles.oddcontainerStyle}
        />
        <Button
          title="Option 4"
          disabled={false}
          titleStyle={{ fontWeight: '700', color: '#000' }}
          buttonStyle={{
            backgroundColor: '#E8E8E8',
            borderColor: 'transparent',
            borderWidth: 0,
            borderRadius: 5,
          }}
          containerStyle={styles.evencontainerStyle}
        />
      </View>
      <Button
        title="I DON'T REMEMBER"
        titleStyle={{ fontWeight: '700' }}
        buttonStyle={{
          backgroundColor: 'rgba(199, 43, 98, 1)',
          borderColor: 'transparent',
          borderWidth: 0,
          borderRadius: 30,
        }}
        containerStyle={styles.dontrememberButton}
      />
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
        marginBottom: height * 0.04, // For iOS specific styling
      },
      android: {
        marginBottom: height * 0.0, // For Android specific styling
      },
    }),
    borderBottomLeftRadius: 56,
    borderBottomRightRadius: 56,
    // borderTopLeftRadius: 56,
    // borderTopRightRadius: 56
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
        marginVertical: width * .15
      },
      android: {
        width: width * 0.8, // For Android specific styling
        marginHorizontal: width * 0.1,
        marginVertical: width * .09
      },
    }),
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
