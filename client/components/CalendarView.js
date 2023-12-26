import React from "react";
import { View, Text, Button } from "react-native";
import { Calendar } from "react-native-calendars";
import "react-native-gesture-handler";

const CalenderScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Calender画面</Text>
      <Button title="ログアウト" onPress={() => navigation.navigate("Login")} />
      <Calendar />
      {/* //関連ファイル削除する */}
      {/* <Button title="ユーザ" onPress={() => navigation.navigate("User")} /> */}
      <Button
        title="5日分レシピ作成"
        onPress={() => navigation.navigate("献立")}
      />
    </View>
  );
};

export default CalenderScreen;
