import React, { useState } from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";

const Signup = ({ navigation, route }) => {
  const [name, setName] = useState("");
  const [mailAddress, setMailAddress] = useState("");
  const [password, setPassword] = useState("");

  //SignupModalから値取得は確認OK
  // console.log("adultcount:", route.params[0]);
  // console.log("childrencount:", route.params[1]);

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
  //未実装

  return (
    <View style={styles.container}>
      <Text>signup</Text>
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
        onPress={() => navigation.navigate("Home")}
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
    borderColor: "green",
    borderWidth: 1,
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

export default Signup;
