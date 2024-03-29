import React, { useState } from "react";
import { StyleSheet, View, Button, TextInput, Alert } from "react-native";

const Signup = ({ navigation }) => {
  const [name, setName] = useState("");
  const [mailAddress, setMailAddress] = useState("");
  const [password, setPassword] = useState("");

  const onChangeName = (value) => {
    setName(value);
  };
  const onChangeMailAddress = (value) => {
    setMailAddress(value);
  };
  const onChangePassword = (value) => {
    setPassword(value);
  };

  const showSignupModal = () => {
    if (name === "" || mailAddress === "" || password === "") {
      Alert.alert("ユーザー情報を入力してください");
    } else {
      navigation.navigate("初期設定", [name, mailAddress, password]);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, styles.input_username]}
        value={name}
        keyboardType="default"
        autoCapitalize="none"
        placeholder="ユーザー名"
        onChangeText={onChangeName}
      ></TextInput>
      <TextInput
        style={styles.input}
        value={mailAddress}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholder="メールアドレス"
        onChangeText={onChangeMailAddress}
      ></TextInput>
      <TextInput
        style={styles.input}
        value={password}
        keyboardType="default"
        autoCapitalize="none"
        placeholder="パスワード"
        secureTextEntry={true}
        onChangeText={onChangePassword}
      ></TextInput>
      <Button
        styles={styles.button}
        title="初期設定"
        onPress={showSignupModal}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F7EE",
    alignItems: "center",
  },
  input: {
    height: 40,
    width: 300,
    padding: 10,
    paddingLeft: 20,
    borderColor: "#002F15",
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 40,
  },
  input_username: {
    marginTop: 80,
  },
});
export default Signup;
