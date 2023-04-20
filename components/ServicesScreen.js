import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native"
import ServiceCard from "../components/card/ServiceCard"
import {services} from "../utils/data"


const ServicesScreen = () => {  
    const navigation = useNavigation()     
    const pgServiceHandler = (service) => { 

       navigation.navigate('ServiceDetails', {service: service})
    }  

    const serviceRender = services.map((service) => {
            return <ServiceCard key={service.id} text={service.title} nav={navigation} image={service.image} onPress={pgServiceHandler.bind(this, service.service)}/>
        })
    

    return <View style={styles.container}>
        <View style={styles.boxService}>
             {serviceRender}
        </View>
       
    </View>
}

export default ServicesScreen

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.7,
        backgroundColor: 'black'
    },
    boxService: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})