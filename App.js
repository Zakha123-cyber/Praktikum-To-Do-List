import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddTodoScreen from "./src/screens/AddToDoScreen";
import ViewTodoScreen from "./src/screens/ViewTodoScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ViewTodos">
          <Stack.Screen name="AddTodo" component={AddTodoScreen} options={{ title: "Tambah To-Do" }} />
          <Stack.Screen name="ViewTodos" component={ViewTodoScreen} options={{ title: "Daftar To-Do" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
