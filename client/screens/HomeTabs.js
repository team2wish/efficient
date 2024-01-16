import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "react-native-gesture-handler";
import RecipesScreen from "./RecipesScreen";
import CookProcessScreen from "./CookProcessScreen";
import ShoppingListScreen from "./ShoppingListScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const HomeTabs = ({ route }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="今週の献立"
        options={{
          headerStyle: {
            shadowColor: "transparent",
          },
          headerTintColor: "#002F15",
          headerTitleStyle: {
            fontSize: 20,
          },
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="archive-edit-outline"
              size={24}
              color="black"
            />
          ),
        }}
      >
        {() => <RecipesScreen route={route} />}
      </Tab.Screen>
      <Tab.Screen
        name="買い物"
        options={{
          headerStyle: {
            shadowColor: "transparent",
          },
          headerTintColor: "#002F15",
          headerTitleStyle: {
            fontSize: 20,
          },
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="shopping-outline"
              size={24}
              color="black"
            />
          ),
        }}
      >
        {() => <ShoppingListScreen route={route} />}
      </Tab.Screen>
      <Tab.Screen
        name="料理"
        options={{
          headerStyle: {
            shadowColor: "transparent",
          },
          headerTintColor: "#002F15",
          headerTitleStyle: {
            fontSize: 20,
          },
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="clock-start"
              size={24}
              color="black"
            />
          ),
        }}
      >
        {() => <CookProcessScreen route={route} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default HomeTabs;
