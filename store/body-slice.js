import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
    status: 'idle',
    error: null,
    items: {
        
        peso: null,
        metBasale: null,
        esercizio: []  
        }
    
    
};

export const fetchBody = createAsyncThunk("body/fetchBody", async () => {
    try {
      const serializedState = await AsyncStorage.getItem('body');
      if (serializedState !== null) {
        return JSON.parse(serializedState);
      }
      return initialState;
    } catch (error) {
      console.log(error);
      throw error;
    }
  });

const bodySlice = createSlice({
    name: 'body',
    initialState,
    reducers: {
        addEsercizio(state, action){            
            const kcal = action.payload.kcal;
            const durata = action.payload.durata;
            const descrizione = action.payload.descrizione;

            state.items.esercizio.push({
                kcal,
                durata,
                descrizione
            })
            saveStateToStorage(state)
        },
        setPeso(state, action){
            state.items.peso = action.payload,
            state.items.metBasale = action.payload * 24
            saveStateToStorage(state)
        }
        
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchBody.pending, (state) => {
            state.status = "loading";
          })
          .addCase(fetchBody.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.items = action.payload.items;
          })
          .addCase(fetchBody.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
          })
          
      }
});

const saveStateToStorage = async (state) => {
    try {
      const serializedState = JSON.stringify(state);
      await AsyncStorage.setItem('body', serializedState);
    } catch (error) {
      console.log(error);
    }
  };

export const bodySliceActions = bodySlice.actions
export default bodySlice