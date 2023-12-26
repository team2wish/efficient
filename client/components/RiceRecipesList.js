import React, { useEffect, useState } from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import recipesApi from "../api/recipesApi";
import axios from "axios";

const RiceRecipesList = ({ navigation, route }) => {
  const [Recipes, setRecipes] = useState();
  // console.log("mainrecipes", route.params);

  const anotherRecipes = async () => {
    const res = await recipesApi.changeRiceRecipes();
    // console.log("data", res.data);
    if (res.data) {
      setRecipes(res.data);
    }
  };

  const url = "http://localhost:3000/api/v1/recipes";

  const changeRecipes = (afterId) => {
    // console.log(`${url}/${route.params[0]}/${route.params[1]}/${afterId}`);
    const postChangeSideRecipes = async () => {
      const res = await axios.put(
        `${url}/${route.params[0]}/${route.params[1]}/${afterId}`,
        { date: route.params[0], beforeId: route.params[1], afterId: afterId }
      );
      // console.log("data", res.data);
      if (res.data) {
        console.log("post後-------", res.data);
        navigation.navigate("Home");
      }
    };
    postChangeSideRecipes();
  };

  useEffect(() => {
    anotherRecipes();
  }, []);

  return (
    <View style={styles.container}>
      <GestureHandlerRootView>
        <ScrollView>
          {Recipes &&
            Recipes.map((dateRecipe) => {
              return (
                <View key={dateRecipe.foodId} style={styles.recipes__days}>
                  <View
                    style={styles.recipeContainer}
                    // key={foodDetail.foodId}
                  >
                    <Image
                      style={styles.recipeImg}
                      source={{ uri: dateRecipe.imagePath }}
                    />
                    <Text numberOfLines={1} ellipsizeMode="tail">
                      {dateRecipe.name}
                    </Text>
                    <Button
                      title="選択"
                      color="red"
                      onPress={() => changeRecipes(dateRecipe.foodId)}
                    />
                  </View>
                </View>
              );
            })}
        </ScrollView>
      </GestureHandlerRootView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F6EC",
  },

  recipes__days: {
    borderWidth: 1,
    width: 150,
  },
  recipeContainer: {
    width: 120,
    marginRight: 8,
    // borderWidth: 1,
  },

  recipeImg: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginLeft: 10,
  },
});

export default RiceRecipesList;
