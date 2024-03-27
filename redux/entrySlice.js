import { createSlice } from "@reduxjs/toolkit";
import allEntries from "../shared/allEntries";

export const entriesSlice = createSlice({
   name: "entries",
   initialState: {
      entriesArray: allEntries,
   },
   reducers: {
      addEntry: (state, action) => {
         state.entriesArray.push(action.payload);
         console.log("Added entry");
      },
      deleteEntry: (state, action) => {
         () => {};
         return {
            entriesArray: [
               ...state.entriesArray.filter((m) => m.id !== action.payload),
            ],
         };
      },
   },
});

export const entriesReducer = entriesSlice.reducer;
export const { addEntry, deleteEntry } = entriesSlice.actions;

export const selectAllEntries = (state) => {
   return state.entries.entriesArray;
};

export const selectLatestEntry = (state) => {
   return state.entries.entriesArray[state.entries.entriesArray.length - 1];
};

export const selectEntryId = (id) => (state) => {
   return state.entries.entriesArray.find((entry) => entry.id === id);
};

export const selectYears = (entries) => {
   const years = entries.reduce((acc, val) => {
      const date = val.date[0] + val.date[1] + val.date[2] + val.date[3];
      const dup = acc.some((dateM) => {
         return dateM === date;
      });
      !dup && acc.push(date);
      return acc;
   }, []);
   return years;
};

export const selectEmotions = (entries) => {
   const emotions = entries.reduce((acc, val) => {
      const emotion = val.emotionTag;
      const dup = acc.some((dateM) => {
         return dateM === emotion;
      });
      !dup && acc.push(emotion);
      return acc;
   }, []);
   return emotions;
};
