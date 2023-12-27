import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import recipesApi from "../api/recipesApi";
import Checkbox from "expo-checkbox";

const ShoppingListScreen = () => {
  const [shoppingList, setShoppingList] = useState();
  const [isChecked, setIsChecked] = useState({});

  const getShoppingList = async () => {
    const res = await recipesApi.getShopping();
    // console.log("data", res.data);
    if (res.data) {
      setShoppingList(res.data);
    }
  };

  useEffect(() => {
    getShoppingList();
  }, []);

  const handleValueChange = (id, value) => {
    setIsChecked({ ...isChecked, [id]: value });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header__top}>12/18(月) ~ 12/22(金)</Text>
      <GestureHandlerRootView>
        <ScrollView>
          {shoppingList &&
            shoppingList.map((dateRecipe, dateIndex) => {
              // console.log("daterecipe2", recipesData);
              return (
                <View key={dateIndex} style={styles.recipes__days}>
                  <Text style={styles.header__days}>
                    {dateRecipe.store_section}
                  </Text>

                  {dateRecipe.items.map((foodDetail, itemIndex) => {
                    // const imgPath = foodDetail.imagePath.slice(0, -4);
                    const id = `${dateIndex}-${itemIndex}`;
                    return (
                      <View style={styles.recipeContainer} key={id}>
                        <View style={styles.checkboxContainer}>
                          <Checkbox
                            style={styles.checkbox}
                            value={isChecked[id] || false}
                            onValueChange={(value) =>
                              handleValueChange(id, value)
                            }
                          />
                          <Text>{foodDetail.ingredient_name}</Text>
                        </View>
                        <Text style={styles.recipeContainer__right}>
                          {foodDetail.total_quantity}
                          {foodDetail.unit}
                        </Text>
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
    width: 300,
    marginRight: 8,
    // borderWidth: 1,
  },
  checkboxContainer: {
    width: 300,
    flexDirection: "row",
    alignItems: "center",
  },
  recipeContainer__right: {
    color: "red",
    textAlign: "right",
  },
  header__days: {
    fontSize: 20,
    backgroundColor: "green",
  },
  recipeImg: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginLeft: 10,
  },
});

export default ShoppingListScreen;
