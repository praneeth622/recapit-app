import React from 'react';
import { View,Text } from 'react-native';
import { StyleSheet } from 'react-native-web';

export default function Card12(){
    return(
        <View style={styles.card12}>
                <Text>Card2</Text>
              </View>
    )
}
const styles = StyleSheet.create({
    card12:{
        height:'100%',
        width:'45%',
        backgroundColor:'#5e9fe0',
        borderRadius:10,
        padding:"5%",
      },
})