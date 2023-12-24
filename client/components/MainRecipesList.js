import React, { useEffect, useState } from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import recipesApi from "../api/recipesApi";

const MainRecipesList = ({ navigation }) => {
  const [Recipes, setRecipes] = useState();

  const anotherRecipes = async () => {
    const res = await recipesApi.changeMainRecipes();
    // console.log("data", res.data);
    if (res.data) {
      setRecipes(res.data);
    }
  };

  const changeRecipes = () => {
    console.log("mainRecipeをpost");
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
              // console.log("daterecipe2", recipesData);
              return (
                <View key={dateRecipe.foodId} style={styles.recipes__days}>
                  {/* <GestureHandlerRootView>
                    <ScrollView
                      horizontal={true}
                      contentContainerStyle={{ flexDirection: "row" }}
                    > */}
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
                    <Button title="選択" color="red" onPress={changeRecipes} />
                  </View>
                  {/* </ScrollView>
                  </GestureHandlerRootView> */}
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
  header__top: {
    marginBottom: 10,
    fontSize: 20,
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
  header__days: {
    fontSize: 20,
  },
  recipeImg: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginLeft: 10,
  },
});

export default MainRecipesList;
