import { Pressable, StyleSheet, Text } from "react-native";
import { globalColor } from "../utils/globalColor";

function CustomButton({text, onPress, customStyle}){

    
    return (
        <Pressable android_ripple={{color:'#000'}} onPress={onPress} style={customStyle ? customStyle : styles.btn}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    btn:{
        backgroundColor: globalColor.btn,
        width: '100%',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: globalColor.text,
        fontSize: 29,
        fontWeight: 700
    }
})

