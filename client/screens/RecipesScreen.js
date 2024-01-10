import React from "react";
import { View, Text } from "react-native";
import Recipes from "../components/Recipes";

const RecipesScreen = ({ navigation, token }) => {
  return (
    <View>
      <Recipes navigation={navigation} token={token} />
    </View>
  );
};

export default RecipesScreen;
