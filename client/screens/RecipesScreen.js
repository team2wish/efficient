import React from "react";
import { View, Text } from "react-native";
import Recipes from "../components/Recipes";

const RecipesScreen = ({ navigation, route }) => {
  return (
    <View>
      <Recipes navigation={navigation} route={route} />
    </View>
  );
};

export default RecipesScreen;
