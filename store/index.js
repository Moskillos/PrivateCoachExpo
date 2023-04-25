import { configureStore } from "@reduxjs/toolkit";
import diarySlice from "./diary-slice";
import serviceSlice from "./service-slice";
import settingsSlice from "./settings-slice";
import timerSlice from "./timer-slice";
import userSlice from "./user-slice";


const store = configureStore({
    reducer: {
        user: userSlice.reducer, 
        service: serviceSlice.reducer,      
        settings: settingsSlice.reducer,
        timer: timerSlice.reducer,
        diary: diarySlice.reducer
    }
})

export default store