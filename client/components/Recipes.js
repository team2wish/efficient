import React, { useEffect, useState } from "react";
import { View, Text, Button, Image, StyleSheet, Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import recipesApi from "../api/recipesApi";
import { useNavigation } from "@react-navigation/native";

const Recipes = ({ route }) => {
  const [fiveRecipes, setFiveRecipes] = useState();

  const useNavigate = useNavigation();
  const token = route.params.token;

  const getAllRecipes = async () => {
    try {
      const res = await recipesApi.getAll(token);
      if (res.data) {
        setFiveRecipes(res.data);
      }
    } catch (e) {
      Alert.alert("セッションが切れました\n再度ログインしてください");
      useNavigate.navigate("ログイン");
      console.error("Recipes", e);
    }
  };

  useEffect(() => {
    getAllRecipes();
  }, []);

  useEffect(() => {
    if (route.params.update) {
      getAllRecipes();
      route.params.update = false;
    }
  }, [route.params.update]);

  const changeRecipes = (beforeId, date, category) => {
    if (category === "isMain") {
      useNavigate.navigate("MainRecipesList", [date, beforeId, token]);
    } else if (category === "isSide") {
      useNavigate.navigate("SideRecipesList", [date, beforeId, token]);
    } else if (category === "isSoup") {
      useNavigate.navigate("SoupRecipesList", [date, beforeId, token]);
    } else {
      useNavigate.navigate("RiceRecipesList", [date, beforeId, token]);
    }
  };

  return (
    <View style={styles.container}>
      {fiveRecipes && (
        <View style={styles.header__top}>
          <Text>{`${fiveRecipes[0].date.slice(5)}`}</Text>
          <Text>月</Text>
          <Text> 〜 </Text>
          <Text>{`${fiveRecipes[4].date.slice(5)}`}</Text>
          <Text>金</Text>
        </View>
      )}

      <GestureHandlerRootView>
        <ScrollView>
          {fiveRecipes &&
            fiveRecipes.map((dateRecipe) => {
              const totalCookTime = dateRecipe.food.reduce(
                (total, foodDetail) => total + foodDetail.time,
                0
              );
              return (
                <View key={dateRecipe.id} style={styles.recipes__days}>
                  <Text style={styles.header__days}>
                    {dateRecipe.date.slice(5)} {Math.floor(totalCookTime * 0.7)}
                    分以内
                  </Text>
                  <GestureHandlerRootView>
                    <ScrollView
                      horizontal={true}
                      contentContainerStyle={{ flexDirection: "row" }}
                    >
                      {dateRecipe.food.map((foodDetail, index) => {
                        const imgPath = foodDetail.imagePath;

                        return (
                          <View style={styles.recipeContainer} key={index}>
                            <Image
                              style={styles.recipeImg}
                              source={{ uri: imgPath }}
                            />
                            <Text>{foodDetail.time}分</Text>
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
    flexDirection: "row",
  },
  recipes__days: {
    borderWidth: 1,
    borderColor: "#cbd5e0",
  },
  recipeContainer: {
    width: 150,
    marginRight: 8,
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
