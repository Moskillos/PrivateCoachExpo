import {  StyleSheet, Text, View, Dimensions } from "react-native"
import { Icon } from 'react-native-elements'

const FirstPage= () => {
    return <View style={styles.container}>
        <View style={styles.sloganContainer}>
            <Text style={styles.slogan}>
            Il tuo Personal Trainer tascabile
        </Text>
        </View>
        <View>
            <Icon name='east' color={'white'} size={70}/>
        </View>
        
    </View>
}

export default FirstPage

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,       
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 1,
        
    },
    sloganContainer: {
       
       paddingBottom: 60
    },
    slogan: {
        color: 'white',        
        fontSize: 25,
        fontWeight: 600,        
        padding: 10,
        opacity: 0.7,
        backgroundColor: 'black'
    },
    info: {
        marginBottom: 60,        
        fontSize: 25,
        backgroundColor: 'white',
        opacity: 0.5
    }
})