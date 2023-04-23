import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    status: 'idle',
    error: null,
    items: {
      peso: null,
      metBasale: null,
      giorni: [
        
      ]
    }
};

export const fetchDiary = createAsyncThunk("diary/fetchDiary", async () => {
    try {
      const serializedState = await AsyncStorage.getItem('diary');
      console.log(serializedState)
      if (serializedState !== null) {
        return JSON.parse(serializedState);
      }
      return initialState;
    } catch (error) {
      console.log(error);
      throw error;
    }
  })

const diarySlice = createSlice({
    name: 'diary',
    initialState,
    reducers: {
        addDay(state, action){
            console.log(action.payload)
        },
        addBody(state, action){
          
            const obj = {
              date: `${new Date().getFullYear()}-${new Date().getMonth() +1}-${new Date().getDate()}`,
              esercizi: [
                  action.payload
                ]
              
            }

            if(state.items.giorni.length === 0){
              console.log('1', obj)
              state.items.giorni.push(obj)
            } else {
              for(let giorno of state.items.giorni){
              if(giorno.date === obj.date){
                console.log('2', obj)

                giorno.esercizi.push(action.payload)
               };
              if(giorno.date !== obj.date){
                console.log('3', obj)

                state.items.giorni.push(obj)
              }
              }
            } 

          saveStateToStorage(state.items)
        },
        setPeso(state, action){
          state.items.peso = action.payload,
          state.items.metBasale = action.payload * 24
          saveStateToStorage(state)
        },
         
        addNutrients(state, action){
          const currentDate = `${new Date().getFullYear()}-${new Date().getMonth() +1}-${new Date().getDate()}`
          const obj = {
            date: currentDate,
            nutrienti: {
              name : action.payload.name,
              kcal : action.payload.ENERC_KCAL,
              proteine : action.payload.PROCNT,
              grassi : action.payload.FAT,
              fibre :  action.payload.FIBT,
              carboidrati : action.payload.CHOCDF,
            }
          }
          if(state.items.giorni.length === 0){
            state.items.giorni.push(obj)
          } else {
            for(let giorno of state.items.giorni){
            if(giorno.date === obj.date){
              giorno.nutrienti.push(action.payload)
             };
            if(giorno.date !== obj.date){
              state.items.giorni.push(obj)
            }
            }
          }          
          saveStateToStorage(state.items)
      },        
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchDiary.pending, (state) => {
            state.status = "loading";
          })
        .addCase(fetchDiary.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.items = action.payload;
          })
        .addCase(fetchDiary.rejected, (state, action) => {
            state.status = "failed";
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