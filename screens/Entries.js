import { ScrollView, StyleSheet, Text, View } from "react-native";
import { selectAllEntries } from "../redux/entrySlice";
import { useSelector } from "react-redux";

const EntriesScreen = ({ navigation }) => {
   const entries = useSelector(selectAllEntries);
   return (
      <ScrollView>
         <View style={styles.container}>
            {entries.map((entry) => {
               return (
                  <View key={entry.id}>
                     <Text
                        onPress={() => navigation.navigate("Entry", { entry })}
                        style={styles.titleText}
                     >
                        {entry.event}
                     </Text>
                     <Text style={styles.dateText}>{entry.date}</Text>
                  </View>
               );
            })}
            <Text></Text>
         </View>
      </ScrollView>
   );
};
export default EntriesScreen;

const styles = StyleSheet.create({
   titleText: {
      color: "#000080",
      fontSize: 24,
      fontWeight: "bold",
      paddingBottom: 5,
   },
   dateText: {
      fontSize: 15,
      paddingBottom: 20,
   },
   container: {
      padding: 20,
   },
});
