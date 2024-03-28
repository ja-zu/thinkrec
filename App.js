import { Provider } from "react-redux";
import { store } from "../thinkrec/redux/store";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainComponent from "./components/mainComponent";
import { AppRegistry } from "react-native";
import { PaperProvider } from "react-native-paper";
import { StyleSheet, View } from "react-native";

export default function App() {
   return (
      <NavigationContainer>
         <Provider store={store}>
            <PaperProvider theme={{ version: 2 }}>
               <MainComponent />
            </PaperProvider>
         </Provider>
      </NavigationContainer>
   );
}
