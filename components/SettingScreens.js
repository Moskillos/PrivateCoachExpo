import { useState } from "react"
import { Pressable, StyleSheet, Text, View} from "react-native"
import { useDispatch } from "react-redux"
import CustomButton from "../ui/CustomButton"
import Input from "../ui/Input"
import { globalColor } from "../utils/globalColor"
import { diarySliceAction } from "../store/diary-slice"

export const SettingScreens = () => {
    const [weight, setWeight] = useState(0);
    const [weightMode, setWeightMode] = useState(false)
    const dispatch = useDispatch()
    const weightHandler = (data) => {
        setWeight(data)
    }

    const weightModeHandler = () => {
        setWeightMode(true)
    }

    const sendWeight = () => {
        dispatch(diarySliceAction.setPeso(weight))
        setWeightMode(false)
    }

    return <View>
        <Pressable style={styles.menuItem}>
            <Text>Immagine profilo</Text>
        </Pressable>
        <Pressable style={styles.menuItem}>
            <Text>Informazioni Personali</Text>
        </Pressable>
        <Pressable onPress={weightModeHandler} style={styles.menuItem}>
            {!weightMode &&<Text>Peso</Text>}
            {weightMode &&<View style={styles.inputWeight}>
                 <Input inputConfig={{
                inputMode: 'numeric',
                onChangeText: weightHandler
            }}/>
            <CustomButton onPress={sendWeight} text={'vai'}/>
            </View>}
           
        </Pressable>
        <Pressable  style={styles.menuItem}>
            <Text>Contatta Personal trainer</Text>
        </Pressable>
        <Pressable  style={styles.menuItem}>
            <Text>Elimina account</Text>
        </Pressable>
        </View>
       
}

const styles = StyleSheet.create({
    menuItem: {
        width: '100%',
        paddingVertical: 20,
        borderWidth: 1,
        borderColor: globalColor.secondaryBK,
        paddingLeft: 5
    },
    inputWeight: {
        flexDirection: 'row'
    }
})
