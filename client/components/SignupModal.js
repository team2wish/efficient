import React, { useState } from "react";
import { StyleSheet, View, Text, Button, TextInput, Alert } from "react-native";
import Checkbox from "expo-checkbox";
import authApi from "../api/authApi";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignupModal = ({ navigation, route }) => {
  const [adultcount, setAdultcount] = useState(0);
  const [childrencount, setChildrencount] = useState(0);
  const [shrimpChecked, setShrimpChecked] = useState(false);
  const [crabChecked, setCrabChecked] = useState(false);
  const [wheatChecked, setWheatChecked] = useState(false);
  const [buckwheat_noodlesChecked, setBuckwheat_noodlesChecked] =
    useState(false);
  const [eggChecked, setEggChecked] = useState(false);
  const [milkChecked, setMilkChecked] = useState(false);
  const [peanutChecked, setPeanutChecked] = useState(false);

  const adultcountSub = () => {
    if (adultcount > 0) {
      setAdultcount(adultcount - 1);
    }
  };
  const adultcountAdd = () => {
    if (10 > adultcount) {
      setAdultcount(adultcount + 1);
    }
  };
  const childrencountSub = () => {
    if (childrencount > 0) {
      setChildrencount(childrencount - 1);
    }
  };
  const childrencountAdd = () => {
    if (10 > childrencount) {
      setChildrencount(childrencount + 1);
    }
  };

  const signupPost = async () => {
    if (typeof route.params !== "undefined") {
      const name = route.params[0];
      const mailaddress = route.params[1];
      const password = route.params[2];
      const data = {
        userName: name,
        mail: mailaddress,
        password: password,
        numOfAdults: adultcount,
        numOfChildren: childrencount,
        shrimp: shrimpChecked,
        crab: crabChecked,
        wheat: wheatChecked,
        buckwheat_noodles: buckwheat_noodlesChecked,
        egg: eggChecked,
        milk: milkChecked,
        peanut: peanutChecked,
      };
      const res = await authApi.signUp(data);
      const fetchlogin = await authApi.login(name, password);
      const token = fetchlogin.data.token;
      await storeData(token);
      navigation.navigate("Signup");
      navigation.navigate("Home", { token: token, update: false });
    } else {
      Alert.alert("アレルギーを入力して下さい");
    }
  };

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("my-key", value);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.container__adult}>
        <Text style={styles.adult}>大人 {adultcount}名</Text>
        <Button title="ー" onPress={adultcountSub} />
        <Button title="＋" onPress={adultcountAdd} />
      </View>
      <View style={styles.container__chiliren}>
        <Text>子供 {childrencount}名</Text>
        <Button title="ー" onPress={childrencountSub} />
        <Button title="＋" onPress={childrencountAdd} />
      </View>
      <View style={styles.checkboxContainer}>
        <Text>えびアレルギー</Text>
        <Checkbox
          style={styles.checkbox}
          value={shrimpChecked}
          onValueChange={setShrimpChecked}
        />
      </View>
      <View style={styles.checkboxContainer}>
        <Text>かにアレルギー</Text>
        <Checkbox
          style={styles.checkbox}
          value={crabChecked}
          onValueChange={setCrabChecked}
        />
      </View>
      <View style={styles.checkboxContainer}>
        <Text>小麦アレルギー</Text>
        <Checkbox
          style={styles.checkbox}
          value={wheatChecked}
          onValueChange={setWheatChecked}
        />
      </View>
      <View style={styles.checkboxContainer}>
        <Text>蕎麦アレルギー</Text>
        <Checkbox
          style={styles.checkbox}
          value={buckwheat_noodlesChecked}
          onValueChange={setBuckwheat_noodlesChecked}
        />
      </View>
      <View style={styles.checkboxContainer}>
        <Text>卵アレルギー</Text>
        <Checkbox
          style={styles.checkbox}
          value={eggChecked}
          onValueChange={setEggChecked}
        />
      </View>
      <View style={styles.checkboxContainer}>
        <Text>乳アレルギー</Text>
        <Checkbox
          style={styles.checkbox}
          value={milkChecked}
          onValueChange={setMilkChecked}
        />
      </View>
      <View style={styles.checkboxContainer}>
        <Text>落花生アレルギー</Text>
        <Checkbox
          style={styles.checkbox}
          value={peanutChecked}
          onValueChange={setPeanutChecked}
        />
      </View>
      <Button
        styles={styles.button}
        // title="新規登録画面へ戻る"
        title="新規登録"
        onPress={signupPost}
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
  container__adult: {
    flexDirection: "row",
    justifyContent: "center", // 中央揃え
    alignItems: "center", // 中央揃え
  },
  adult: {
    textAlign: "center",
  },
  container__chiliren: {
    flexDirection: "row",
    justifyContent: "center", // 中央揃え
    alignItems: "center", // 中央揃え
    marginBottom: 20,
  },
  button: {
    // flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  checkbox: {
    // alignSelf: "center",
    // marginBottom: 10,
  },
});
export default SignupModal;
