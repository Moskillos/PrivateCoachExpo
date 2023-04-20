import Input from "../../../ui/Input";
import { StyleSheet, View} from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from "react";
import {  pesoArray, sessoArray } from "../../../utils/statics";
import { SelectList } from "react-native-dropdown-select-list";
import CustomButton from "../../../ui/CustomButton";
import { globalColor } from "../../../utils/globalColor";


const BodyQuestions = ({onFinish}) => {
    const [eta, setEta] = useState(0)
    const [sesso, setSesso] = useState('')  
    const [peso, setPeso] = useState(0)  
    const [altezza, setAltezza] = useState(0)
    const [openDatePicker,setOpenDatePicker] = useState(false)
    const [placeholderDate, setPlaceholderDate] = useState('Data di nascita')
    

    const dateHandler = (event, date) => {
       const birthday =  date.getDate() + '/'+ (date.getMonth()+ 1) + '/'+ date.getFullYear()
       
       setPlaceholderDate(birthday)
       setOpenDatePicker(false)
       
    }

    const tryfdd = () => {
        setOpenDatePicker(true)
    }
 
    return (
        <View style={styles.container}>
            <View style={styles.select}>
                <SelectList dropdownTextStyles={styles.contentSelect} inputStyles={styles.contentSelect} placeholder={'Altezza'} search={false} maxHeight={50} setSelected={(value) => setAltezza(value)} data={pesoArray} save='value'/>
            </View>
            <View style={styles.select}>
                <SelectList dropdownTextStyles={styles.contentSelect} inputStyles={styles.contentSelect} placeholder={'Peso'} search={false} maxHeight={50} setSelected={(value) => setPeso(value)} data={pesoArray} save='value'/>
            </View>   
            <View style={styles.select}>
                <SelectList dropdownTextStyles={styles.contentSelect} inputStyles={styles.contentSelect} placeholder={'Sesso'} search={false} maxHeight={50} setSelected={(value) => setSesso(value)} data={sessoArray} save='value'/>
            </View>
            <View style={styles.select}>               
            <SelectList dropdownTextStyles={styles.contentSelect} inputStyles={styles.contentSelect} placeholder={'Età'} search={false} maxHeight={50} setSelected={(value) => setEta(value)} data={pesoArray} save='value'/>
            </View>              
                {openDatePicker &&<DateTimePicker value={date} onChange={dateHandler}/>}
                <View style={styles.btnBox}>
                    <CustomButton text={'Continua'} customStyle={styles.btn} onPress={onFinish}/>
                </View>
                
            
        </View>
    )
}

export default BodyQuestions

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        height: '100%'
    },
    select: {
       marginVertical: 30,
       width: '40%'   
    },
    inputDate: {
       width: '50%', 
    },
    input: {
              
        textAlign: 'center',
        fontSize: 24        
    },
    contentSelect: {
        color: 'white',
        fontSize: 22
    },
    btnBox: {
        marginTop: 10
    },
    btn:{
        padding: 20,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: globalColor.btn
    }
})