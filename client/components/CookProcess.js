// import React from "react";
import * as React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import * as Speech from "expo-speech";
import "../assets/icon.png";

let process = [
  {
    recipiName: "味噌汁",
    recipiPic: "../assets/icon.png",
    process: "豆腐を切ります",
    processPic: "../assets/icon.png",
  },
  {
    recipiName: "鶏肉の照り焼き",
    recipiPic: "../assets/icon.png",
    process: "鶏肉を切ります",
    processPic: "../assets/icon.png",
  },
];

const CookProcess = ({ navigation }) => {
  const [count, setCount] = useState(0);

  const speak = () => {
    const thingToSay = "豆腐を切って下さい";
    Speech.speak(thingToSay);
  };

  const beforeProcess = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const afterProcess = () => {
    if (process.length > count) {
      setCount(count + 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.recipiContainer}>
        <Text>{process[count].recipiName}</Text>
        <Text>count：{count}</Text>
        <Image
          style={styles.recipiPic}
          source={require("../assets/icon.png")}
        />
      </View>
      <View style={styles.processContainer}>
        <Text>{process[count].process}</Text>
        <Image
          style={styles.processPic}
          source={require("../assets/icon.png")}
        />
      </View>
      <View style={styles.viewControl}>
        {/* <Button title="Press to hear some words" onPress={speak} /> */}
        <Button title="前へ" onPress={beforeProcess} />
        <Button title="次へ" onPress={afterProcess} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
  },
  recipiContainer: {
    marginTop: 10,
    backgroundColor: "green",
  },
  processContainer: {
    marginTop: 50,
  },
  recipiPic: {
    width: 100,
    height: 100,
  },
  processPic: {
    width: 200,
    height: 200,
  },
  viewControl: {
    marginTop: 20,
  },
});

export default CookProcess;
