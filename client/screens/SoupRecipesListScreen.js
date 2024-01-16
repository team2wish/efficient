import React from "react";
import { View, Text } from "react-native";
import SoupRecipesList from "../components/SoupRecipesList";
import { useRoute } from "@react-navigation/native";

const SoupRecipesListScreen = ({ navigation }) => {
  const route = useRoute();

  return (
    <View>
      <SoupRecipesList route={route} navigation={navigation} />
    </View>
  );
};

export default SoupRecipesListScreen;
