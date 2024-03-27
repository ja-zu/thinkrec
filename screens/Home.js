import { StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
   return (
      <View style={styles.container}>
         <Text>Home Screen</Text>
         <Text>Open up App.js to start working on your app!</Text>
      </View>
   );
};
export default HomeScreen;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff",
   },
});
