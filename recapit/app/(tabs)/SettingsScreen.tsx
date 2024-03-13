import * as React from 'react';
import { Button, Image, ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationProp } from '@react-navigation/native';

type SettingsScreenProps = {
    navigation: NavigationProp<any, any>;
  };

const Stack = createStackNavigator();

const SettingsScreen: React.FC<SettingsScreenProps> = ({ navigation }) => {
  const handlePress = () => {
    const link = "whatsapp://send?text=Hey !, I am using recapit";
    window.location.href = link;
  };

  const routes = [
    { data: 'Settings' },
    { data: 'Settings 1' },
    { data: 'Settings 2' },
    { data: 'Settings 3' },
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.main}>
          <Image style={styles.image} source={{ uri: 'https://picsum.photos/200' }} />
          <Text style={styles.title}>User Name</Text>
          <Text style={styles.id}>User id</Text>
          <View style={styles.btn} >
            <Button
              onPress={handlePress}
              title='Invite Friends' />
          </View>
        </View>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <View style={styles.btmcon}>
          {routes.map((route, index) => (
            <Text
              style={styles.link}
              key={index}
              onPress={() => navigation.navigate(route.data)}
            >{route.data}</Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center',
    margin: 30
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 50,
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 100
  },
  id: {
    fontSize: 20,
    textAlign: 'center',
  },
  mbttn: {
    backgroundColor: "green",
    borderRadius: 50
  },
  btn: {
    margin: 30
  },
  link: {
    fontSize: 28,
    fontWeight: "300",
    padding: 15,
  },
  btmcon: {
    marginBottom: 30
  }
});
export default SettingsScreen;