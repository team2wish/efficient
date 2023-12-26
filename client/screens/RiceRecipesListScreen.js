import React from "react";
import { View, Text } from "react-native";
import RiceRecipesList from "../components/RiceRecipesList";
import { useRoute } from "@react-navigation/native";

const RiceRecipesListScreen = ({ navigation }) => {
  const route = useRoute();

  return (
    <View>
      <RiceRecipesList route={route} navigation={navigation} />
    </View>
  );
};

export default RiceRecipesListScreen;
