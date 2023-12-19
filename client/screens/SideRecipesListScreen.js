import React from "react";
import { View, Text } from "react-native";
import SideRecipesList from "../components/SideRicipesList";

const SideRecipesListScreen = ({ navigation }) => {
  return (
    <View>
      <SideRecipesList />
    </View>
  );
};

export default SideRecipesListScreen;
