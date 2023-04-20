import { View, Text, StyleSheet, Image } from "react-native"
import { services } from "../../utils/data"
import CustomButton from "../../ui/CustomButton"
import { testoLezioniPrivate } from "../../utils/messages"

const LezioniPrivate = () => {
    const img = {
        uri: 'https://www.euroma2.it/wp-content/uploads/2021/03/Copertina_de_Carolis.jpg'
    }
    return (
        <View style={styles.container}>
        <Image source={img} style={styles.imgBoxe}/>
        <View style={styles.content}>
            <Text style={styles.description}>{testoLezioniPrivate.descrizione}</Text>
        </View>
    </View>
    )
}

export default LezioniPrivate

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20
    },
    imgBoxe: {
        width: '90%',
        height: '30%',
    },
    content: {
        marginTop: 20,
        alignItems: 'center',
        padding: 20
    },
    description: {
        fontSize: 22,
        marginBottom: 20
    },
    callToAction: {
        fontSize: 16,
        color: 'red',
        marginBottom: 30
    },
    button: {
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
        backgroundColor: 'green'
    }
})