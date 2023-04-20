import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    timer: [
        {
            title: 'Boxing Timer',
            workTime: 180,
            restTime: 60
        },
        {
            title: 'Tabata 10 x 10',
            workTime: 10,
            restTime: 10
        },
        {
            title: 'Tabata 20 x 20',
            workTime: 20,
            restTime: 20
        },
    ]
};

const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        addTimer(state, action){
            state.timer.push(action.payload)
        },
        removeTimer(state, action){
            state.timer.splice(action.payload, 1)
        }
    }
});

export const timerSliceActions = timerSlice.actions
export default timerSlice