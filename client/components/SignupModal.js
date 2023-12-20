import React, { useState } from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";

const SignupModal = ({ navigation }) => {
  const [adultcount, setAdultcount] = useState(0);
  const [childrencount, setChildrencount] = useState(0);
  return (
    <View style={styles.container}>
      <Text>SignupModal</Text>
      <Text>大人 {adultcount}名</Text>
      <Text>子供 {childrencount}名</Text>
      <Text>アレルギー</Text>
      <Button
        styles={styles.button}
        title="新規登録画面へ戻る"
        onPress={() => navigation.navigate("Signup")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  button: {
    // flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});

export default SignupModal;
