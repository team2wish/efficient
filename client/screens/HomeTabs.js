import React from 'react';
import { View, Text, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CalendarScreen from './CalendarScreen';
import 'react-native-gesture-handler';
import RecipesScreen from './RecipesScreen';
import CookProcessScreen from './CookProcessScreen';
import ShoppingListScreen from './ShoppingListScreen';
// import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    //移動先にデータ渡せる
    //     onPress={() => navigation.navigate("User", { userId: 1 })}

    <Tab.Navigator>
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen
        name="Recipes"
        component={RecipesScreen}
        // options={{
        //   title: '献立編集',
        //   tabBarIcon: () => {
        //     <MaterialCommunityIcons
        //       name="calendar-edit"
        //       size={24}
        //       color="black"
        //     />;
        //   },
        // }}
      />
      <Tab.Screen name="ShoppingList" component={ShoppingListScreen} />
      <Tab.Screen name="CookProcess" component={CookProcessScreen} />
    </Tab.Navigator>
  );
};

export default HomeTabs;
