import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native"
import {  useDispatch, useSelector } from "react-redux";
import { diarySliceAction } from "../../store/diary-slice";

export const EnergyPianification = () => {  
    const nutrienti = useSelector(state => state.nutrienti.items) 
    const kcalConsumed = useSelector(state => state.body.items.esercizio)
    const bm = useSelector(state => state.body.items.metBasale)
    const bodyState = useSelector(state => state.body.items)
    const dispatch = useDispatch()
    const currentDate = new Date()
    
    useEffect(() => {        
        setInterval(() => {
                if(currentDate.getHours() === 0 && currentDate.getMinutes === 0){
                    const date = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`
                    dispatch(diarySliceAction.addDay({
                        date: date,
                        body: bodyState,
                        nutrienti: nutrienti
                    }))
                }           
        }, 60000)
    }, []);

    let totalKcalConsumed = 0
    let totalKcal = 0
    
    for (const esercizio of kcalConsumed){
        totalKcalConsumed += +esercizio.kcal
    }
    for(const alimento of nutrienti){
        totalKcal += alimento.kcal
    }

    const calorieDaily = bm + totalKcal - totalKcalConsumed

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>M. B.</Text>
                <Text style={styles.text}>{bm ? bm : '-'}</Text>
            </View>
            <View>
                <Text style={styles.text}>Alimenti</Text>
                <Text style={styles.text}>{totalKcal ? totalKcal.toFixed(2) : '-'}</Text>
            </View>
            <View>
                <Text style={styles.text}>Esercizio</Text>
                <Text style={styles.text}>{totalKcalConsumed ? totalKcalConsumed.toFixed(2) : '-'}</Text>
            </View>
            <View>
                <Text style={styles.text}>Risultato</Text>
                <Text style={styles.text}>{calorieDaily ? calorieDaily.toFixed(2) : '-'}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 2,
        borderColor: 'white',
        paddingHorizontal: 20,
        borderRadius: 20,
        paddingVertical: 30,
        marginBottom: 20
    },
    textHandleEnergy:{
        color: 'white',
        marginVertical: 20,        
        textAlign:'center'
    },
    text: {
        color: 'white',
    }
})