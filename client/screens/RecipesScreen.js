import React from "react";
import { View, Text } from "react-native";
import Recipes from "../components/Recipes";

const RecipesScreen = ({ navigation }) => {
  return (
    <View>
      <Recipes navigation={navigation} />
    </View>
  );
};

export default RecipesScreen;
