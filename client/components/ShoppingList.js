import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import recipesApi from "../api/recipesApi";
import Checkbox from "expo-checkbox";
import { useNavigation } from "@react-navigation/native";

const ShoppingListScreen = ({ route }) => {
  const [shoppingList, setShoppingList] = useState();
  const [isChecked, setIsChecked] = useState({});
  const useNavigate = useNavigation();
  const token = route.params.token;

  const getShoppingList = async () => {
    try {
      const res = await recipesApi.getShopping(token);
      if (res.data) {
        setShoppingList(res.data);
      }
    } catch (e) {
      Alert.alert("セッションが切れました\n再度ログインしてください");
      useNavigate.navigate("ログイン");
      console.error("Recipes", e);
    }
  };

  useEffect(() => {
    getShoppingList();
  }, []);

  const handleValueChange = (id, value) => {
    setIsChecked({ ...isChecked, [id]: value });
  };

  const getStyle = (value) => {
    switch (value) {
      case "野菜":
        return styles.style1;
      case "豆腐":
        return styles.style2;
      case "肉":
        return styles.style3;
      default:
        return styles.style4;
    }
  };

  return (
    <View style={styles.container}>
      <GestureHandlerRootView>
        <ScrollView>
          {shoppingList &&
            shoppingList.map((dateRecipe, dateIndex) => {
              return (
                <View key={dateIndex}>
                  <Text
                    style={[
                      styles.store_section,
                      getStyle(dateRecipe.store_section),
                    ]}
                  >
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
    textAlign: "center",
    fontSize: 20,
  },
  store_section: {
    borderWidth: 1,
    borderColor: "#cbd5e0",
  },
  style1: {
    fontSize: 20,
    backgroundColor: "green",
    marginBottom: 10,
  },
  style2: {
    fontSize: 20,
    backgroundColor: "white",
    marginBottom: 10,
  },
  style3: {
    fontSize: 20,
    backgroundColor: "orange",
    marginBottom: 10,
  },
  style4: {
    fontSize: 20,
    backgroundColor: "pink",
    marginBottom: 10,
  },
  recipeContainer: {
    width: 370,
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
});

export default ShoppingListScreen;
