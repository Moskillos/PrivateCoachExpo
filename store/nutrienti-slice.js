import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
    items: [
        {
            name: 0,
            kcal: 0,
            proteine : 0,
            grassi: 0,
            fibre: 0,
            carboidrati: 0
        }
    ],
    status: 'idle',
    error: null,
}

export const fetchNutrients = createAsyncThunk("nutrienti/fetchNutrients", async () => {
    try {
      const serializedState = await AsyncStorage.getItem('nutrients');
      if (serializedState !== null) {
        return JSON.parse(serializedState);
      }
      return initialState;
    } catch (error) {
      console.log(error);
      throw error;
    }
  });
  

const nutrientiSlice = createSlice({
    name: 'nutrienti',
    initialState,
    reducers: {
        addNutrients(state, action){
            const name = action.payload.name
            const kcal = action.payload.ENERC_KCAL;
            const proteine = action.payload.PROCNT;
            const grassi = action.payload.FAT;
            const fibre =  action.payload.FIBT;
            const carboidrati = action.payload.CHOCDF;

            state.items.push({
                name,
                kcal,
                proteine,
                grassi,
                fibre,
                carboidrati
            })
            saveStateToStorage(state)
        },
        getStorageNutrients(state, action){
            state = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchNutrients.pending, (state) => {
            state.status = "loading";
          })
          .addCase(fetchNutrients.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.items = action.payload.items;
          })
          .addCase(fetchNutrients.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
          })
          
      }
    
});

const saveStateToStorage = async (state) => {
    try {
      const serializedState = JSON.stringify(state);
      await AsyncStorage.setItem('nutrients', serializedState);
    } catch (error) {
      console.log(error);
    }
  };

export const nutrientiSliceActions = nutrientiSlice.actions
export default nutrientiSlice