import { configureStore } from "@reduxjs/toolkit";
import boardsSlice from "./boardsSlice";

// Configuring the Redux store with the boards slice as the reducer
const store = configureStore({
  reducer: {
    boards: boardsSlice.reducer,
  }
})

export default store
