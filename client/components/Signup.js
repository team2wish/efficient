import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Button, TextInput, Alert } from "react-native";
import authApi from "../api/authApi";

const Signup = ({ navigation, route }) => {
  const [name, setName] = useState("");
  const [mailAddress, setMailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [userLogin, setUserLogin] = useState(false);

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
    if (name === "" && mailAddress === "" && password === "") {
      Alert.alert("ユーザー情報を入力してください");
    } else {
      navigation.navigate("SignupModal", [name, mailAddress, password]);
    }
  };

  useEffect(() => {
    if (route.params) {
      if (route.params[0] === "login" && !userLogin) {
        setUserLogin(true);
        navigation.navigate("Home", route.params[1]);
      }
    }
  }, [route.params, userLogin]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.nameInput}
        value={name}
        placeholder="name"
        onChangeText={onChangeName}
      ></TextInput>
      <TextInput
        style={styles.mailAddresInput}
        value={mailAddress}
        placeholder="mail address"
        onChangeText={onChangeMailAddress}
      ></TextInput>
      <TextInput
        style={styles.passwordInput}
        value={password}
        placeholder="password"
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
    // flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  nameInput: {
    height: 40,
    width: 300,
    padding: 10,
    marginTop: 50,
    marginBottom: 20,
    borderColor: "black",
    borderWidth: 1,
  },
  mailAddresInput: {
    height: 40,
    width: 300,
    padding: 10,
    marginBottom: 20,
    borderColor: "black",
    borderWidth: 1,
  },
  passwordInput: {
    height: 40,
    width: 300,
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 20,
  },
});
export default Signup;
