import { ScrollView, StyleSheet, View } from "react-native";
import { useState } from "react";
import {
   Button,
   TextInput,
   ToggleButton,
   Text,
   HelperText,
} from "react-native-paper";
import { useDispatch } from "react-redux";
import { addEntry } from "../redux/entrySlice";
import DateTimePicker from "react-native-ui-datepicker";
import dayjs from "dayjs";
import * as Animatable from "react-native-animatable";

const NewEntryScreen = ({ home }) => {
   const customParseFormat = require("dayjs/plugin/customParseFormat");
   dayjs.extend(customParseFormat);

   const reset = () => {
      setId(Date.now().toString(36));
      setDate(dayjs());
      setEvent("");
      setThought("");
      setEmotion("");
      setAltThought("");
      setIsSubmitting(false);
   };

   const submit = () => {
      handleError(event);
      if (!isSubmitting && !userError) {
         setIsSubmitting(true);
         console.log("event " + event);
         dispatch(
            addEntry({
               id: id,
               date: dayjs(date).format("MM/DD/YYYY"),
               event: event,
               thought: thought,
               emotion: emotion,
               altThought: altThought,
            })
         );
         reset();
      }
   };

   const handleError = (text) => {
      if (text.length < 0) {
         setUserError(true);
      }
   };

   const [datePicker, setDatePicker] = useState(false);
   const ShowDate = () => {
      if (datePicker) {
         return (
            <Animatable.View animation="fadeInDown">
               <DateTimePicker
                  mode="single"
                  date={date}
                  onChange={(params) => setDate(params.date)}
                  setDatePicker
               />
            </Animatable.View>
         );
      }
   };
   const [id, setId] = useState(Date.now().toString(36));
   const [event, setEvent] = useState("");
   const [emotion, setEmotion] = useState("");
   const [date, setDate] = useState(dayjs());
   const [thought, setThought] = useState("");
   const [altThought, setAltThought] = useState("");

   const dispatch = useDispatch();
   const [isSubmitting, setIsSubmitting] = useState(false);

   const [userError, setUserError] = useState(false);

   return (
      <ScrollView>
         <View style={styles.containerEntry}>
            <Text style={styles.titleText}>Date</Text>
            <Text style={styles.bodyText}>
               {dayjs(date).format("MM/DD/YYYY")}
            </Text>
            <ShowDate />

            <Animatable.View animation="fadeInDown" style={styles.container}>
               <Button
                  style={styles.container}
                  icon="calendar"
                  mode="contained"
                  onPress={() => setDatePicker(!datePicker)}
               >
                  Set Date
               </Button>
            </Animatable.View>

            <Text style={styles.titleText}>
               The event that caused negative emotions
            </Text>
            <TextInput
               label="Enter the event"
               value={event}
               multiline={true}
               numberOfLines={5}
               style={styles.textInput}
               onChangeText={(event) => {
                  setEvent(event);
               }}
               error={userError}
            />
            <HelperText type="error" visible={userError}>
               Fill in the event
            </HelperText>
            <Text style={styles.titleText}>
               Log your initial thoughts about the situation
            </Text>
            <TextInput
               label="Log thoughts"
               value={thought}
               multiline={true}
               numberOfLines={5}
               style={styles.textInput}
               onChangeText={(thought) => setThought(thought)}
            />
            <View style={styles.emoRow}>
               <Text style={styles.titleText}>
                  What did you feel in the situation?
               </Text>
               <ToggleButton.Row
                  onValueChange={(emotion) => setEmotion(emotion)}
                  value={emotion}
                  style={styles.emoIcon}
               >
                  <ToggleButton
                     style={styles.emoIcon}
                     size={60}
                     icon="emoticon-angry"
                     value="angry"
                     iconColor="red"
                  />
                  <ToggleButton
                     style={styles.emoIcon}
                     size={60}
                     icon="emoticon-confused"
                     value="confused"
                     iconColor="orange"
                  />
                  <ToggleButton
                     style={styles.emoIcon}
                     size={60}
                     icon="emoticon-cry"
                     value="sad"
                     iconColor="blue"
                  />
                  <ToggleButton
                     style={styles.emoIcon}
                     size={60}
                     icon="emoticon-frown"
                     value="upset"
                     iconColor="purple"
                  />
               </ToggleButton.Row>
            </View>
            <Text style={styles.titleText}>Challenge your thoughts</Text>
            <TextInput
               value={altThought}
               label="Think of another conclusion"
               multiline={true}
               numberOfLines={5}
               style={styles.textInput}
               onChangeText={(altThought) => setAltThought(altThought)}
            />
            <View style={styles.container}>
               <Button
                  mode="contained"
                  style={styles.container}
                  onPress={() => submit()}
               >
                  Log Entry
               </Button>
            </View>
         </View>
      </ScrollView>
   );
};

export default NewEntryScreen;

const styles = StyleSheet.create({
   container: {
      padding: 20,
   },
   containerEntry: {
      paddingTop: 20,
      paddingBottom: 80,
      paddingRight: 20,
      paddingLeft: 20,
   },
   emoRow: {
      paddingTop: 20,
      marginBottom: 20,
      display: "flex",
      height: 150,
   },
   emoIcon: {
      padding: 5,
      height: 100,
      flex: 1,
      color: "#000080",
   },
   textInput: {
      height: 90,
      marginBottom: 10,
      fontSize: 20,
   },
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
});
