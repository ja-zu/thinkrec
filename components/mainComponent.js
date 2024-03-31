import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/Home";
import EntriesScreen from "../screens/Entries";
import NewEntryScreen from "../screens/NewEntry";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import EntryScreen from "../screens/Entry";
import { Text, Icon } from "react-native-paper";

const EntriesNavigator = () => {
   const Stack = createNativeStackNavigator();
   return (
      <Stack.Navigator
         screenOptions={{
            headerShown: true,
         }}
      >
         <Stack.Screen name="All Entries" component={EntriesScreen} />
         <Stack.Screen name="Entry" component={EntryScreen} />
      </Stack.Navigator>
   );
};

const MainComponent = () => {
   const Tab = createBottomTabNavigator();
   return (
      <Tab.Navigator
         initialRouteName="Home"
         screenOptions={{
            headerShown: true,
            tabBarStyle: styles.tabs,
            tabBarLabelStyle: styles.tabText,
            tabBarIconStyle: styles.tabIcon,
            headerStyle: styles.tabHeaderBg,
            headerTintColor: "#000080",
            tabBarActiveTintColor: "#e91e63",
            tabBarInactiveTintColor: "#636363",
         }}
      >
         <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
               tabBarIcon: ({ color, size }) => (
                  <Icon source="home" color={color} size={size} />
               ),
            }}
         />
         <Tab.Screen
            name="Entries"
            component={EntriesNavigator}
            options={{
               tabBarIcon: ({ color, size }) => (
                  <Icon source="archive" color={color} size={size} />
               ),
            }}
         />
         <Tab.Screen
            name="New Entry"
            options={{
               tabBarIcon: ({ color, size }) => (
                  <Icon source="notebook-edit" color={color} size={size} />
               ),
            }}
            component={NewEntryScreen}
            home={HomeScreen}
         />
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
