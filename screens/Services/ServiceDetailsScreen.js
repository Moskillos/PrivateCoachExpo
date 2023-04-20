import { StyleSheet, View } from "react-native"
import ServiceDetailCard from "../../components/card/ServiceDetailCard"
import * as Linking from 'expo-linking';

const ServiceDetailsScreen = ({route, navigation}) => {
    const service = route.params.service; 
    
    const urlGoHerbalife = 'https://lightwas.goherbalife.com/Catalog/Home/Index/it-IT';
    const urlWiki = 'https://en.wikipedia.org/wiki/Herbalife'

    const handleNavigation = (servTitle) => {
        
        switch(servTitle){
            case 'Shop': 
                Linking.openURL(urlGoHerbalife);
                break;
            case 'Marchio': 
                Linking.openURL(urlWiki);
                break; 
            case 'Consulenza Informativa': 
                Linking.openURL(urlWiki);
                break;             
            case 'Scheda Personalizzata':
            case 'Private Coach':
            case 'Consulenza Telefonica': 
                navigation.navigate('PersonalTrainerServices', {servTitle: servTitle});
                break;   
            default: 
            navigation.navigate(servTitle)         
        }
    }

    

    const pgService = service.map((service) => {
        return <ServiceDetailCard key={service.id} title={service.title} image={service.image} onPress={handleNavigation.bind(this, service.title)}/>
    })

    return (
        <View style={styles.container}>
            {pgService}
        </View>
    )
}


export default ServiceDetailsScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center'
    }
})