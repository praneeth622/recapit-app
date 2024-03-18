import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import Slider from "@react-native-community/slider";
import { Button, ButtonGroup, withTheme, Avatar } from "@rneui/themed";
import { useQuery, useMutation } from "convex/react";
import { api } from "@packages/backend/convex/_generated/api";
import { useRef } from "react";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { BottomSheet, BottomSheetRef } from "react-spring-bottom-sheet";
export default function Settings({ navigation }) {
  const user = useUser();
  const image_url = user?.user?.imageUrl;
  const userdata = user?.user?.fullName;
  const [timesPerDay, setTimesPerDay] = useState("1"); // Initial value

  const handleInputChange = (text) => {
    // Ensure input is a number and within the range 1 to 500
    if (/^\d+$/.test(text) && parseInt(text) >= 1 && parseInt(text) <= 500) {
      setTimesPerDay(text);
    }
  };
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
        <Text style={{ marginVertical: 15, fontSize: 20, fontWeight: 600 }}>
          {JSON.stringify(userdata)}
        </Text>
        <View>
          <Button
            title="Invite Friends"
            disabled={false}
            titleStyle={{ fontWeight: "700", color: "#fff" }}
            buttonStyle={styles.commonContainerButton}
            containerStyle={styles.commonContainer}
          />
        </View>
      </View>
      <View style={styles.mainProfile}>
        <View style={styles.container}>
          <Text style={styles.label}>Times Per Day:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={timesPerDay}
            onChangeText={handleInputChange}
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
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: "80%",
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
  },
});
