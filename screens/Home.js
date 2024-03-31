import { StyleSheet, View } from "react-native";
import { selectLatestEntry } from "../redux/entrySlice";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Button, Text, Banner } from "react-native-paper";
import { useState } from "react";

const HomeScreen = ({ route, msg }) => {
   const entry = useSelector(selectLatestEntry);
   const navigation = useNavigation();

   return (
      <View style={styles.container}>
         <Text variant="labelSmall" style={styles.titleText}>
            Your last entry was...
         </Text>
         <Text
            style={styles.entryText}
            onPress={() =>
               navigation.navigate("Entries", {
                  screen: "Entry",
                  params: { entry },
               })
            }
         >
            {entry.event}
         </Text>
         <Text style={styles.dateText}>on {entry.date}</Text>
         <Button
            style={styles.container}
            mode="contained"
            icon="pencil"
            onPress={() => {
               navigation.navigate("New Entry");
            }}
         >
            Log New Entry
         </Button>
      </View>
   );
};
const styles = StyleSheet.create({
   titleText: {
      color: "#000080",
      fontSize: 50,
      fontWeight: "bold",
      paddingBottom: 5,
   },
   entryText: {
      color: "#000080",
      fontSize: 30,
      fontWeight: "bold",
      paddingBottom: 5,
   },
   dateText: {
      fontSize: 20,
      paddingBottom: 20,
   },
   container: {
      padding: 20,
   },
});
export default HomeScreen;
