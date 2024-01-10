import React from "react";
import { View, Text } from "react-native";
import CookProcess from "../components/CookProcess";

const CookProcessScreen = ({ navigation, token }) => {
  return (
    <View>
      <CookProcess token={token} />
    </View>
  );
};

export default CookProcessScreen;
