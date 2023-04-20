import {  Dimensions, Image, StyleSheet, Text, View } from "react-native"

const SecondPage= () => {
    return <View style={styles.container}>
        <View style={styles.section}>
            <Text style={styles.text}>Allenamenti Personalizzati</Text>
            <Image source={require('../../assets/Scheda.jpg')} style={styles.imgSchedule}/>
        </View>
        <View style={styles.section}>
        <Text style={styles.text}>Consigli e Supporto</Text>
            <Image source={require('../../assets/personal-trainer-con-ragazza.jpg')} style={styles.imgAdvise}/>
        </View>
        
    </View>
}

export default SecondPage

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
    imgSchedule:{
        width: 180,
        height: 250,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10
    },
    imgAdvise:{
        width: 300,
        height: 150,
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