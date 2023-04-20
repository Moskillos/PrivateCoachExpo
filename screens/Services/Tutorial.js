import { StyleSheet } from "react-native"
import { View, Text } from "react-native"

const Tutorial = () => {
    return <View style={styles.container}>
        <Text>Resta con noi</Text>
    </View>
}

export default Tutorial

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})