import React from "react";
import { View, Text, Button } from "react-native";
import Signup from "../components/Signup";
import { useRoute } from "@react-navigation/native";

const SignupScreen = ({ navigation }) => {
  const route = useRoute();
  console.log("route:", route);
  return <Signup navigation={navigation} route={route} />;
};

export default SignupScreen;
