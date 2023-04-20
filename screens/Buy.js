import { Text, View, ScrollView, StyleSheet } from "react-native"
import BuyCard from "../components/BuyCard"
import { globalColor } from "../utils/globalColor"
import { personalTrainerServices } from "../utils/data"
import CustomButton from "../ui/CustomButton"
import { useDispatch } from "react-redux"
import { serviceSliceActions } from "../store/service-slice"

const Buy = ({route, navigation}) => {   
    const dispatch = useDispatch()    
    const service = route.params
    
    const servizio = personalTrainerServices.filter((servizio) => {
        return servizio.title === service.service.serviceChosen
    })

    const abbonamento = servizio[0].abbonamenti.filter((abb) => {       
        return  abb.title === service.service.abbonamento
    })

    const benefici = abbonamento[0].benefici;
    
    const handleBuyService = () => {
        dispatch(serviceSliceActions.addService({
            title: servizio[0].title,
            subscription: abbonamento[0].title
        }));
        navigation.navigate('Profile')

    }

   const beneficiToRender = benefici?.map((bene) => {
    return <View key={bene} style={styles.beneficts}>
        <Text style={styles.benefictText}>O {bene}</Text>
    </View>
   })

   

    return <ScrollView contentContainerStyle={styles.main}>
        <View>
            <BuyCard servizio={service}/>
        </View>
        <View >
             {beneficiToRender}
        </View>
        <CustomButton text={'Acquista ora'} onPress={handleBuyService}/>
    </ScrollView>
}

export default Buy

const styles = StyleSheet.create({
    main: {
        alignItems: 'center',
        backgroundColor: globalColor.primaryBK,
        padding: 20,
    },
    beneficts: {
        width: '80%',
        alignItems: 'center'
    },
    benefictText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 10
    }
    
})