import { StyleSheet, View, Text, Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

export const CalorieWidget = () => {
    const nutrienti = useSelector(state => state.nutrienti.items) 
    const kcalConsumed = useSelector(state => state.body.items.esercizio)
    const navigation = useNavigation()


    let totalKcalConsumed = 0
    let totalKcal = 0
    
    for (const esercizio of kcalConsumed){
        totalKcalConsumed += +esercizio.kcal
    }
    for(const alimento of nutrienti){
        totalKcal += alimento.kcal
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
                    <Text style={styles.text}>{totalKcal ? totalKcal.toFixed(2) : 0}</Text>
                </View>                
            </View>
            <View style={styles.widgetContainer}>
            <MaterialIcons name="fitness-center" size={40} color="white" />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Esercizio</Text>
                    <Text style={styles.text}>{totalKcalConsumed ? totalKcalConsumed : 0}</Text>
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