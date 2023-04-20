import {  Pressable, Text, StyleSheet } from "react-native"
import { globalColor } from "../../utils/globalColor"
import * as MailComposer from "expo-mail-composer"

export const BoxeCard = ({gym, giorni, orari}) => {
    
    const sendMail = () => {
        MailComposer.composeAsync({
            recipients: ['moschilloantonio@libero.it'],
            subject: 'informazioni corsi pugilato'
        })
    }

    return (
        <Pressable onPress={sendMail} style={styles.container}>
            <Text style={styles.gymText}>{gym}</Text>           
                    <Text style={styles.text}>{giorni}</Text>                
                    <Text style={styles.text}>{orari}</Text>              
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container:{
        minWidth: 300,
        borderWidth: 1,
        borderColor: globalColor.border,
        borderRadius: 20,
        elevation: 10,
        backgroundColor: 'red',
        marginVertical: 10,
        padding: 20,
        alignItems: 'center'
    },
    gymText: {
        fontSize: 30,
        fontWeight: 800,
        marginVertical: 10
    },
    text: {
        fontSize: 20
    }
    
    
})