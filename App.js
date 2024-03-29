import { Provider } from "react-redux";
import { store } from "../thinkrec/redux/store";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainComponent from "./components/mainComponent";
import { PaperProvider } from "react-native-paper";

export default function App() {
   return (
      <NavigationContainer>
         <Provider store={store}>
            <PaperProvider theme={{ version: 2 }} dark={true}>
               <MainComponent />
            </PaperProvider>
         </Provider>
      </NavigationContainer>
   );
}
