import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from "react-native";
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
      useNavigate.navigate("主菜リスト", [date, beforeId, token]);
    } else if (category === "isSide") {
      useNavigate.navigate("副菜リスト", [date, beforeId, token]);
    } else if (category === "isSoup") {
      useNavigate.navigate("汁物リスト", [date, beforeId, token]);
    } else {
      useNavigate.navigate("主食リスト", [date, beforeId, token]);
    }
  };

  const days = ["月曜日", "火曜日", "水曜日", "木曜日", "金曜日"];

  return (
    <View style={styles.container}>
      {fiveRecipes && (
        <View style={styles.header__top}>
          <Text style={styles.header__date}>{`${fiveRecipes[0].date.slice(
            0,
            4
          )}`}</Text>
          <Text style={styles.header__days_color}>(月)</Text>
          <Text style={styles.header__days_color}> 〜 </Text>
          <Text style={styles.header__date}>{`${fiveRecipes[4].date.slice(
            0,
            4
          )}`}</Text>
          <Text style={styles.header__days_color}>(金)</Text>
        </View>
      )}

      <GestureHandlerRootView>
        <ScrollView>
          {fiveRecipes &&
            fiveRecipes.map((dateRecipe, index) => {
              const totalCookTime = dateRecipe.food.reduce(
                (total, foodDetail) => total + foodDetail.time,
                0
              );
              return (
                <View key={dateRecipe.id} style={styles.recipes_container}>
                  <View style={styles.recipes__days_container}>
                    <Text style={styles.recipes__days}>
                      {`${dateRecipe.date.slice(0, 4)} (${days[index].slice(
                        0,
                        1
                      )})`}
                    </Text>
                    <View style={styles.timer}>
                      <Image
                        source={require("../assets/timerIcon.png")}
                        style={styles.timerIcon}
                      />
                      <Text style={styles.recipes__days}>
                        {Math.floor(totalCookTime * 0.7)}分
                      </Text>
                    </View>
                  </View>
                  <GestureHandlerRootView>
                    <ScrollView
                      horizontal={true}
                      contentContainerStyle={{ flexDirection: "row" }}
                    >
                      {dateRecipe.food.map((foodDetail, index) => {
                        const imgPath = foodDetail.imagePath;
                        return (
                          <View
                            style={
                              (foodDetail.category === "isMain" &&
                                styles.isFirst) ||
                              (foodDetail.category === "isSide" &&
                                styles.isSecond) ||
                              (foodDetail.category === "isSoup" &&
                                styles.isThird) ||
                              (foodDetail.category === "isRice" &&
                                styles.isThird)
                            }
                            key={index}
                          >
                            <Image
                              style={styles.recipeImg}
                              source={{ uri: imgPath }}
                            />
                            <View
                              style={[
                                styles.category_title_container,
                                (foodDetail.category === "isMain" &&
                                  styles.isMain) ||
                                  (foodDetail.category === "isSide" &&
                                    styles.isSide) ||
                                  (foodDetail.category === "isSoup" &&
                                    styles.isSoup) ||
                                  (foodDetail.category === "isRice" &&
                                    styles.isRice),
                              ]}
                            >
                              <Text
                                style={[
                                  styles.category_title,
                                  (foodDetail.category === "isMain" &&
                                    styles.isMain) ||
                                    (foodDetail.category === "isSide" &&
                                      styles.isSide) ||
                                    (foodDetail.category === "isSoup" &&
                                      styles.isSoup) ||
                                    (foodDetail.category === "isRice" &&
                                      styles.isRice),
                                ]}
                              >
                                {(foodDetail.category === "isMain" && "主菜") ||
                                  (foodDetail.category === "isSide" &&
                                    "副菜") ||
                                  (foodDetail.category === "isSoup" &&
                                    "汁物") ||
                                  (foodDetail.category === "isRice" && "主食")}
                              </Text>
                            </View>
                            <TouchableOpacity
                              onPress={() =>
                                changeRecipes(
                                  foodDetail.id,
                                  dateRecipe.date,
                                  foodDetail.category
                                )
                              }
                              style={styles.recipes__update_button}
                            >
                              <Image
                                style={styles.recipes__update_image}
                                source={require("../assets/updateIcon.png")}
                              />
                            </TouchableOpacity>
                            <View style={styles.recipe_title_container}>
                              <Text
                                numberOfLines={1}
                                ellipsizeMode="tail"
                                style={styles.recipe_title}
                              >
                                {foodDetail.name}
                              </Text>
                            </View>
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
    paddingBottom: 120,
    backgroundColor: "white",
  },
  header__top: {
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "baseline",
  },
  header__date: {
    fontSize: 20,
    color: "#002F15",
  },
  header__days_color: {
    color: "#002F15",
  },
  recipes_container: {
    backgroundColor: "#FBFBF6",
    marginBottom: 10,
    flexWrap: "wrap",
    paddingBottom: 10,
  },
  recipes__days_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
  },
  recipes__days: {
    fontSize: 16,
    color: "#002F15",
  },
  recipes__update_button: {
    position: "absolute",
    top: 5,
    right: 5,
  },
  recipes__update_image: {
    width: 24,
    height: 24,
  },
  timer: {
    width: 60,
    flexDirection: "row",
  },
  timerIcon: {
    width: 20,
    height: 20,
    marginRight: 6,
  },
  recipeImg: {
    flex: 1,
    borderRadius: 10,
  },
  recipe_title_container: {
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 0,
    paddingLeft: 20,
    paddingRight: 20,
  },
  recipe_title: {
    textAlign: "center",
    color: "#F3F3F3",
    fontWeight: "bold",
    fontSize: 18,
  },
  isFirst: {
    width: 180,
    height: 180,
    borderRadius: 10,
    marginLeft: 10,
  },
  isSecond: {
    width: 180,
    height: 80,
    borderRadius: 10,
    marginLeft: 10,
  },
  isThird: {
    position: "absolute",
    top: 100,
    right: 0,
    width: 180,
    height: 80,
    borderRadius: 10,
    marginLeft: 10,
  },

  category_title_container: {
    position: "absolute",
    top: 5,
    left: 5,
    padding: 4,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 14,
  },
  category_title: {
    color: "#F3F3F3",
    fontSize: 16,
  },
  isMain: {
    backgroundColor: "#DC7C46",
  },
  isSide: {
    backgroundColor: "#3AB130",
  },
  isSoup: {
    backgroundColor: "#7C6142",
  },
  isRice: {
    backgroundColor: "#DBB85F",
  },
});

export default Recipes;
