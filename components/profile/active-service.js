import { StyleSheet, ScrollView, Text, View, FlatList, Dimensions } from "react-native"
import { useSelector } from "react-redux"
import { ServiceCard } from "./service-card"
import { LogBox } from 'react-native';
import { useEffect } from "react";

const {width} = Dimensions.get('window');
 
export const ActiveService = ({servicesProps}) => {   
    const services = useSelector(state => state.service)
    const noService = 'Non hai ancora servizi attivi'
    const activeServices = services.servizi

    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, []);

    return <ScrollView contentContainerStyle={styles.scroll} showsHorizontalScrollIndicator={false} horizontal>
           <FlatList 
             data={activeServices}
             horizontal
             showsHorizontalScrollIndicator={false}
             renderItem={(item) => <View style={styles.card}>
                <ServiceCard service={item}/>
                </View>}
             contentContainerStyle={styles.scroll}
           />            
    </ScrollView>
        
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: '100%',
    },
    card: {
        width: width,
        padding: 20,
        height: 200
    },
    scroll: {
        backgroundColor: 'white'
    },
    flatScroll: {
        flexDirection: 'row',
        width: width
    }
    
})