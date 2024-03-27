import { StyleSheet, Text, View } from "react-native";
import { selectAllEntries } from "../redux/entrySlice";
import { useSelector } from "react-redux";

const EntriesScreen = () => {
   const entries = useSelector(selectAllEntries);
   return (
      <View style={styles.container}>
         <View>
            {entries.map((entry) => {
               return (
                  <>
                     <Text style={styles.titleText}>{entry.title}</Text>
                     <Text style={styles.dateText}>{entry.date}</Text>
                  </>
               );
            })}
         </View>
         <Text></Text>
      </View>
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
      color: "light gray",
      paddingBottom: 20,
   },
   container: {
      padding: 20,
   },
});
