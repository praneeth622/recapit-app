import React from 'react';
import { View,Text } from 'react-native';
import { StyleSheet } from 'react-native-web';

export default function Card21(){
    return(
        <View style={styles.card21}>
                <Text>Card1</Text>
              </View>
    )
}
const styles = StyleSheet.create({
    card21:{
        height:'100%',
        width:'45%',
        backgroundColor:'#5edee0',
        borderRadius:10,
        padding:'5%',
      },
})