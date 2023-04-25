import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
  giorni: [],
  metBasale: null,
  peso: null
}

export const fetchDiary = createAsyncThunk("diary/fetchDiary", async () => {
    try {
      const serializedState = await AsyncStorage.getItem('diary'); 
      if (serializedState !== null) {
        return JSON.parse(serializedState);
      } 
    } catch (error) {
      console.log(error);
      throw error;
    }
  })

const diarySlice = createSlice({
    name: 'diary',
    initialState,
    reducers: {
        addBody(state, action){
          
            const obj = {
              date: `${new Date().getFullYear()}-${new Date().getMonth() +1}-${new Date().getDate()}`,
              esercizi: [
                  action.payload
                ],
              nutrienti: []
            }

            if(state.giorni.length === 0){
              state.giorni.push(obj)
            } else {
              for(let giorno of state.giorni){
              if(giorno.date === obj.date){

                giorno.esercizi.push(action.payload)
               };
              if(giorno.date !== obj.date){

                state.giorni.push(obj)
              }
              }
            } 

          saveStateToStorage(state)
        },
        setPeso(state, action){
          state.peso = action.payload,
          state.metBasale = action.payload * 24
          saveStateToStorage(state)
        },
         
        addNutrients(state, action){
          const currentDate = `${new Date().getFullYear()}-${new Date().getMonth() +1}-${new Date().getDate()}`
          const obj = {
            date: currentDate,
            nutrienti: [],
            esercizi: []
          }
          const meal = {
              name : action.payload.name,
              kcal : action.payload.ENERC_KCAL,
              proteine : action.payload.PROCNT,
              grassi : action.payload.FAT,
              fibre :  action.payload.FIBT,
              carboidrati : action.payload.CHOCDF,
          }
          obj.nutrienti.push(meal)
          if(state.giorni.length === 0){
            state.giorni.push(obj)
          } else {
            for(let giorno of state.giorni){
            if(giorno.date === obj.date){
              giorno.nutrienti.push(action.payload)
             };
            if(giorno.date !== obj.date){
              state.giorni.push(obj)
            }
            }
          }          
          saveStateToStorage(state)
      },        
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchDiary.pending, (state) => {
           
          })
        .addCase(fetchDiary.fulfilled, (state, action) => { 
            state.giorni = action.payload.giorni;
            state.metBasale = action.payload.metBasale;
            state.peso = action.payload.peso;
          })
        .addCase(fetchDiary.rejected, (state, action) => {          
            state.error = action.error.message;
          })
    }
  });

const saveStateToStorage = async (state) => {
    try {
      const serializedState = JSON.stringify(state);
      await AsyncStorage.setItem('diary', serializedState);
    } catch (error) {
      console.log(error);
    }
  };

export const diarySliceAction = diarySlice.actions
export default diarySlice