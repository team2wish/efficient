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
import SignupModalScreen from "./screens/SignupModalScreen";
import RiceRecipesListScreen from "./screens/RiceRecipesListScreen";
import SoupRecipesListScreen from "./screens/SoupRecipesListScreen";
import { StyleSheet } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer initialRouteName="User">
      {/* スタック遷移 */}
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: styles.container.backgroundColor,
          },
          headerTitleStyle: {
            fontFamily: "ヒラギノ角ゴ ProN W3",
            fontSize: 20,
          },
        }}
      >
        <Stack.Screen name="ログイン" component={LoginScreen} />
        <Stack.Screen
          name="Home"
          component={HomeTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen
          name="SignupModal"
          component={SignupModalScreen}
          options={{
            presentation: "modal",
          }}
        />
        <Stack.Screen
          name="MainRecipesList"
          component={MainRecipesListScreen}
        />
        <Stack.Screen
          name="SideRecipesList"
          component={SideRecipesListScreen}
        />
        <Stack.Screen
          name="SoupRecipesList"
          component={SoupRecipesListScreen}
        />
        <Stack.Screen
          name="RiceRecipesList"
          component={RiceRecipesListScreen}
        />
        <Stack.Screen name="User" component={UserScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F7EE",

    // backgroundColor: "red",
  },
});
