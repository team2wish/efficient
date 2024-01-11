import React, { useEffect, useState } from "react";
import {
  Keyboard,
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import authApi from "../api/authApi";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const [keyboardStatus, setKeyboardStatus] = useState("");

  const onChangeUsername = (value) => {
    setUsername(value);
  };
  const onChangePassword = (value) => {
    setPassword(value);
  };
  const loginFn = async () => {
    const res = await authApi.login(username, password);
    if (res.data) {
      const tokenValue = res.data.token;
      storeData(tokenValue);
      navigation.navigate("Home", tokenValue);
      setUsername("");
      setPassword("");
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
      const tokenValue = await AsyncStorage.getItem("my-key");
      console.log(tokenValue);
      if (tokenValue !== null) {
        setLogin(true);
        await authApi.checkAuth(tokenValue);
        navigation.navigate("Home", tokenValue);
      }
    } catch (e) {
      console.error("checkAuth", e);
    }
  };

  const removeItem = async (value) => {
    try {
      await AsyncStorage.removeItem("my-key");
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    // removeItem();
    setLogin(false);
    getData();

    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus("Keyboard Shown");
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus("Keyboard Hidden");
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <>
      {login && (
        <>
          <View style={styles.container}>
            <Text style={styles.title}>ログイン画面</Text>
            <TextInput
              style={styles.mailAddresInput}
              value={username}
              keyboardType="numeric"
              onChangeText={onChangeUsername}
              onSubmitEditing={Keyboard.dismiss}
            ></TextInput>
            <TextInput
              style={styles.passwordInput}
              value={password}
              keyboardType="numeric"
              onChangeText={onChangePassword}
              onSubmitEditing={Keyboard.dismiss}
            ></TextInput>
            <Button
              styles={styles.button}
              title="ログイン"
              // onPress={() => navigation.navigate('Home')}
              onPress={loginFn}
            />
            <Button
              styles={styles.button}
              title="アカウント新規作成"
              onPress={() => navigation.navigate("Signup")}
            />
          </View>
        </>
      )}
    </>
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
