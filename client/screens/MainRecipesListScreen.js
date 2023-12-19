import React from "react";
import { View, Text } from "react-native";
import MainRecipesList from "../components/MainRecipesList";

const MainRecipesListScreen = ({ navigation }) => {
  return (
    <View>
      <MainRecipesList />
    </View>
  );
};

export default MainRecipesListScreen;
