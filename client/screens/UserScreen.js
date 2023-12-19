import React from "react";
import { View, Text, Button } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import "react-native-gesture-handler";
// import { Ionicons } from "@expo/vector-icons";

// const Tab = createBottomTabNavigator();

const UserScreen = ({ navigation }) => {
  //   console.log(route);
  return (
    <View>
      <Text>ユーザ画面</Text>

      <Button
        title="メッセージ2"
        onPress={() =>
          navigation.navigate("Home", {
            screen: "Message",
          })
        }
      />
      <Button
        title="セッティング"
        onPress={() =>
          navigation.navigate("Setting", {
            screen: "Message",
          })
        }
      />
    </View>
  );
};

export default UserScreen;
