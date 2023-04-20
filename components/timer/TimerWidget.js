import { StyleSheet, Pressable, Text, View } from "react-native"
import { Entypo } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native";

export const TimerWidget = () => {
    const navigation = useNavigation()
    const openTimer = () => {
        navigation.navigate('Timer')
    }
    return (
        <Pressable style={styles.container} onPress={openTimer}>
            <Entypo name="clock" size={40} color="white" />
            <View style={styles.textContainer}>
                <Text style={styles.text}>Inizia ad allenarti</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        backgroundColor: 'black',
        padding: 20,
        padding: 20,
        flexDirection: 'row'
    },
    textContainer: {
        marginLeft: 5
    },
    text: {
        color: 'white'
    }
})