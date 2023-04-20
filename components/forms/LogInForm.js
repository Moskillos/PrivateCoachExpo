import { useState } from "react";
import { StyleSheet, Pressable } from "react-native";
import CustomButton from "../../ui/CustomButton";
import Input from '../../ui/Input'
import axios from "axios";
export default function LogInForm() {
const [credenzials, setCredentials] = useState({
    email: '',
    password: ''
})
function enteredValue(input, event){
    setCredentials(prev => {
        return {
            ...prev,
            [input]: event
        }
    })
}

// vsdvsvd

   async function sendLogIn(){
        const call = await axios.post('http://192.168.1.12:3001/login', credenzials)
   }

   return (
    <Pressable style={styles.form}>
        <Input label={'email'} onChangeText={enteredValue.bind(this, 'email')}/>
        <Input label={'password'} onChangeText={enteredValue.bind(this, 'password')}/>
        <CustomButton text={'Log In'} onPress={sendLogIn}/>
    </Pressable>
   )
}

const styles = StyleSheet.create({
    form: {
        width: '80%',
        height: '80%',
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center'
    },
    
})