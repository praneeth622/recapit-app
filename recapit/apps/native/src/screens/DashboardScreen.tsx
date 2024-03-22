import { Platform, Dimensions, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, ButtonGroup, withTheme, Text, Avatar  } from '@rneui/themed';
import { View } from './Themed';
import { useAuth, useUser } from "@clerk/clerk-expo";
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from "react-native";

import Card11 from '../components/Card11'
import Card12 from '../components/Card12'
import Card21 from '../components/Card21'
import Card31 from '../components/Card31'
import Card32 from '../components/Card32'
import Settings from '../screens/Settings';

const Stack = createNativeStackNavigator();

export default function DashboardScreen({ navigation }){

    const user = useUser();
    console.log(user)
    const image_url = user?.user?.imageUrl;

    const profile = ()=>{
        navigation.navigate('SettingsScreen')
        console.log("Profile Clicked")
    }
    
    return(
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Explore</Text>
          <TouchableOpacity onPress={()=>{
            profile()
          }}>
            <View style={styles.images}>
            <Image style={{height:50,width:50,borderRadius:50,}} source={{ uri: image_url }} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.btm}>
          <View style={styles.cards}>
            <View style={styles.r1}>
              <Card11 />
              <Card12 />
            </View>
            <View style={styles.r3}>
              <Card21 />
            </View>
            <View style={styles.r2}>
              <Card31 />
              <Card32 />
            </View>
          </View>
        </View>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      </View>
    </ScrollView>
    )
}



const styles = StyleSheet.create({
    header: {
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      height:'auto',
      width:'90%',
      padding:'7%',
    },
    img1:{
      height:50,
      width:50,
    },
    images:{
      height:10,
      width:10,
      justifyContent:'center'
    },
    container: {
      display:'flex',
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      paddingTop:20,
      color:'black'
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
    btm:{
      marginTop:30,
      padding:0,
      display:'flex',
      height:'80%'
    },
    btmText:{
      padding:30,
    },
    btmtitle:{
      fontSize: 20,
      fontWeight: 'bold',
      alignItems:'center'
    },
    cards:{
      padding:'0%',
      alignItems:'center'
    },
    r1:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      height:'30%',
      width:'80%',
      paddingBottom:0,
    },
    
    r2:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      height:'30%',
      width:'80%',
    },
    r3:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      height:'30%',
      width:'80%',
      marginTop:'4%',
      marginBottom:20
    },
    
    
  });