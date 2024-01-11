import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CalendarScreen from "./CalendarScreen";
import "react-native-gesture-handler";
import RecipesScreen from "./RecipesScreen";
import CookProcessScreen from "./CookProcessScreen";
import ShoppingListScreen from "./ShoppingListScreen";
// import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Tab = createBottomTabNavigator();

const HomeTabs = ({ route }) => {
  console.log("Home", route);
  // console.log(route.params[0]);
  // const [token, setToken] = useState("");
  // const getData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem("my-key");
  //     if (value !== null) {
  //       // value previously stored
  //       setToken(value);
  //     }
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };
  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <Tab.Navigator>
      {/* <Tab.Screen name="カレンダー" component={CalendarScreen} /> */}
      {/* <Tab.Screen name="献立" component={RecipesScreen} /> */}
      {/* <Tab.Screen name="買い物" component={ShoppingListScreen} /> */}
      {/* <Tab.Screen name="料理" component={CookProcessScreen} /> */}
      <Tab.Screen name="献立">
        {() => <RecipesScreen token={route.params} />}
      </Tab.Screen>
      <Tab.Screen name="買い物">
        {() => <ShoppingListScreen token={route.params} />}
      </Tab.Screen>
      <Tab.Screen name="料理">
        {() => <CookProcessScreen token={route.params} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default HomeTabs;
