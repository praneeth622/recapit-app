import React from 'react';
import { View,Text } from 'react-native';
import { StyleSheet } from 'react-native-web';


export default function Card22(){
    return(
        <View style={styles.card22}>
                <Text>Card2</Text>
              </View>
    )
}
const styles = StyleSheet.create({
    card22:{
        height:'100%',
        width:'45%',
        backgroundColor:'#d92944',
        borderRadius:10,
        padding:"5%",
      }
})