import React from "react";
import { Text } from "react-native";
import { View } from "react-native-web";
import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";

function Profile(){
    return(
        <View style={{ marginRight: 20 }}>
                <Link href="./profile">
                  <FontAwesome name="user" size={24} color="black" />
                </Link>
        </View>
    )
}

export default Profile;