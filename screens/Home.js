import { StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
   return (
      <View style={styles.container}>
         <Text>Home Screen</Text>
         <Text>Open up App.js to start working on your app!</Text>
      </View>
   );
};
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
export default HomeScreen;
