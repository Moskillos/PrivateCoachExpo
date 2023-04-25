import { StyleSheet, View, Text, Pressable } from "react-native";
import { useSelector } from "react-redux";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons';

export const CalorieWidget = () => {
    const giorni = useSelector(state => state.diary.giorni) 
    const navigation = useNavigation()

    const currentDate = `${new Date().getFullYear()}-${new Date().getMonth() +1}-${new Date().getDate()}`
    const todayEnergy = giorni?.filter(giorno => giorno.date === currentDate)
    
    let initialKcalExpenses = 0
    let initialKcalAssumed = 0


    if(giorni.length !== 0){
       for(const esercizio of todayEnergy[0].esercizi){
    initialKcalAssumed += +esercizio.kcal
   }
   
    for(const kcal of todayEnergy[0].nutrienti){
    initialKcalExpenses += +kcal.ENERC_KCAL
    } 
    }   

    const handleEnergy = () => {
        navigation.navigate('HandleEnergyPage')
    }

    return (
       
        <Pressable style={styles.container} onPress={handleEnergy}>
            <View style={styles.widgetContainer}>
                <Ionicons name="flame" size={40} color="red" />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Calorie </Text>
                    <Text style={styles.text}>{initialKcalAssumed ? initialKcalAssumed.toFixed(2) : 0}</Text>
                </View>                
            </View>
            <View style={styles.widgetContainer}>
            <MaterialIcons name="fitness-center" size={40} color="white" />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Esercizio</Text>
                    <Text style={styles.text}>{initialKcalExpenses ? initialKcalExpenses : 0}</Text>
                </View>                
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        borderRadius: 20,
        padding: 10
    },
    widgetContainer: {
        flexDirection: 'row'
    },
    textContainer: {
        marginHorizontal: 10
    },
    text: {
        color: 'white',
        fontSize: 18
    }
})