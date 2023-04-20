import { Dimensions, Image, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native"

const ServiceDetailCard = ({title, image, onPress}) => {
    
    return (                 
        <View style={styles.container}>
            <Pressable android_ripple={{color: '#000'}} onPress={onPress}>
            <ImageBackground source={image} style={styles.image}>                
                    <Text style={styles.text}>{title}</Text>
            </ImageBackground>
            </Pressable>
        </View>                  
    )
}

export default ServiceDetailCard

const styles = StyleSheet.create({
   container: {
    width: '100%',
    height: Dimensions.get('window').height / 3
   },
   image: {
    width: '100%',
    height: '100%',
    opacity: 0.7,
    alignItems: 'center',
    justifyContent: 'center'
   },
   text: {
    color: 'white',
    fontSize: 32,
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 5 
   }
})