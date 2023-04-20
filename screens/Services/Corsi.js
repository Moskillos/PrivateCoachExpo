import { Image, StyleSheet, ScrollView, View, Text } from "react-native"
import { testoCorsi } from "../../utils/messages"
import { BoxeCard } from "../../components/card/BoxeCard"

const Corsi = () => {
    const img = {uri: 'https://media.cdnws.com/_i/43488/16536/26/36/ring-de-boxe-competition.jpeg'};

    return <ScrollView contentContainerStyle={styles.container}>
        <Image source={img} style={styles.imgBoxe}/>
        <View style={styles.content}>
            <Text style={styles.description}>{testoCorsi.descrizione}</Text>
            <BoxeCard gym={'Pre-pugilistica Muhammad Alì'} giorni={'Martedì - Giovedì'} orari={'19:00/20:00 - 20:00/21:00'}/>
            <BoxeCard gym={'ASD California Gym'} giorni={'Lunedì - Mercoledì - Venerdì'} orari={'19:00 - 20:00'}/>
            
        </View>
    </ScrollView>
}

export default Corsi

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 20
    },
    imgBoxe: {
        width: '90%',
        height: 200,
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