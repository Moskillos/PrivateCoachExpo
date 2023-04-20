import { Pressable, StyleSheet, Text } from "react-native"

export const MealSquare = ({meal, onPress}) => {
    const backgroundColorStyle = () => {
       return {
        backgroundColor: meal.color,
        flex: 1,
        margin: 16,
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    }
}
    return (
        <Pressable style={backgroundColorStyle} onPress={onPress}>
            <Text style={styles.text}>{meal.title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    text:{
       color: 'white',
       fontSize: 20
    }
})