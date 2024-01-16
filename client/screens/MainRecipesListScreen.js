import React from "react";
import { View, Text } from "react-native";
import MainRecipesList from "../components/MainRecipesList";
import { useRoute } from "@react-navigation/native";

const MainRecipesListScreen = ({ navigation }) => {
  const route = useRoute();

  return (
    <View>
      <MainRecipesList route={route} navigation={navigation} />
    </View>
  );
};

export default MainRecipesListScreen;
