import React from "react";
import { View, Text, Button } from "react-native";

const Recipes = ({ navigation }) => {
  return (
    <View>
      <Text>recipes</Text>
      <Button
        title="12/10 主菜変更"
        onPress={() => navigation.navigate("MainRecipesList")}
      />
      <Button
        title="12/10 副菜変更"
        onPress={() => navigation.navigate("SideRecipesList")}
      />
    </View>
  );
};

export default Recipes;
