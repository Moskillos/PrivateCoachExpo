import { StyleSheet, Text, Pressable, View } from "react-native"
import { useEffect, useState } from "react";
import { Audio } from "expo-av";

export const Timer = ({title, workTime, restTime, timerList, deleteItem}) => {

    const [monsters, setMonsters] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [pause, setPause] = useState(0)
    const [rest, setRest] = useState();

    const startCount = async() => {
        const id = setInterval(() => {
            setSeconds(prev => prev + 1)
        }, 1000);
        setRest(id)
    }

    const startRound = async() => {
        const sound = new Audio.Sound()

        try{
            await sound.loadAsync(require('../../assets/gong.mp3'));
            await sound.playAsync()
        } catch (err){
            console.log('Error')
        }
        const work = setInterval(() => {            
            setMonsters(prev => prev + 1)
        }, 1000);
        setRest(work)
    }
    const startRest = async () => {
        const sound = new Audio.Sound()

        try{
            await sound.loadAsync(require('../../assets/gong.mp3'));
            await sound.playAsync()
        } catch (err){
            console.log('Error')
        }

        const rest = setInterval(() => {
            setPause(prev => prev + 1);
        }, 1000)

        setRest(rest);

    }

    const stopRound = () => {
        clearInterval(rest);
        setRest(null);
        setMonsters(0);
        setPause(0);
        setSeconds(0)
    }

    useEffect(() => {
      
        if(seconds === 10){
            clearInterval(rest);
            setRest(null);
            setSeconds(0)
            startRound()
        }
        if(monsters === workTime){
            console.log('are equals')
            clearInterval(rest);
            setRest(null);
            setMonsters(0);
            startRest()
        }
        if(pause === restTime){
            clearInterval(rest);
            setRest(null);
            setPause(0);
            startRound()
        }        
        },[seconds, monsters, pause, workTime, restTime, timerList])

    return (
        <View style={styles.container}>
            <Pressable style={styles.timer} onLongPress={deleteItem} onPress={startCount}>           
            <Text style={styles.text}> Preparati {seconds}</Text>    
            <Text style={styles.text}> Lavoro {monsters}</Text>
            <Text style={styles.text}> Pausa {pause}</Text>     
            <Text>{title}</Text>   
            </Pressable>
            <View style={styles.stopSection}>
                
                <Pressable style={styles.btn} onPress={stopRound}>
                    <Text>Stop Round</Text>
                </Pressable>
            </View>
        </View>
       
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    timer: {
        padding: 20,
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 20,
        flexDirection: 'row'
    },
    text: {
        fontSize: 20
    },
    stopSection:{
        flexDirection: 'row',
        justifyContent: 'center'
    },
    btn:{
        padding: 20,
        backgroundColor: 'blue'
    }
})