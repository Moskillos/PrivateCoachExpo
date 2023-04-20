import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    open: false
};

const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        openSettings(state){
            state.open = true
        },
        closeSettings(state) {
            state.open = false
        }
        }
    
});

export const settingsSliceActions = settingsSlice.actions
export default settingsSlice