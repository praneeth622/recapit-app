import React from "react";
import { Text, View } from "react-native-web";
import { StatusBar } from 'expo-status-bar';
import { Platform, ScrollView, StyleSheet } from 'react-native';
import { Image } from "react-native";

import Card11 from '../../components/Card11'
import Card12 from '../../components/Card12'
import Card21 from '../../components/Card21'
import Card22 from '../../components/Card22'

function Dashboard() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>This is your Dashboard</Text>
            <View style={styles.banner}>
              <View style={styles.bannerTextcon}>
                <Text style={styles.bannerText}>Recapit</Text>
                <Text style={styles.bannerText}>The One Stop Soloution  </Text>
              </View>
                 <Image
                  source={require('../../assets/images/bannerImage.png')}
                  style={styles.bannerImage}
                  />
            </View>
        </View>
        <View style={styles.btm}>
          <View style={styles.btmText}>
            <Text style={styles.btmtitle}>Your Activity</Text>
          </View>
          <View style={styles.cards}>
            <View style={styles.r1}>
              <Card11 />
              <Card12 />
            </View>
            <View style={styles.r2}>
              <Card21 />
              <Card22 />
            </View>
          </View>
        </View>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      </View>
      <View style={styles.anitop}></View>
      <View style={styles.anibottom}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    display:'flex',
    alignItems:'flex-start',
    height:'auto',
    padding:'7%',
  },
  banner:{
    marginTop:'10%',
    marginBottom:'10%',
    backgroundColor:'#0330fc',
    width:'100%',
    height:'70%',
    borderTopRightRadius: 40,
    color:'#fff',
    paddingBottom:'5%',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  bannerTextcon:{
    padding:'3%',
    justifyContent:'end',
    textShadowOffset: { width: 2, height: 2 },
    textShadowColor: "rgba(0, 0, 0, 1)",
    textShadowRadius: 5,

  },
  bannerText:{
    fontSize:"85%",
    padding:'1%',
    fontWeight:'800',
    color:'#fff'
  },
  bannerImage:{
    marginLeft:'0px',
    height:120,
    width:120
  },
  container: {
    display:'flex',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop:'20',
    color:'#fff'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  btm:{
    padding:'-5%',
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
    padding:'3%',
    alignItems:'center'
  },
  r1:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    height:'90%',
    width:'80%',
    marginBottom:'30px'
  },
  
  r2:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    height:'90%',
    width:'80%',
    marginTop:'4%'
  },
  anitop:{
    width:'200%',
    backgroundColor:'#3F72AF',
    // position:'absolute',
    top:'-20%',
    left:'-50%',
    height:'50%',
    borderRadius:'50%',
    zIndex:'-1',
    position:'fixed'
  },
  anibottom:{
    height:'40%',
    width:'200%',
    backgroundColor:'#3F72AF',
    borderRadius:'50%',
    zIndex:-1,
    position:'absolute',
    bottom:'-20%',
    left:'-180%'
  }
  
});

export default Dashboard;
