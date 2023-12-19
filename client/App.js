import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeTabs from "./screens/HomeTabs";
import UserScreen from "./screens/UserScreen";
import SettingScreen from "./screens/SettingScreen";
import LoginScreen from "./screens/LoginScreen";
import "react-native-gesture-handler";
import SignupScreen from "./screens/SignupScreen";
import MainRecipesListScreen from "./screens/MainRecipesListScreen";
import SideRecipesListScreen from "./screens/SideRecipesListScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer initialRouteName="User">
      {/* スタック遷移 */}
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="Home"
          component={HomeTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen
          name="MainRecipesList"
          component={MainRecipesListScreen}
        />
        <Stack.Screen
          name="SideRecipesList"
          component={SideRecipesListScreen}
        />
        <Stack.Screen name="User" component={UserScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
