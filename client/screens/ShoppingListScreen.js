import React from "react";
import { View, Text } from "react-native";
import ShoppingList from "../components/ShoppingList";

const ShoppingListScreen = ({ token }) => {
  return (
    <View>
      <ShoppingList token={token} />
    </View>
  );
};

export default ShoppingListScreen;
