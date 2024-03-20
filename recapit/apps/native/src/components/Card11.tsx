import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function Card11() {
    const click = () => {
        console.log("Card clicked");
    };

    return (
        <TouchableOpacity onPress={click} style={styles.card11}>
            <Text style={styles.title}>Main</Text>
            <View style={styles.main}>
                <Text style={styles.text}>Rewards</Text>
                <Image
                    source={require('../assets/images/education.png')}
                    style={styles.bannerImage}
                    resizeMode="contain"
                />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card11: {
        height: 200,
        width: '45%',
        backgroundColor: '#5edee0',
        padding: 20,
        borderRadius: 30,
        marginBottom: 20,
    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    main: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: '400',
        marginBottom: 10,
        color: '#abaaa7',
    },
    bannerImage: {
        height: 200,
        width: 200,
        marginLeft: 20,
        position:'relative',
        top:-25,
        right:130
    },
});
