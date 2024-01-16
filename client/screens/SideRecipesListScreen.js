import React from "react";
import { View, Text } from "react-native";
import SideRecipesList from "../components/SideRicipesList";
import { useRoute } from "@react-navigation/native";

const SideRecipesListScreen = ({ navigation }) => {
  const route = useRoute();

  return (
    <View>
      <SideRecipesList route={route} navigation={navigation} />
    </View>
  );
};

export default SideRecipesListScreen;
