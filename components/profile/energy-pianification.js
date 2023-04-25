import { StyleSheet, Text, View } from "react-native"
import {  useDispatch, useSelector } from "react-redux";

export const EnergyPianification = () => {
    const giorni = useSelector(state => state.diary.giorni)
    const bm = useSelector(state => state.diary.metBasale)
    
    let nutrienti
    let kcalConsumed
    let totalKcalConsumed = 0
    let totalKcal = 0

    const currentDay = `${new Date().getFullYear()}-${new Date().getMonth() +1}-${new Date().getDate()}`

    if(giorni.lenght !== 0){
        for(let giorno of giorni){
        if(giorno.date === currentDay){
            kcalConsumed = giorno.esercizi
            nutrienti = giorno.nutrienti
        }

        for (const esercizio of kcalConsumed){
        totalKcalConsumed += +esercizio.kcal
    }    

        for(const alimento of nutrienti){
        totalKcal += +alimento.ENERC_KCAL       
    }
    }
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