import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { Button, TextInput, ToggleButton, Text } from "react-native-paper";
import DateTimePicker from "react-native-ui-datepicker";
import dayjs from "dayjs";

const NewEntryScreen = () => {
   const [text, setText] = useState("");
   const [value, setValue] = useState("left");
   const [date, setDate] = useState(dayjs());
   const [datePicker, setDatePicker] = useState(false);
   const ShowDate = () => {
      if (datePicker) {
         return (
            <DateTimePicker
               mode="single"
               date={date}
               onChange={(params) => setDate(params.date)}
               setDatePicker
            />
         );
      }
   };

   return (
      <View style={styles.container}>
         <Text variant="titleLarge">Date</Text>
         <Text variant="headlineLarge">{date.toString()}</Text>
         <ShowDate />
         <View style={styles.container}>
            <Button
               icon="calendar"
               mode="contained"
               onPress={() => setDatePicker(!datePicker)}
            >
               Set Date
            </Button>
         </View>

         <TextInput
            label="Event"
            value={text}
            onChangeText={(text) => setText(text)}
         />
         <View style={styles.emoRow}>
            <Text variant="titleLarge">Select emoji</Text>
            <ToggleButton.Row
               onValueChange={(value) => setValue(value)}
               value={value}
               style={styles.emoIcon}
            >
               <ToggleButton
                  style={styles.emoIcon}
                  size={60}
                  icon="spade"
                  value="spade"
               />
               <ToggleButton
                  style={styles.emoIcon}
                  size={60}
                  icon="star"
                  value="star"
               />
               <ToggleButton
                  style={styles.emoIcon}
                  size={60}
                  icon="heart"
                  value="heart"
               />
               <ToggleButton
                  style={styles.emoIcon}
                  size={60}
                  icon="book"
                  value="book"
               />
            </ToggleButton.Row>
         </View>

         <TextInput
            label="Nonesense"
            value={text}
            onChangeText={(text) => setText(text)}
         />
         <View style={styles.container}>
            <Button mode="contained" onPress={() => console.log("Pressed")}>
               Log Entry
            </Button>
         </View>
      </View>
   );
};
export default NewEntryScreen;

const styles = StyleSheet.create({
   container: {
      padding: 20,
   },
   emoRow: {
      paddingTop: 20,
      display: "flex",
      height: 150,
   },
   emoIcon: {
      padding: 5,
      height: 100,
      flex: 1,
   },
});
