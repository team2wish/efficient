import React, { useState } from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";
// import Checkbox from "expo-checkbox";

const SignupModal = ({ navigation }) => {
  const [adultcount, setAdultcount] = useState(0);
  const [childrencount, setChildrencount] = useState(0);
  // const [isChecked, setChecked] = useState(false);

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

  return (
    <View style={styles.container}>
      <Text>SignupModal</Text>
      <Text>大人 {adultcount}名</Text>
      <Button title="ー" onPress={adultcountSub} />
      <Button title="＋" onPress={adultcountAdd} />
      <Text>子供 {childrencount}名</Text>
      <Button title="ー" onPress={childrencountSub} />
      <Button title="＋" onPress={childrencountAdd} />
      <Text>アレルギー</Text>
      {/* <Checkbox
        style={styles.checkbox}
        value={isChecked}
        onValueChange={setChecked}
      /> */}
      <Text>チェックボックス実装予定</Text>
      <Button
        styles={styles.button}
        title="新規登録画面へ戻る"
        onPress={() =>
          navigation.navigate("Signup", [adultcount, childrencount])
        }
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
  button: {
    // flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});

export default SignupModal;
