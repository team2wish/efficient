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
        return styles.vegetable;
      case "豆腐":
        return styles.tofu;
      case "肉":
        return styles.meet;
      case "魚":
        return styles.fish;
      default:
        return styles.other;
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
                    const id = `${dateIndex}-${itemIndex}`;
                    return (
                      <View style={styles.ingredients_container} key={id}>
                        <View style={styles.ingredients}>
                          <Checkbox
                            style={styles.checkbox}
                            value={isChecked[id] || false}
                            onValueChange={(value) =>
                              handleValueChange(id, value)
                            }
                          />
                          <Text style={styles.ingredient_name}>
                            {foodDetail.ingredient_name}
                          </Text>
                        </View>
                        {/* </View> */}
                        <Text style={styles.ingredients__right}>
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
    padding: 10,
    marginBottom: 24,
    marginTop: 24,
  },
  vegetable: {
    fontSize: 24,
    backgroundColor: "#A4E78C",
  },
  tofu: {
    fontSize: 24,
    backgroundColor: "white",
  },
  meet: {
    fontSize: 24,
    backgroundColor: "#FED6B2",
  },
  fish: {
    fontSize: 24,
    backgroundColor: "#B2B9FE",
  },
  other: {
    fontSize: 24,
    backgroundColor: "pink",
  },
  ingredients_container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#D3D3D3",
  },
  ingredient_name: {
    fontSize: 20,
  },
  ingredients: {
    flexDirection: "row",
    alignItems: "center",
  },
  ingredients__right: {
    color: "#DC661F",
    textAlign: "right",
    fontSize: 18,
  },
  checkboxContainer: {
    width: 300,
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 16,
    height: 16,
    marginRight: 10,
  },
});

export default ShoppingListScreen;
