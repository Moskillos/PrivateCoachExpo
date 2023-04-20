import { Text, Pressable, Dimensions, ImageBackground, StyleSheet, View } from "react-native"

const ServiceCard = ({text, image, onPress}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {text}
            </Text>
            <ImageBackground source={image} style={styles.bk}> 
            <Pressable android_ripple={{color:'#000000'}} style={styles.press} onPress={onPress}>               
                        
            </Pressable>
            </ImageBackground>
        </View>
        
)}

export default ServiceCard

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    bk: {
        width: Dimensions.get('window').width * 80 / 100,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 30,
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',        
    },
    press: {
        width: '100%',
        height: '100%'
    },
    text: {
        color: 'white',
        fontSize: 24,
        opacity: 1,       
    }
})