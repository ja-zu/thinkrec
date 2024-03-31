import { ScrollView, StyleSheet, View } from "react-native";
import { Card, Text, Avatar, Button } from "react-native-paper";
import { deleteEntry } from "../redux/entrySlice";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const EntryScreen = ({ route }) => {
   const navigation = useNavigation();
   const dispatch = useDispatch();
   //const timer = setTimeout(300);
   const { entry } = route.params;
   const handleEmotion = (emotion) => {
      switch (emotion) {
         case "sad":
            return "emoticon-cry";
         case "upset":
            return "emoticon-frown";
         case "angry":
            return "emoticon-angry";
         case "confused":
            return "emoticon-confused";
         default:
            break;
      }
   };
   return (
      <ScrollView>
         <Card>
            <Card.Title
               title={entry.event}
               subtitle={entry.date}
               titleNumberOfLines={3}
               titleStyle={styles.title}
               subtitleStyle={styles.subtitleText}
               left={(props) => (
                  <Avatar.Icon {...props} icon={handleEmotion(entry.emotion)} />
               )}
            />
            <Card.Content>
               <Text style={styles.titleText}>My inital thoughts...</Text>
               <Text style={styles.bodyText}>{entry.thought}</Text>
               <Text style={styles.titleText}>The emotion I felt...</Text>
               <Text style={styles.bodyText}>{entry.emotion}</Text>
               <Text style={styles.titleText}>
                  The alternative I can think...
               </Text>
               <Text style={styles.bodyText}>{entry.altThought}</Text>
            </Card.Content>
         </Card>
         <Button
            mode="contained"
            style={{ margin: 20, padding: 20 }}
            onPress={async () => {
               navigation.navigate("Entries", { screen: "All Entries" });
               dispatch(deleteEntry(entry.id));
            }}
         >
            Delete Entry
         </Button>
      </ScrollView>
   );
};
export default EntryScreen;

const styles = StyleSheet.create({
   titleText: {
      color: "#000080",
      fontSize: 24,
      fontWeight: "bold",
      paddingBottom: 5,
   },
   subtitleText: {
      fontSize: 20,
      paddingBottom: 20,
   },
   bodyText: {
      fontSize: 20,
      paddingBottom: 20,
   },
   container: {
      padding: 20,
   },
   title: {
      paddingTop: 15,
      paddingBottom: 10,
      lineHeight: 30,
      fontSize: 30,
      fontWeight: "bold",
      color: "#000080",
   },
});
