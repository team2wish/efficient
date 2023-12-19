import React, { useState } from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";

const Login = ({ navigation }) => {
  const [mailAddress, setMailAddress] = useState("");
  const [password, setPassword] = useState("");
  //   console.log(route);
  const onChangeMailAddress = (value) => {
    setMailAddress(value);
  };
  const onChangePassword = (value) => {
    setPassword(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ログイン画面</Text>
      <TextInput
        style={styles.mailAddresInput}
        value={mailAddress}
        onChangeText={onChangeMailAddress}
      ></TextInput>
      <TextInput
        style={styles.passwordInput}
        value={password}
        onChangeText={onChangePassword}
      ></TextInput>
      <Button
        styles={styles.button}
        title="ログイン"
        onPress={() => navigation.navigate("Home")}
      />
      <Button
        styles={styles.button}
        title="アカウント新規作成"
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
  mailAddresInput: {
    height: 40,
    width: 300,
    padding: 10,
    borderColor: "green",
    borderWidth: 1,
  },
  passwordInput: {
    height: 40,
    width: 300,
    padding: 10,
    borderColor: "green",
    borderWidth: 1,
    marginBottom: 20,
  },
});

export default Login;
