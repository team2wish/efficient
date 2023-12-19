// import React from "react";
import * as React from "react";
import { useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import * as Speech from "expo-speech";

const CookProcess = ({ navigation }) => {
  const speak = () => {
    const thingToSay = "豆腐を切って下さい";
    Speech.speak(thingToSay);
  };

  return (
    <View>
      <Text>調理工程</Text>
      <Button title="Press to hear some words" onPress={speak} />
    </View>
  );
};

export default CookProcess;
