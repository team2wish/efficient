import React, { useEffect, useState } from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import recipesApi from "../api/recipesApi";

// const db = { path: require('../assets/testRecipeImg/照り焼きちきん.jpeg') };
const img = require("../assets/testRecipeImg/照り焼きちきん.jpeg"); // 大事
const testRecipes = [
  {
    id: 1,
    date: "12/18(月)",
    food: [
      {
        foodId: 1,
        // imgPath: db.path,
        imgPath: img,
      },
      {
        foodId: 2,
        imgPath: require("../assets/testRecipeImg/なすと鶏肉の胡麻和え.jpeg"),
      },
      { foodId: 3, imgPath: require("../assets/testRecipeImg/rice.jpeg") },
      { foodId: 4, imgPath: require("../assets/testRecipeImg/味噌汁.jpeg") },
    ],
  },
  {
    id: 2,
    date: "12/19(火)",
    food: [
      {
        foodId: 4,
        imgPath: require("../assets/testRecipeImg/照り焼きちきん.jpeg"),
      },
      {
        foodId: 5,
        imgPath: require("../assets/testRecipeImg/なすと鶏肉の胡麻和え.jpeg"),
      },
      { foodId: 6, imgPath: require("../assets/testRecipeImg/rice.jpeg") },
      { foodId: 7, imgPath: require("../assets/testRecipeImg/味噌汁.jpeg") },
    ],
  },
  {
    id: 3,
    date: "12/20(水)",
    food: [
      {
        foodId: 8,
        imgPath: require("../assets/testRecipeImg/照り焼きちきん.jpeg"),
      },
      {
        foodId: 9,
        imgPath: require("../assets/testRecipeImg/なすと鶏肉の胡麻和え.jpeg"),
      },
      { foodId: 10, imgPath: require("../assets/testRecipeImg/rice.jpeg") },
      { foodId: 11, imgPath: require("../assets/testRecipeImg/味噌汁.jpeg") },
    ],
  },
  {
    id: 4,
    date: "12/21(木)",
    food: [
      {
        foodId: 12,
        imgPath: require("../assets/testRecipeImg/照り焼きちきん.jpeg"),
      },
      {
        foodId: 13,
        imgPath: require("../assets/testRecipeImg/なすと鶏肉の胡麻和え.jpeg"),
      },
      { foodId: 14, imgPath: require("../assets/testRecipeImg/rice.jpeg") },
      { foodId: 15, imgPath: require("../assets/testRecipeImg/味噌汁.jpeg") },
    ],
  },
];

// const Recipes = ({ navigation }) => {
//   const getAllRecipes = async () => {
//     const data = await recipesApi.getAll();
//     recipes = data;
//     console.log("data", recipes);
//   };
//   let recipes;
//   useEffect(() => {
//     getAllRecipes();
//   }, []);
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

  // if (fiveRecipes !== undefined) {
  //   setFiveRexipes(fiveRecipes.data);
  //   // console.log("@@@@@@@@@@@@data", fiveRecipes.data);
  // }
  // console.log("@@@@@@@@@@@@22", fiveRecipes);

  return (
    // <View>
    //   {/* {console.log(fiveRecipes)} */}
    //   {fiveRecipes ? fiveRecipes.map((data) => console.log(data)) : null}
    // </View>
    <View>
      <Text>12/18(月) ~ 12/22(金)</Text>
      <GestureHandlerRootView>
        <ScrollView>
          {fiveRecipes &&
            fiveRecipes.map((dateRecipe) => {
              // console.log("daterecipe2", recipesData);
              return (
                <View key={dateRecipe.id}>
                  <Text>{dateRecipe.date}</Text>
                  <GestureHandlerRootView>
                    <ScrollView
                      horizontal={true}
                      contentContainerStyle={{ flexDirection: "row" }}
                    >
                      {dateRecipe.food.map((foodDetail) => {
                        // const imgPath = `../assets/serverRecipeImg/${foodDetail.imagePath}`;
                        const imgPath = `../assets/testRecipeImg/照り焼きちきん.jpeg`;
                        console.log(imgPath);
                        return (
                          <View
                            key={foodDetail.foodId}
                            style={{ marginRight: 8 }}
                          >
                            <Image
                              style={styles.recipeImg}
                              source={require(imgPath)}
                            />
                            {/* <Image
                            style={styles.recipeImg}
                            source={require("../assets/testRecipeImg/rice.jpeg")}
                          /> */}
                            <Button
                              title="12/10 主菜変更"
                              onPress={() =>
                                navigation.navigate("MainRecipesList")
                              }
                            />
                            <Button
                              title="12/10 副菜変更"
                              onPress={() =>
                                navigation.navigate("SideRecipesList")
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
    paddingTop: 50,
  },
  recipeImg: {
    width: 100,
    height: 100,
  },
});

export default Recipes;
