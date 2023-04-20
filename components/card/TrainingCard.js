import { View, StyleSheet, Pressable } from "react-native"
import Input from "../../ui/Input"
import { globalColor } from "../../utils/globalColor"
import { AntDesign } from '@expo/vector-icons';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { bodySliceActions } from "../../store/body-slice";
import CustomButton from "../../ui/CustomButton";
import { diarySliceAction } from "../../store/diary-slice";

export const TrainingCard = ({onPress}) => {
    const dispatch = useDispatch()
    const [training, setTraining] = useState({
        kcal: 0,
        durata: 0,
        descrizione: ''
    })

    const handleTraining = (value, data) => {
        setTraining((prev => {
            return {
                ...prev,
                [value]: data
            }
        }));
       
    }

    const setBodyExecise = () => {
        dispatch(bodySliceActions.addEsercizio(training))
        dispatch(diarySliceAction.addBody(training))
    }

    return(
        <View style={styles.container}>
            <Pressable style={styles.closeIcon} onPress={onPress}>
                <AntDesign name="closecircle" size={24} color="black" />
            </Pressable>
            <Input label={'Kcal'} customStyle={styles.input} inputConfig={{
                keyboardType:'number-pad',
                inputMode: 'numeric',
                onChangeText: handleTraining.bind(this, 'kcal'),
                maxLength: 3,
                textAlign: 'center'               
            }}/>
             <Input label={'Durata'} customStyle={styles.input} inputConfig={{
                keyboardType:'number-pad',
                inputMode: 'numeric',
                onChangeText: handleTraining.bind(this, 'durata'),
                maxLength: 3,
                textAlign: 'center'
            }}/>
             <Input label={'Descrizione'} customStyle={styles.input} inputConfig={{                
                onChangeText: handleTraining.bind(this, 'descrizione'),
                textAlign: 'center',
                multiline: true,
                numberOfLines: 2
            }}/>
            <CustomButton text={'Inserisci'} customStyle={styles.btn} onPress={setBodyExecise}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       width: '100%',
       backgroundColor: globalColor.secondaryBK,
       alignItems: 'center',
       paddingVertical: 30
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
        marginRight: 10,
        color: 'white',
        fontSize: 20
    },
    closeIcon:{
        position: 'absolute',
        right: 0
    },
    btn: {
        backgroundColor: 'green',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 30,
        borderRadius: 20
    }
})