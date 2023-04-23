import Input from "../../ui/Input";
import { StyleSheet, View, Text } from "react-native";
import { useState } from "react";
import CustomButton from "../../ui/CustomButton";
import {Ionicons} from '@expo/vector-icons'
import { useDispatch } from "react-redux";
import { userSliceActions } from "../../store/user-slice";
import { globalColor } from "../../utils/globalColor";

function RegistrationForm({nav}){
    const dispatch = useDispatch()
    const [userInput, setUserInput] = useState({
        nome: '',
        cognome: '',
        email: '',
        password: '',
    });

    function inputHandler(input, event){
        setUserInput(prev => {
            return {
                ...prev,
                [input]: event
            }
        })
    };


    async function registration(){        
        // const call = await axios.post('http://192.168.1.12:3001/register', userInput) ;
       
        try{
            dispatch(userSliceActions.logIn({
            name: userInput.nome,
            surname: userInput.cognome,
            email: userInput.email,
            password: userInput.password,
            registrationDate: new Date().toLocaleString()
        }))
        nav.navigate('TabNav')
        } catch (err){
            console.log(err)
        }
        
        
    }

    return(
        <View style={styles.form}>
            <Text style={styles.text}>Registrati per continuare</Text>
            <View style={styles.input}>
                <Input label={'Nome'} inputConfig={{
                    onChangeText: inputHandler.bind(this, 'nome')
                }}/>
            </View>
            <View style={styles.input}>
                <Input label={'Cognome'} inputConfig={{
                    onChangeText: inputHandler.bind(this, 'cognome')
                }}/>
            </View>                
            <View style={styles.input}>
                <Input label={'email'} inputConfig={{
                    onChangeText: inputHandler.bind(this, 'email')
                }}/>
            </View>            
            <View style={styles.input}>
                <Input label={'password'} inputConfig={{
                    onChangeText: inputHandler.bind(this, 'password')
                }}/>
            </View>            
            <CustomButton text={'Registrati'} onPress={registration} customStyle={styles.btn} />
            <View style={styles.foot}>
                <Text style={styles.textSocial}>Procedi con un tuo account esistente</Text> 
                <View style={styles.social}>
                    <View style={styles.socialBoxe}>
                        <Ionicons name="logo-facebook" size={40} color="white" />                
                    </View>
                    <View style={styles.socialBoxe}>
                        <Ionicons name="logo-google" size={40} color="white" />
                    </View>
            </View>
            </View>
            
        </View>
    )
}

export default RegistrationForm

const styles = StyleSheet.create({
    form: {
        width: '80%',
        height: '80%',
        backgroundColor: globalColor.primaryBK,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    text: {
        marginBottom: 40,
        color: 'white',
        fontSize: 26
    },
    input: {
        width: '60%'
    },
    btn: {
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 10,
        padding: 10,
        marginTop: 30,
        backgroundColor: globalColor.btn
    },
    fb: {
        color: 'white',
        fill: 'white'
    },
    social: {
        flexDirection: 'row',
        
        
    },
    textSocial: {
        color: 'white',
        fontSize: 22,
        paddingTop: 5
    },
    foot: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        borderTopWidth: 1,
        borderTopColor: 'white',

    },
    socialBoxe: {
        padding: 10
    }
})
