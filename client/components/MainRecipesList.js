import React, { useEffect, useState } from "react";
import { View, Text, Button, Image, StyleSheet, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import recipesApi from "../api/recipesApi";
import axios from "axios";

const MainRecipesList = ({ navigation, route }) => {
  const [Recipes, setRecipes] = useState();
  // console.log("mainrecipes", route.params);

  const anotherRecipes = async () => {
    const res = await recipesApi.changeMainRecipes();
    // console.log("data", res.data);
    if (res.data) {
      setRecipes(res.data);
    }
  };

  const url = "http://localhost:3000/api/v1/recipes";

  const changeRecipes = (afterId) => {
    // console.log(`${url}/${route.params[0]}/${route.params[1]}/${afterId}`);
    // console.log("mainRecipeをpost", route.params[0], route.params[1], afterId);
    const postChangeMainRecipes = async () => {
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
    postChangeMainRecipes();
  };

  useEffect(() => {
    anotherRecipes();
  }, []);

  return (
    <View style={styles.container}>
      <GestureHandlerRootView>
        <FlatList
          data={Recipes}
          keyExtractor={(item) => item.foodId.toString()}
          numColumns={2} // 2列のグリッド表示
          renderItem={({ item }) => (
            <View style={styles.recipeContainer}>
              <Image
                style={styles.recipeImg}
                source={{ uri: item.imagePath }}
              />
              <Text>{item.time}分</Text>
              <Text numberOfLines={1} ellipsizeMode="tail">
                {item.name}
              </Text>
              <Button
                title="選択"
                color="red"
                onPress={() => changeRecipes(item.foodId)}
              />
            </View>
          )}
        />
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
    width: "50%", // 2列のグリッド表示のために幅を50%に設定
    // marginRight: 8,
    // borderWidth: 1,
  },

  recipeImg: {
    width: "90%",
    height: 100,
    borderRadius: 10,
    // marginLeft: 10,
  },
});

export default MainRecipesList;
