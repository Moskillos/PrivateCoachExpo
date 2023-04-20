import { Modal, Pressable, StyleSheet, View } from "react-native"
import { Timer } from "../components/timer/Timer"
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import Input from "../ui/Input";
import CustomButton from "../ui/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { timerSliceActions } from "../store/timer-slice";

export const TimerScreen = () => {
    const [addNewTimer, setAddNewTimer] = useState(false);
    const [timerInput, setTimerInput] = useState({
        title: '',
        workTime: 0,
        restTime: 0
    })

    const dispatch = useDispatch()
    const timerRedux = useSelector(state => state.timer);

    const startAddingTimer = () => {
        setAddNewTimer(true);
        
    }

    const addTimer = () => {    
        if(timerInput.title.length <= 0){
            return
        }    
        if(timerInput.workTime <= 0){
            return
        }  
        if(timerInput.restTime <= 0){
            return
        }  
       
        dispatch(timerSliceActions.addTimer(timerInput))
        setAddNewTimer(false)
    }

    const deleteTimer = (eve, ev) => {
        dispatch(timerSliceActions.removeTimer(eve))
    }

    const handlerTimeInsert = (data, ev) => {
        setTimerInput(prev => {
                return {
                    ...prev,
                    [data]: ev
                }
            })
            
    }
    
    return (
        <View style={styles.container}>        
        <View>
            {timerRedux.timer.map((t, index) => {
            return <Timer key={index} timerList={timerRedux} title={t.title} workTime={t.workTime} deleteItem={deleteTimer.bind(this, index)} restTime={t.restTime}/>
        })}
        </View>
        <View style={styles.iconBox}>
            <Pressable onPress={startAddingTimer}>
               <Ionicons name="add-circle-outline" size={60} color="black" /> 
            </Pressable>       
        </View>
        <Modal animationType="slide"
            transparent={true} 
            visible={addNewTimer}>
                <View style={styles.modalContainer}>
                    <View style={styles.modal}>
                       <Input label={'Descrivi timer'} customStyle={styles.input} inputConfig={{
                        onChangeText: handlerTimeInsert.bind(this,'title')
                    }}/>
                    <Input label={'Tempo di lavoro'} customStyle={styles.input} inputConfig={{
                        onChangeText: handlerTimeInsert.bind(this,'workTime'),
                        inputMode: 'numeric'
                    }}/>
                    <Input label={'Pausa'} customStyle={styles.input} inputConfig={{
                        onChangeText: handlerTimeInsert.bind(this,'restTime'),
                        inputMode: 'numeric'
                    }}/>
                    <CustomButton text={'Aggiungi'} onPress={addTimer}/> 
                    </View>                    
                </View>
        </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
       alignItems: 'center',
       justifyContent: 'center',
       height: '100%'
    },
    iconBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20
    },
    modalContainer: {
        width: '100%',
        backgroundColor: 'rgba(34, 22, 29, 0.8)',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    modal: {
        width: '90%',       
        backgroundColor: 'white',   
    },
    input: {
        backgroundColor: 'grey'
    }
})