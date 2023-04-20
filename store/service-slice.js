import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    servizi: [],

};

const serviceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {
        addService(state, action){
            const title = action.payload.title;
            const subscription = action.payload.subscription;

            state.servizi.push({
                title,
                subscription
            })
        }
    }
});

export const serviceSliceActions = serviceSlice.actions
export default serviceSlice