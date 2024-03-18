import { StyleSheet } from 'react-native';
import { Button, ButtonGroup, withTheme, Text, Avatar } from '@rneui/themed';
import EditScreenInfo from '@/components/EditScreenInfo';
import { View } from '@/components/Themed';

const image_url = 'https://uifaces.co/our-content/donated/6MWH9Xi_.jpg'
const image_url_back = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fback-arrow-symbol-vector-26063374&psig=AOvVaw2fJikDoFqYIgjYaiDQiogv&ust=1710797458173000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKjI8amf_IQDFQAAAAAdAAAAABAR'

export default function TabOneScreen() {
  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={{
        backgroundColor: "#9E2BD0",
        flex: 1,
        marginBottom: 0,
        borderBottomLeftRadius: 56,
        borderBottomRightRadius: 56,
        // borderTopLeftRadius: 56,
        // borderTopRightRadius: 56
      }}>
        <View style={{
          backgroundColor: "#9E2BD0",
          marginLeft: 350,
          marginTop: 20,
          flexDirection: 'row'
        }}>
          <View style={{
            backgroundColor: "#9E2BD0",
            marginLeft: -325,
          }}>
            <Avatar
              size={64}
              rounded
              source={image_url_back ? { uri: image_url_back } : {}
              }
            />
          </View>
          <View style={{
            backgroundColor: "#9E2BD0",
            marginLeft: 250,
          }}>
            <Avatar
              size={64}
              rounded
              source={image_url ? { uri: image_url } : {}
              }
            />
          </View>
        </View>

        <View style={{
          backgroundColor: "#9E2BD0",
          marginLeft: 55,
          marginRight: 25,
          marginTop: 100,
          alignContent: 'center'
        }}>
          <Text style={{
            fontWeight: '700',
            color: '#fff',
            fontSize: 25
          }}>
            What are the pillars of object-oriented programming?
          </Text>
        </View>
        
      </View>
      <View style={{
          backgroundColor: "#fff",
          marginLeft: 55,
          marginRight: 25,
          marginTop: 50,
          marginBottom: 20,
          alignContent: 'center'}}>
            <Text style={{
              fontWeight: '700',
            color: '#000',
            fontSize: 22.5}}>
              Oops comprizes of  four pillars inheretance , abstraction ,  
              encapsulation and polymorphism 
              </Text>
      </View>
      <Button
        title="Next Question"
        titleStyle={{ fontWeight: '700' }}
        buttonStyle={{
          backgroundColor: '#9E2BD0',
          borderColor: 'transparent',
          borderWidth: 0,
          borderRadius: 30,
        }}
        containerStyle={{
          width: 320,
          marginHorizontal: 50,
          marginVertical: 30,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
