import React from "react";
import { View } from "react-native";
import CookProcess from "../components/CookProcess";

const CookProcessScreen = ({ route }) => {
  return (
    <View>
      <CookProcess route={route} />
    </View>
  );
};

export default CookProcessScreen;
