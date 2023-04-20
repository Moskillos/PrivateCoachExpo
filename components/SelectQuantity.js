import Input from "../ui/Input";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { globalColor } from "../utils/globalColor";
import { useState } from "react";
import CustomButton from "../ui/CustomButton";
import { AntDesign } from '@expo/vector-icons';

export const SelectQuantity = ({passingWeight, closeQuantity}) => {;
    const [weight, setWeight] = useState(0);

    const handleWeight = (weightSubmit) => {
        setWeight(weightSubmit)
    }

    const sendWeight = () => {
        passingWeight(weight)
    }

    return (
        <View style={styles.container}>
            <Text>Inserisci il peso in grammi</Text>
            <View style={styles.inputContainer}>
                <Input customStyle={styles.input} inputConfig={{
                keyboardType:'number-pad',
                inputMode: 'numeric',
                onChangeText: handleWeight,
                maxLength: 3,
                textAlign: 'center'
            }}/>
            <Pressable style={styles.closeIcon} onPress={closeQuantity}>
                <AntDesign name="closecircle" size={24} color="black" />
            </Pressable>
            
            </View>
            <View>
                <CustomButton text={'Invio'} customStyle={styles.button} onPress={sendWeight}/>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '70%'
    },
    input: {
        borderWidth: 1,
        borderColor: globalColor.primaryBK,
        borderRadius: 20,
        padding: 10,
        width: 160,
        marginRight: 10
    },
    closeIcon:{
        position: 'absolute',
        right: -20
    },
    button:{
        borderRadius: 20,
        backgroundColor: 'green',
        alignItems: 'center',
        marginTop: 10
    }
})