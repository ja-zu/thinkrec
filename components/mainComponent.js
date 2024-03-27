import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/Home";
import EntriesScreen from "../screens/Entries";
import NewEntryScreen from "../screens/NewEntry";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

/* const HomeNavigator = () => {
   const Stack = createNativeStackNavigator();
   return (
      <Stack.Navigator>
         <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
   );
}; */
const EntriesNavigator = () => {
   const Stack = createNativeStackNavigator();
   return (
      <Stack.Navigator
         screenOptions={{
            headerShown: false,
         }}
      >
         <Stack.Screen name="All Entries" component={EntriesScreen} />
      </Stack.Navigator>
   );
};
/* const NewEntryNavigator = () => {
   const Stack = createNativeStackNavigator();
   return (
      <Stack.Navigator>
         <Stack.Screen name="New Entry" component={NewEntryScreen} />
      </Stack.Navigator>
   );
}; */

const MainComponent = () => {
   const Tab = createBottomTabNavigator();
   return (
      <Tab.Navigator
         initialRouteName="Home"
         screenOptions={{
            tabBarStyle: styles.tabs,
            tabBarLabelStyle: styles.tabText,
            tabBarActiveBackgroundColor: "#4682b4",
            tabBarIconStyle: styles.tabIcon,
            headerStyle: styles.tabHeaderBg,
            headerTintColor: "#000080",
         }}
      >
         <Tab.Screen name="Home" component={HomeScreen} />
         <Tab.Screen name="Entries" component={EntriesNavigator} />
         <Tab.Screen name="New Entry" component={NewEntryScreen} />
      </Tab.Navigator>
   );
};

const styles = StyleSheet.create({
   tabs: {
      backgroundColor: "#b0c4de",
      position: "absolute",
   },
   tabText: {
      color: "#000080",
      fontSize: 15,
      textTransform: "uppercase",
      fontWeight: 800,
   },
   tabIcon: {
      color: "#ffffff",
   },
   drawerHeaderText: {
      ViewStyle: {
         paddingTop: 20,
         paddingBottom: 20,
      },
      TextStyle: {
         color: "#fff",
         fontSize: 64,
         fontWeight: "bold",
      },
   },
   tabHeaderBg: {
      backgroundColor: "#b0c4de",
   },
   drawerImage: {
      margin: 10,
      height: 60,
      width: 60,
   },
   stackIcon: {
      marginLeft: 10,
      color: "#fff",
      fontSize: 24,
   },
});

export default MainComponent;
