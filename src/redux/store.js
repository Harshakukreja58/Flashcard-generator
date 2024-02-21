import { configureStore } from "@reduxjs/toolkit";
import flashcardReducer from "./flashcardSlice";

// The global store creared for the application, which has Reducers
const store = configureStore({
  reducer: {
    flashcard: flashcardReducer,
  },
});

export default store;
