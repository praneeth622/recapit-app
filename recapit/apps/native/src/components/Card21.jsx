import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';


export default function Card21() {
    const click = ()=>{
        console.log("Card clicked")
    }
    return (
        <View style={styles.card21}>
            <TouchableOpacity onPress={click}>
            <Text style={styles.title}>March Spends</Text>
            <View style={styles.main}>
                <Text style={styles.text}>Rewards</Text>
                <Image
                    source={require('../assets/images/info.png')}
                    style={styles.bannerImage}
                />
            </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    card21: {
        height: '90%',
        width: '100%',
        backgroundColor: 'orange',
        padding: '5%',
        borderRadius:30,
    },
    main: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        display:'flex',
        alignItems:'flex-start',
    },
    bannerImage: {
        height: 100,
        width: 200,
    },
    title: {
        fontSize: 15,
        fontWeight: '400',
        marginBottom: 10,
        color: '#abaaa7',
    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        alignItems:'flex-start'
    },
});
