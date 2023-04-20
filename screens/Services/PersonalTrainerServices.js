import { View, Text, StyleSheet, Image } from "react-native"
import { personalTrainerServices } from "../../utils/data"
import { SelectList } from 'react-native-dropdown-select-list'
import { useState } from "react"
import CustomButton from "../../ui/CustomButton"

const PersonalTrainerServices = ({route, navigation}) => {
    const [selected, setSelected] = useState('');
    const servTitle = route.params.servTitle
    
    const serviceToRender = personalTrainerServices.filter(serv =>{
        return serv.title === servTitle
    })
   
    
    const abbonamenti = serviceToRender[0].abbonamenti.map((abb) => {
        return {
            key: abb.key,
            value: abb.title
        }
    })

    const selecthandler =() => {
        navigation.navigate('AnamnesiCliente', {
            serviceChosen: serviceToRender[0].title,
            abbonamento: selected
        })
    }
    
    const img = serviceToRender[0].image
    return (
        <View style={styles.container}>
        <Image source={img} style={styles.imgBoxe}/>
        <View style={styles.content}>
            <Text style={styles.description}>{serviceToRender[0].descrizione}</Text>
            {abbonamenti &&<SelectList placeholder={'Seleziona il tuo piano'} search={false} maxHeight={100} setSelected={(value) => setSelected(value)} data={abbonamenti} save='value'/>}
            <CustomButton text={'Avanti'} onPress={selecthandler} customStyle={styles.button} />
        </View>
    </View>
    )
}

export default PersonalTrainerServices

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
        backgroundColor: 'green',
        marginTop: 20
    }
})