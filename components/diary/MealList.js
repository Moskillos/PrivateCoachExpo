import { View, Text } from "react-native"

export const MealList = ({time}) => {
    const containerStyle = {
            backgroundColor: time.color,
            width: '100%',
            height: 50
    }

    return (
        <View style={containerStyle}>
            <Text>{time.title}</Text>
        </View>
    )
}
