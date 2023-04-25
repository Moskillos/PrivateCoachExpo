import { useState } from "react";
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, Pressable } from "react-native";
import CustomButton from "../../ui/CustomButton";
import Input from './../../ui/Input';
import axios from "axios";
import { NutrientCard } from "../card/NutrientCard";
import { globalColor } from "../../utils/globalColor";
import { SelectQuantity } from "../SelectQuantity";
import { AntDesign } from '@expo/vector-icons';
import { useDispatch } from "react-redux";
import { diarySliceAction } from "../../store/diary-slice";

export const InsertFood = ({onCloseModal}) => {
    const APP_ID = 'a19bd3ee'
    const APP_KEY = '3c3279db08bd0e0ee450a50bcd1d8fab'	
    const EDAMAM = 'https://api.edamam.com/api/food-database/v2/parser?app_id='+ APP_ID + '&app_key=' + APP_KEY 
    const [food, setFood] = useState([]);
    const [foodChoise, setFoodChoise] = useState({});
    const [foodSearch, setFoodSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [modeQuantity, setModeQuantity] = useState(false);
    const dispatch = useDispatch()
    
    const onChangeInputHandler = (event, data) => {
        setFoodSearch(event)
    }

    async function getFood() {
        try{
        setLoading(true)
        const url = EDAMAM;            
        
        const response = await axios.get(url + '&ingr='+ foodSearch)
        
        const foodHints = response.data.hints

        setFood(foodHints)
        setLoading(false)
        }
        catch {
            console.log('Errore di connessione col server')
            setLoading(false)
        }
    }    

    const itemPressed = (foodDetails) => {        
        setModeQuantity(true)
        setFoodChoise(foodDetails)
    }

    const handleWeight = async(weight) => {
        
        const nutri = {
        name: foodChoise.label,
        CHOCDF: foodChoise.nutrients.CHOCDF * weight / 100, 
        ENERC_KCAL: foodChoise.nutrients.ENERC_KCAL * weight / 100, 
        FAT: foodChoise.nutrients.FAT * weight / 100, 
        FIBT: foodChoise.nutrients.FIBTG * weight / 100, 
        PROCNT: foodChoise.nutrients.PROCNT * weight / 100
    }
        dispatch(diarySliceAction.addNutrients(nutri));
        setModeQuantity(false)
    }

    const closeModal = () => {
        onCloseModal()
    }

    const closeQuantity = () => {
        setModeQuantity(false)
    }


    return (
        <ScrollView contentContainerStyle={styles.container}>        
        {loading && !modeQuantity && <View style={styles.activityIndicatorContainer}>
                <ActivityIndicator size={100}/>
            </View>}   
        {!loading && !modeQuantity &&<View style={styles.containerLoaded}>
        <View style={styles.containerInput}>
            <Input customStyle={styles.input} inputConfig={{
                onChangeText: onChangeInputHandler
            }}  />
            <Pressable style={styles.closeIcon} onPress={closeModal}>
                <AntDesign name="closecircle" size={24} color="red" />
            </Pressable>
            
        </View >
        <View style={styles.buttonContainer}>
            <CustomButton text={'cerca'} customStyle={styles.button} onPress={getFood}/>
        </View>
        <View >
          {food.map((f, index) => {
                return <NutrientCard onPress={itemPressed.bind(this,f.food)} key={index} food={f.food}/>
            })}  
        </View>  
        </View>}
        {modeQuantity && !loading &&<SelectQuantity passingWeight={handleWeight} closeQuantity={closeQuantity}/>}    
          
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    containerLoaded: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    containerInput: {
        width: '50%',
        marginVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    
    buttonContainer: {
        marginBottom: 30
    },
    button: {
        borderRadius: 20,
        backgroundColor: 'green',
        padding: 10
    },
    closeIcon:{
        position: 'absolute',
        right: -10
    },
    text: {
        color: 'white'
    },
    input: {
        borderColor: globalColor.primaryBK,
        fontSize: 22,
        borderWidth: 2,
        padding: 10,
        borderRadius: 20,
        width: 160
    },
    activityIndicatorContainer: {
        padding: 50
    }
})