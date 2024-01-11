import React from "react";
import { View, Text, Button } from "react-native";
import SignupModal from "../components/SignupModal";
import { useRoute } from "@react-navigation/native";

const SignupModalScreen = ({ navigation }) => {
  const route = useRoute();
  return <SignupModal navigation={navigation} route={route} />;
};

export default SignupModalScreen;
