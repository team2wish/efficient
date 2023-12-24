import React, { useEffect, useState } from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import recipesApi from "../api/recipesApi";

const Recipes = ({ navigation }) => {
  const [fiveRecipes, setFiveRexipes] = useState();

  const getAllRecipes = async () => {
    const res = await recipesApi.getAll();
    // console.log("data", res.data);
    if (res.data) {
      setFiveRexipes(res.data);
    }
  };

  useEffect(() => {
    getAllRecipes();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header__top}>12/18(月) ~ 12/22(金)</Text>
      <GestureHandlerRootView>
        <ScrollView>
          {fiveRecipes &&
            fiveRecipes.map((dateRecipe) => {
              // console.log("daterecipe2", recipesData);
              return (
                <View key={dateRecipe.id}>
                  <Text style={styles.header__days}>
                    　{dateRecipe.date.slice(5)} 　　30分以内
                  </Text>
                  <GestureHandlerRootView>
                    <ScrollView
                      horizontal={true}
                      contentContainerStyle={{ flexDirection: "row" }}
                    >
                      {dateRecipe.food.map((foodDetail) => {
                        // const imgPath = foodDetail.imagePath.slice(0, -4);
                        const imgPath = foodDetail.imagePath;
                        return (
                          <View
                            key={foodDetail.foodId}
                            style={{ marginRight: 8 }}
                          >
                            <Image
                              style={styles.recipeImg}
                              source={{ uri: imgPath }}
                            />
                            <Button
                              title="変更"
                              color="red"
                              onPress={() =>
                                navigation.navigate("MainRecipesList")
                              }
                            />
                            {/* <Button
                              title="12/10 副菜変更"
                              onPress={() =>
                                navigation.navigate("SideRecipesList")
                              }
                            /> */}
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

export default Recipes;
