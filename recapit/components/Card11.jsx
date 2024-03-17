import React from 'react';
import { View,Text } from 'react-native';
import { StyleSheet } from 'react-native-web';

export default function Card11(){
    return(
        <View style={styles.card11}>
                <Text>Card1</Text>
              </View>
    )
}
const styles = StyleSheet.create({
    card11:{
        height:'100%',
        width:'45%',
        backgroundColor:'#97e05e',
        borderRadius:10,
        padding:"5%",
      },
})