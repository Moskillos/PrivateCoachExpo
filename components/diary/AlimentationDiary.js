import { StyleSheet, Text, View } from "react-native"
import { timeMeal } from "../../utils/meals"
import { MealList } from "./MealList"

export const AlimentationDiary = () => {
    return (
        <View>
            {timeMeal.map((t) => {
            return <MealList time={t}/>
            })}
            <View style={styles.exerciseTab}>
                <Text>Esercizi</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    exerciseTab: {
        width: '100%',
        height: 50,
        backgroundColor: 'yellow'
    }
})
