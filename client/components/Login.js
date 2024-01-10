import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import authApi from "../api/authApi";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const [token, setToken] = useState("");
  //   console.log(route);

  const onChangeUsername = (value) => {
    setUsername(value);
  };
  const onChangePassword = (value) => {
    setPassword(value);
  };
  const checkAuth = async () => {
    const res = await authApi.login(username, password);
    if (res.data) {
      const token = res.data.token;
      storeData(token);
      navigation.navigate("Home");
    }
  };

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("my-key", value);
    } catch (e) {
      console.error(e);
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("my-key");
      if (value !== null) {
        setLogin(true);
        setToken(value);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getData();
    if (login) {
      navigation.navigate("Home");
    }
    setLogin(false);
  }, [login]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ログイン画面</Text>
      <TextInput
        style={styles.mailAddresInput}
        value={username}
        keyboardType="numeric"
        onChangeText={onChangeUsername}
      ></TextInput>
      <TextInput
        style={styles.passwordInput}
        value={password}
        keyboardType="numeric"
        onChangeText={onChangePassword}
      ></TextInput>
      <Button
        styles={styles.button}
        title="ログイン"
        // onPress={() => navigation.navigate('Home')}
        onPress={checkAuth}
      />
      <Button
        styles={styles.button}
        title="アカウント新規作成"
        // onPress={() => navigation.navigate('Signup')}
        onPress={() => storeData("miccky")}
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
