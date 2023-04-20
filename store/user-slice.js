import {createSlice} from '@reduxjs/toolkit';

const userProperty= {
    name: '',
    surname: '',
    email: '',
    password: '',
    registrationDate: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState: userProperty,
    reducers: {
        logIn(state, action){
            state.name = action.payload.name,
            state.surname = action.payload.surname,
            state.email = action.payload.email,
            state.password = action.payload.password
            state.registrationDate = action.payload.registrationDate
        },
        registration(state, action){

        }
    }
}) 

export const userSliceActions = userSlice.actions
export default userSlice