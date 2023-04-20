import { StyleSheet, Text, View } from "react-native"
import { globalColor } from "../utils/globalColor"

const BuyCard = ({servizio}) => {
    const servizioScelto = servizio.service.serviceChosen
    const abbonamento = servizio.service.abbonamento

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hai scelto il servizio</Text>
            <Text style={styles.text}>{servizioScelto}</Text>
            <Text style={styles.text}>{abbonamento}</Text>
        </View>
    )
}

export default BuyCard

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: globalColor.secondaryBK,
        borderColor: globalColor.border,
        borderWidth: 1,
        borderRadius: 10,
        padding: 20,
        elevation:90
    },
    text: {
        color: 'white',
        fontSize: 25
    }
})