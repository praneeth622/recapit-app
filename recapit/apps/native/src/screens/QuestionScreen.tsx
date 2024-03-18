import { StyleSheet, Dimensions, Platform } from "react-native";
import { Button, ButtonGroup, withTheme, Text, Avatar } from "@rneui/themed";
import { View } from "./Themed";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { api } from "@packages/backend/convex/_generated/api";
import { useQuery } from "convex/react";

const image_url_back =
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fback-arrow-symbol-vector-26063374&psig=AOvVaw2fJikDoFqYIgjYaiDQiogv&ust=1710797458173000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKjI8amf_IQDFQAAAAAdAAAAABAR";

const { width, height } = Dimensions.get("window");

export default function TabTwoScreen() {
  const allTopics = useQuery(api.topics.getAllTopics);
  console.log(allTopics);
  const user = useUser();
  const image_url = user?.user?.imageUrl;
  const firstName = user?.user?.firstName;
  return (
    <View style={styles.main_container}>
      <View style={styles.q_contianer}>
        <View
          style={{
            backgroundColor: "#9E2BD0",
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            // ...Platform.select({
            //   ios: {
            //     marginLeft: width * 0.09, // For iOS specific styling
            //   },
            //   android: {
            //     marginLeft: width * 0.09, // For Android specific styling
            //   },
            // }),
          }}
        >
          <View style={styles.avatarContainer}>
            <Avatar
              size={64}
              rounded
              source={image_url_back ? { uri: image_url_back } : {}}
            />
          </View>
          <View style={styles.avatarContainer}>
            <Avatar
              size={64}
              rounded
              source={image_url ? { uri: image_url } : {}}
            />
          </View>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            // marginHorizontal: 10,
            width: "100%",
            backgroundColor: "transparent",
            marginVertical: 20,
          }}
        >
          <Text
            style={{
              fontWeight: "700",
              fontSize: 15,
              padding: 10,
              color: "#fff",
              backgroundColor: "#EB75F4",
              marginRight: 20,
              borderRadius: 1,

            }}
          >
            OOPS
          </Text>
          <Text
            style={{
              fontWeight: "700",
              fontSize: 15,
              padding: 10,
              marginRight: 20,
              color: "#fff",
              backgroundColor: "#EB75F4",
              
            }}
          >
            OS
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "transparent",
            // marginLeft: width * 0.1,
            // marginRight: width * 0.1,
            alignContent: "center",
            // ...Platform.select({
            //   ios: {
            //     marginTop: height * 0.05, // For iOS specific styling
            //   },
            //   android: {
            //     marginTop: height * 0.08, // For Android specific styling
            //   },
            // }),
          }}
        >
          <Text
            style={{
              fontWeight: "700",
              color: "#fff",
              fontSize: 25,
            }}
          >
            Semaphore ensures ________ in multitasking.
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#fff",
          marginBottom: height * 0.05,
          display: "flex",
          flexWrap: "wrap",
          // backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "5%",
          // padding: width * 0.1,
          // ...Platform.select({
          //   ios: {

          //   },
          //   android: {

          //   },
          // }),
          // ...Platform.select({
          //   ios: {
          //     marginBottom: height * 0.05,
          //     marginLeft: height * -0.05, // For iOS specific styling
          //   },
          //   android: {
          //     marginTop: height * 0.04,
          //     marginLeft: height * -0.08, // For Android specific styling
          //   },
          // }),
        }}
      >
        <Button
          title="Synchronization"
          disabled={false}
          titleStyle={{ fontWeight: "700", color: "#000" }}
          buttonStyle={styles.commonContainerButton}
          containerStyle={styles.commonContainer}
        />
        <Button
          title="Optimization"
          disabled={false}
          titleStyle={{ fontWeight: "700", color: "#000" }}
          buttonStyle={styles.commonContainerButton}
          containerStyle={styles.commonContainer}
        />
        <Button
          title="Isolation"
          disabled={false}
          titleStyle={{ fontWeight: "700", color: "#000" }}
          buttonStyle={styles.commonContainerButton}
          containerStyle={styles.commonContainer}
        />
        <Button
          title="Concurrency"
          disabled={false}
          titleStyle={{ fontWeight: "700", color: "#000" }}
          buttonStyle={styles.commonContainerButton}
          containerStyle={styles.commonContainer}
        />
      </View>
      <Button
        title="I DON'T REMEMBER"
        titleStyle={{ fontWeight: "700" }}
        buttonStyle={{
          backgroundColor: "rgba(199, 43, 98, 1)",
          borderColor: "transparent",
          borderWidth: 0,
          borderRadius: 30,
          padding: 15,
        }}
        containerStyle={styles.dontrememberButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main_container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  q_contianer: {
    backgroundColor: "#9E2BD0",
    display: "flex",
    // alignItems: "center",
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 60,
    justifyContent: "space-between",

    // ...Platform.select({
    //   ios: {
    //     marginBottom: height * 0.0, // For iOS specific styling
    //   },
    //   android: {
    //     marginBottom: height * 0.0, // For Android specific styling
    //   },
    // }),
    borderBottomLeftRadius: 56,
    borderBottomRightRadius: 56,
    // borderTopLeftRadius: 56,
    // borderTopRightRadius: 56
  },
  avatarContainer: {
    backgroundColor: "transparent",

    // ...Platform.select({
    //   ios: {
    //     marginLeft: width * 0.0,
    //     marginRight: width * 0.55,
    //   },
    //   android: {
    //     marginLeft: width * 0.0,
    //     marginRight: width * 0.49,
    //   },
    // }),
  },
  // oddcontainerStyle: {
  //   width: width * 0.4,
  //   height: 45,
  //   marginVertical: 10,
  //   ...Platform.select({
  //     ios: {
  //       marginHorizontal: width * 0.15, // For iOS specific styling
  //     },
  //     android: {
  //       marginHorizontal: width * 0.19, // For Android specific styling
  //     },
  //   }),
  // },
  // evencontainerStyle: {
  //   width: width * 0.4,
  //   height: 45,
  //   marginVertical: 10,
  //   ...Platform.select({
  //     ios: {
  //       marginHorizontal: width * -0.05, // For iOS specific styling
  //     },
  //     android: {
  //       marginHorizontal: width * -0.05, // For Android specific styling
  //     },
  //   }),
  // },
  commonContainer: {
    width: "90%",
    padding: "2%",
    // marginTop: "2%",
    // backgroundColor: "blue",
  },
  commonContainerButton: {
    backgroundColor: "#E8E8E8",
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5,

    ...Platform.select({
      ios: {
        padding: width * 0.025,
      },
      android: {
        padding: width * 0.035,
      },
    }),
  },
  dontrememberButton: {
    // width: width * 0.8,
    marginVertical: width * 0.05,
    marginHorizontal: width * 0.1,
    ...Platform.select({
      ios: {
        // width: width * 0.8, // For iOS specific styling
        marginVertical: width * 0.15,
      },
      android: {
        // width: width * 0.8, // For Android specific styling
        marginVertical: width * 0.09,
      },
    }),
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
