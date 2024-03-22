import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity, StyleSheet } from 'react-native'; 

export default function Card12() {
    const click = ()=>{
        console.log("Card clicked")
    }
    return (
        <View style={styles.card12}>
            <TouchableOpacity onPress={click}>
            <Text style={styles.title}>March Spends</Text>
            <View style={styles.main}>
                <Text style={styles.text}>Rewards</Text>
                <Image
                    source={require('../assets/images/thinking.png')}
                    style={styles.bannerImage}
                />
            </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    card12: {
        height: '100%',
        width: '45%',
        backgroundColor: '#5edee0',
        padding: '5%',
        borderRadius:30,
    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    main: {
        flexDirection: 'row',
        alignItems: 'start',
        display:'absloute',
        marginTop:'-10'
    },
    title: {
        fontSize: 15,
        fontWeight: '400',
        marginBottom: 10,
        color: '#abaaa7',
    },
    bannerImage: {
        height: 150,
        width: 150,
        alignItems:'start',
        top:5,
        right:100,
    },
});
