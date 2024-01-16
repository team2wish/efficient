import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  FlatList,
  Alert,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import recipesApi from "../api/recipesApi";
import axios from "axios";

const SideRecipesList = ({ navigation, route }) => {
  const [Recipes, setRecipes] = useState();

  const anotherRecipes = async () => {
    try {
      const token = route.params[2];
      const res = await recipesApi.changeSideRecipes(token);
      if (res.data) {
        setRecipes(res.data);
      }
    } catch (e) {
      Alert.alert("セッションが切れました\n再度ログインしてください");
      navigation.navigate("ログイン");
      console.error("changeSideRecipe :", e);
    }
  };

  const changeRecipes = async (afterId) => {
    try {
      const date = route.params[0];
      const beforeId = route.params[1];
      const token = route.params[2];
      const res = await recipesApi.postRecipes(date, beforeId, afterId, token);
      if (res.data) {
        navigation.navigate("Home", { token: token, update: true });
      }
    } catch (e) {
      Alert.alert("セッションが切れました\n再度ログインしてください");
      navigation.navigate("ログイン");
      console.error("changeSideRecipe :", e);
    }
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

export default SideRecipesList;
