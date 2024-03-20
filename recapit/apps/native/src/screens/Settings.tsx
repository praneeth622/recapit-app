import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import { Button, ButtonGroup, withTheme, Avatar } from "@rneui/themed";
import { useQuery, useMutation } from "convex/react";
import { api } from "@packages/backend/convex/_generated/api";
import { useRef } from "react";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { BottomSheet, BottomSheetRef } from "react-spring-bottom-sheet";
import { Linking, Alert } from 'react-native';
import Slider from '@react-native-community/slider';


export default function Settings({ navigation }) {

  const user = useUser();
  const image_url = user?.user?.imageUrl;
  const userdata = user?.user?.fullName;
  const [timesPerDay, setTimesPerDay] = useState("1"); // Initial value
  const [sliderValue, setSliderValue] = useState(0);


  const handleInputChange = (text) => {
    // Ensure input is a number and within the range 1 to 500
    if (/^\d+$/.test(text) && parseInt(text) >= 1 && parseInt(text) <= 500) {
      setTimesPerDay(text);
    }

  };

  const handlePress = async ()=>{
    const link = "whatsapp://send?text=Hey !, I am using recapit";
        const supported = await Linking.canOpenURL(link);
          if (supported) {
              await Linking.openURL(link);
            } else {
              Alert.alert('WhatsApp Not Found', 'Please install WhatsApp to use this feature.');
            }
          }

  return (
    <View>
      <View style={styles.mainProfile}>
        <View>
          <Avatar
            size={94}
            rounded
            source={image_url ? { uri: image_url } : {}}
            onPress={() => navigation.navigate("SettingsScreen")}
          />
        </View>
        <Text style={styles.text}>
          {JSON.stringify(userdata)}
        </Text>
        <View>
          <Button
            title="Invite Friends"
            disabled={false}
            titleStyle={{ fontWeight: "700", color: "#fff" }}
            buttonStyle={styles.commonContainerButton}
            containerStyle={styles.commonContainer}
            onPress={handlePress}
          />
        </View>
      </View>
      <View style={styles.mainProfile}>
        <Text style={styles.label1}>Notifications frequency:</Text>
        <View style={styles.container}>
          <Text style={styles.label}>Times Per Day: {sliderValue}</Text>
          
          <Slider
            style={{ width: 300, height: 40 }}
            minimumValue={1}
            maximumValue={500}
            minimumTrackTintColor="#9E2BD0"
            maximumTrackTintColor="#000000"
            value={sliderValue}
            step={1}
            onValueChange={value => setSliderValue(value)}
          />
        </View>
        <View>
          <Button
            title="Save"
            disabled={false}
            titleStyle={{ fontWeight: "700", color: "#fff" }}
            buttonStyle={styles.commonContainerButton2}
            containerStyle={styles.commonContainer}
          />
        </View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainProfile: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 50,
  },
  commonContainer: {
    width: "100%",
    padding: "2%",
    marginVertical: 15,
  },
  commonContainerButton: {
    backgroundColor: "#9E2BD0",
    borderRadius: 25,
    paddingHorizontal: 85,
  },
  commonContainerButton2: {
    backgroundColor: "#9E2BD0",
    borderRadius: 25,
    paddingHorizontal: 45,
    marginTop: 30,
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  label1: {
    fontSize: 25,
    color: "#9E2BD0",
    fontWeight: "800",
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: "#000",
    fontWeight: "bold",
  },
  input: {
    width: "80%",
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    color: "#000",
  },
  text:{
    marginVertical:20,
    fontSize:20
  }
});
