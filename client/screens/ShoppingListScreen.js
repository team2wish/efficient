import React from "react";
import { View, Text } from "react-native";
import ShoppingList from "../components/ShoppingList";

const ShoppingListScreen = ({ route }) => {
  return (
    <View>
      <ShoppingList route={route} />
    </View>
  );
};

export default ShoppingListScreen;
