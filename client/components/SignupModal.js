import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";
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
      navigation.navigate("新規登録");
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

  const allergyTitle = ["えび", "かに", "小麦", "蕎麦", "卵", "乳", "落花生"];

  const checked = [
    shrimpChecked,
    crabChecked,
    wheatChecked,
    buckwheat_noodlesChecked,
    eggChecked,
    milkChecked,
    peanutChecked,
  ];
  const setChecked = [
    setShrimpChecked,
    setCrabChecked,
    setWheatChecked,
    setBuckwheat_noodlesChecked,
    setEggChecked,
    setMilkChecked,
    setPeanutChecked,
  ];

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.number_people_container,
          styles.number_people_container_adult,
        ]}
      >
        <Text style={[styles.number_text, styles.number_title]}>大人</Text>
        <View style={styles.number_people}>
          <Text style={styles.number_text}> {adultcount}名</Text>
          <TouchableOpacity
            style={[styles.button, styles.button_left]}
            onPress={adultcountSub}
          >
            <Text style={styles.button_text}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.button_right]}
            onPress={adultcountAdd}
          >
            <Text style={styles.button_text}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.number_people_container}>
        <Text style={[styles.number_text, styles.number_title]}>こども</Text>
        <View style={styles.number_people}>
          <Text style={styles.number_text}> {childrencount}名</Text>
          <TouchableOpacity
            style={[styles.button, styles.button_left]}
            onPress={childrencountSub}
          >
            <Text style={styles.button_text}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.button_right]}
            onPress={childrencountAdd}
          >
            <Text style={styles.button_text}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.allergy_title}>アレルギー食材</Text>
      {allergyTitle.map((item, index) => {
        return (
          <View style={styles.checkboxContainer} key={index}>
            <Text style={styles.checkbox_title}>{item}</Text>
            <Checkbox
              style={styles.checkbox}
              value={checked[index]}
              onValueChange={setChecked[index]}
            />
          </View>
        );
      })}
      <TouchableOpacity style={styles.signup_button} onPress={signupPost}>
        <Text style={styles.signup_text}>新規登録</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F7EE",
    alignItems: "center",
  },
  number_people_container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  number_people_container_adult: {
    marginTop: 60,
  },
  number_text: {
    textAlign: "center",
    fontSize: 18,
  },
  number_title: {
    width: 60,
    marginRight: 40,
  },
  number_people: {
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    fontSize: 18,
  },

  container__chiliren: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#fff",
    alignItems: "center",
  },
  checkboxContainer: {
    width: 300,
    padding: 5,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#D3D3D3",
  },
  checkbox_title: {
    fontSize: 16,
  },
  checkbox: {
    borderColor: "#D3D3D3",
    borderRadius: 10,
  },
  button: {
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#DFDFDF",
  },
  button_left: {
    marginLeft: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderRightWidth: 2,
    borderRightColor: "#D3D3D3",
  },
  button_right: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  button_text: {
    color: "#808080",
    fontSize: 30,
  },
  allergy_title: {
    marginTop: 40,
    marginBottom: 30,
    fontSize: 20,
  },
  signup_button: {
    marginTop: 30,
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    borderRadius: 20,
    backgroundColor: "#DC661F",
  },
  signup_text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
export default SignupModal;
