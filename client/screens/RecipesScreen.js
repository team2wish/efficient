import React from "react";
import { View, Text } from "react-native";
import Recipes from "../components/Recipes";

const RecipesScreen = ({ navigation, token }) => {
  console.log("RecipesScreen", token);
  return (
    <View>
      <Recipes navigation={navigation} token={token} />
    </View>
  );
};

export default RecipesScreen;
