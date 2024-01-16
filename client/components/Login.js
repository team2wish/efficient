import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import authApi from "../api/authApi";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUsername = (value) => {
    setUsername(value);
  };
  const onChangePassword = (value) => {
    setPassword(value);
  };
  const loginFn = async () => {
    try {
      const res = await authApi.login(username, password);
      if (res.data) {
        const token = res.data.token;
        storeData(token);
        navigation.navigate("Home", { token: token, update: false });
        setUsername("");
        setPassword("");
      }
    } catch (e) {
      console.error("login :", e);
      Alert.alert("ユーザー名またはパスワードが違います");
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
      const token = await AsyncStorage.getItem("my-key");
      if (token !== null) {
        await authApi.checkAuth(token);
        navigation.navigate("Home", { token: token, update: false });
      }
    } catch (e) {
      console.error("checkAuth", e);
    }
  };

  const removeStore = () => {
    AsyncStorage.removeItem("my-key");
  };

  useEffect(() => {
    // removeStore();
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require("../assets/kuma.png")} style={styles.icon_image} />
      <TextInput
        style={styles.input_username}
        value={username}
        placeholder="ユーザー名"
        keyboardType="default"
        autoCapitalize="none"
        onChangeText={onChangeUsername}
      ></TextInput>
      <TextInput
        style={styles.input_password}
        value={password}
        placeholder="パスワード"
        keyboardType="default"
        autoCapitalize="none"
        onChangeText={onChangePassword}
        secureTextEntry={true}
      ></TextInput>
      <TouchableOpacity style={styles.button} onPress={loginFn}>
        <Text style={styles.button_text}>ログイン</Text>
      </TouchableOpacity>
      <Button
        styles={styles.button}
        title="アカウント新規作成"
        onPress={() => navigation.navigate("新規登録")}
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
  icon_image: {
    width: 200,
    height: 200,
    objectFit: "contain",
    marginBottom: 20,
  },
  input_username: {
    height: 40,
    width: 300,
    padding: 10,
    paddingLeft: 20,
    borderColor: "#002F15",
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 40,
  },
  input_password: {
    height: 40,
    width: 300,
    padding: 10,
    paddingLeft: 20,
    borderColor: "#002F15",
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 40,
  },
  button: {
    padding: 10,
    paddingLeft: 70,
    paddingRight: 70,
    borderRadius: 30,
    backgroundColor: "#DC661F",
  },
  button_text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Login;
