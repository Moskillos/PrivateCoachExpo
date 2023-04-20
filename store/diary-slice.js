import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    status: 'idle',
    error: null,
    items: []
};

const diarySlice = createSlice({
    name: 'diary',
    initialState,
    reducers: {
        addDay(state, action){
            console.log(action.payload)
        },
        addBody(state, action){
            const dataCorrente = new Date()
            const data = `${dataCorrente.getDate()}/${dataCorrente.getMonth() + 1}/${dataCorrente.getFullYear()}`
            state.items = [{
                data: data,
                body: action.payload
            }]
        }        
    },
    
});

export const diarySliceAction = diarySlice.actions
export default diarySlice