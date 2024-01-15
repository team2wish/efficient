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
import { LogBox } from "react-native";

const Stack = createNativeStackNavigator();
export default function App() {
  LogBox.ignoreAllLogs();
  return (
    <NavigationContainer initialRouteName="User">
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#F8F7EE",
          },
          headerTintColor: "#002F15",
          headerTitleStyle: {
            fontSize: 20,
          },
        }}
      >
        <Stack.Screen
          name="ログイン"
          component={LoginScreen}
          options={{
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeTabs}
          options={{
            headerShown: false,
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "white",
            },
          }}
        />
        <Stack.Screen
          name="新規登録"
          component={SignupScreen}
          options={{
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="初期設定"
          component={SignupModalScreen}
          options={{
            presentation: "modal",
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen name="主菜リスト" component={MainRecipesListScreen} />
        <Stack.Screen name="副菜リスト" component={SideRecipesListScreen} />
        <Stack.Screen name="汁物リスト" component={SoupRecipesListScreen} />
        <Stack.Screen name="主食リスト" component={RiceRecipesListScreen} />
        <Stack.Screen name="User" component={UserScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
