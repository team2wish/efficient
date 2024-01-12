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

const Tab = createBottomTabNavigator();

const HomeTabs = ({ route }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="献立">
        {() => <RecipesScreen route={route} />}
      </Tab.Screen>
      <Tab.Screen name="買い物">
        {() => <ShoppingListScreen route={route} />}
      </Tab.Screen>
      <Tab.Screen name="料理">
        {() => <CookProcessScreen route={route} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default HomeTabs;
