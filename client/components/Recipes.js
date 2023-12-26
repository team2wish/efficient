import React, { useEffect, useState } from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import recipesApi from "../api/recipesApi";

const Recipes = ({ navigation }) => {
  const [fiveRecipes, setFiveRecipes] = useState();

  const getAllRecipes = async () => {
    const res = await recipesApi.getAll();
    // console.log("data", res.data);
    if (res.data) {
      setFiveRecipes(res.data);
    }
  };

  useEffect(() => {
    getAllRecipes();
  }, [fiveRecipes]);

  const changeRecipes = (beforeId, date, category) => {
    console.log("e-------side", beforeId, date, category);
    if (category === "isMain") {
      navigation.navigate("MainRecipesList", [
        date,
        beforeId,
        fiveRecipes,
        setFiveRecipes,
      ]);
    } else if (category === "isSide") {
      navigation.navigate("SideRecipesList", [
        date,
        beforeId,
        fiveRecipes,
        setFiveRecipes,
      ]);
    } else if (category === "isSoup") {
      console.log("soupだよ");
      navigation.navigate("SoupRecipesList", [
        date,
        beforeId,
        fiveRecipes,
        setFiveRecipes,
      ]);
    } else {
      console.log("riceだよ");
      navigation.navigate("RiceRecipesList", [
        date,
        beforeId,
        fiveRecipes,
        setFiveRecipes,
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header__top}>12/18(月) ~ 12/22(金)</Text>
      <GestureHandlerRootView>
        <ScrollView>
          {fiveRecipes &&
            fiveRecipes.map((dateRecipe) => {
              // console.log("daterecipe2", recipesData);
              return (
                <View key={dateRecipe.id} style={styles.recipes__days}>
                  <Text style={styles.header__days}>
                    {dateRecipe.date.slice(5)} 30分以内
                  </Text>
                  <GestureHandlerRootView>
                    <ScrollView
                      horizontal={true}
                      contentContainerStyle={{ flexDirection: "row" }}
                    >
                      {dateRecipe.food.map((foodDetail, index) => {
                        // const imgPath = foodDetail.imagePath.slice(0, -4);
                        const imgPath = foodDetail.imagePath;
                        return (
                          <View
                            style={styles.recipeContainer}
                            // key={foodDetail.id}
                            key={index}
                          >
                            <Image
                              style={styles.recipeImg}
                              source={{ uri: imgPath }}
                            />
                            <Text numberOfLines={1} ellipsizeMode="tail">
                              {foodDetail.name}
                            </Text>
                            <Button
                              title="変更"
                              color="red"
                              onPress={() =>
                                changeRecipes(
                                  foodDetail.id,
                                  dateRecipe.date,
                                  foodDetail.category
                                )
                              }
                            />
                          </View>
                        );
                      })}
                    </ScrollView>
                  </GestureHandlerRootView>
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
    borderColor: "#cbd5e0",
  },
  recipeContainer: {
    width: 150,
    marginRight: 8,
    // borderWidth: 1,
  },
  header__days: {
    fontSize: 20,
  },
  recipeImg: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginLeft: 10,
  },
});

export default Recipes;
