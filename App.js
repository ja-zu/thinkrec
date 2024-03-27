import { Provider } from "react-redux";
import { store } from "../thinkrec/redux/store";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainComponent from "./components/mainComponent";
import { StyleSheet, View } from "react-native";

export default function App() {
   return (
      <NavigationContainer>
         <Provider store={store}>
            <MainComponent />
         </Provider>
      </NavigationContainer>
   );
}
