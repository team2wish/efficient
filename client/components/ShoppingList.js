import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import recipesApi from "../api/recipesApi";

const ShoppingListScreen = () => {
  const [shoppingList, setShoppingList] = useState();

  const getShoppingList = async () => {
    const res = await recipesApi.getShopping();
    console.log("data", res.data);
    if (res.data) {
      setShoppingList(res.data);
    }
  };

  useEffect(() => {
    getShoppingList();
  }, [shoppingList]);

  return (
    // <View>
    //   <Text>買い物リスト</Text>
    //   <Text>12/15〜12/16</Text>
    // </View>
    <View style={styles.container}>
      <Text style={styles.header__top}>12/18(月) ~ 12/22(金)</Text>
      <GestureHandlerRootView>
        <ScrollView>
          {shoppingList &&
            shoppingList.map((dateRecipe, index) => {
              // console.log("daterecipe2", recipesData);
              return (
                <View key={index} style={styles.recipes__days}>
                  <Text style={styles.header__days}>
                    {dateRecipe.store_section}
                  </Text>

                  {dateRecipe.items.map((foodDetail, index) => {
                    // const imgPath = foodDetail.imagePath.slice(0, -4);
                    return (
                      <View
                        style={styles.recipeContainer}
                        // key={foodDetail.id}
                        key={index}
                      >
                        <Text>{foodDetail.ingredient_name}</Text>
                      </View>
                    );
                  })}
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

export default ShoppingListScreen;
