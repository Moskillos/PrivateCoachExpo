import {  Dimensions, Image, StyleSheet, Text, View } from "react-native"

const ThirdPage= () => {
    return <View style={styles.container}>
        <View style={styles.section}>
            <Text style={styles.text}>Impara il pugilato</Text>
            <Image source={require('../../assets/fury.jpg')} style={styles.imgBoxe}/>
        </View>
        <View style={styles.section}>
        <Text style={styles.text}>Integratori Alimentari</Text>
            <Image source={require('../../assets/herb.jpg')} style={styles.imgIntegratori}/>
        </View>
        
    </View>
}

export default ThirdPage

const styles = StyleSheet.create({
    container: {
        width:Dimensions.get('window').width,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 1
    },
    section: {
        marginBottom: 80
    },
    imgBoxe:{
        width: 300,
        height: 250,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10
    },
    imgIntegratori:{
        width: 250,
        height: 100,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10
    },
    text: {
        color: 'white',
        fontSize: 26,
        marginBottom: 30,
        backgroundColor: 'black',
        opacity: 0.7,
        fontWeight: 700,
        padding: 5
    }
})