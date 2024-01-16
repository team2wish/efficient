import React from "react";
import { View, Text, Button } from "react-native";

const UserScreen = ({ navigation }) => {
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
