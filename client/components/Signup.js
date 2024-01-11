import React, { useState } from "react";
import { StyleSheet, View, Text, Button, TextInput, Alert } from "react-native";
import axiosClient from "../api/axiosClient";
const Signup = ({ navigation, route }) => {
  const [name, setName] = useState("");
  const [mailAddress, setMailAddress] = useState("");
  const [password, setPassword] = useState("");
  //SignupModalから値取得は確認OK
  console.log("SignupModalの入力情報:", route.params);
  const onChangeName = (value) => {
    setName(value);
  };
  const onChangeMailAddress = (value) => {
    setMailAddress(value);
  };
  const onChangePassword = (value) => {
    setPassword(value);
  };
  //name,mailaddres,password,adulucount,childrencount,allergy入力したらそのデータをバックへポストする
  const signupPost = async () => {
    if (typeof route.params !== "undefined") {
      // const res = await axiosClient.post("/api/v1/auth/signup", {
      //   name: name,
      //   mailaddress: mailAddress,
      //   password: password,
      //   adultcount: route.params[0],
      //   childrencount: route.params[1],
      //   allergy: route.params[2],
      //   allergy2: route.params[3],
      //   allergy3: route.params[4],
      //   allergy4: route.params[5],
      //   allergy5: route.params[6],
      //   allergy6: route.params[7],
      //   allergy7: route.params[8],
      // });
      // console.log("data", res.data);
      navigation.navigate("Home");
    } else {
      Alert.alert("アレルギーを入力して下さい");
    }
  };
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
        title="アレルギー入力"
        onPress={() => navigation.navigate("SignupModal")}
      />
      <Button
        styles={styles.button}
        title="新規登録"
        onPress={() => signupPost()}
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
