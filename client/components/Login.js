import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import auth from "@react-native-firebase/auth";

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

  useEffect(() => {
    auth()
      .createUserWithEmailAndPassword(
        "jane.doe@example.com",
        "SuperSecretPassword!"
      )
      .then(() => {
        console.log("User account created & signed in!");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          console.log("That email address is already in use!");
        }

        if (error.code === "auth/invalid-email") {
          console.log("That email address is invalid!");
        }

        // console.error(error);
      });
  }, []);

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
