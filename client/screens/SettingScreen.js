// import React from "react";
// import { View, Text } from "react-native";

// const SettingScreen = () => {
//   return (
//     <View>
//       <Text>設定画面</Text>
//     </View>
//   );
// };

// export default SettingScreen;

import * as React from "react";
import { View, StyleSheet, Button } from "react-native";
import * as Speech from "expo-speech";

export default function SettingScreen() {
  const speak = () => {
    const thingToSay = "豆腐を切って下さい";
    Speech.speak(thingToSay);
  };

  return (
    <View>
      <Button title="Press to hear some words" onPress={speak} />
    </View>
  );
}
