import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { useEffect } from "react";

export const DiaryDayHandler = () => {
    const [currentlyDay, setCurrentlyDay] = useState(new Date());
    const [formatDate, setFormatDate] = useState('');

    const nextDay = () => {
        const tomorrow = new Date(currentlyDay);
        tomorrow.setDate(currentlyDay.getDate() + 1);
        setCurrentlyDay(tomorrow)
        const formatDateTomorrow = tomorrow.getDate() + '/' + tomorrow.getMonth() + 1 + '/' + tomorrow.getFullYear()
        setFormatDate(formatDateTomorrow)
    }

    const previousDay = () => {
        const tomorrow = new Date(currentlyDay);
        tomorrow.setDate(currentlyDay.getDate() - 1);
        setCurrentlyDay(tomorrow)
        const formatDateTomorrow = tomorrow.getDate() + '/' + tomorrow.getMonth() + 1 +'/' + tomorrow.getFullYear()
        setFormatDate(formatDateTomorrow)
    }

    useEffect(() => {
        if(currentlyDay.getDate() === new Date().getDate()){
        setFormatDate('Today')
    }
 
    }, [currentlyDay])

    
    return (
        <View style={styles.container}>
            <View style={styles.dayHandler}>
                <Pressable onPress={previousDay}>
                <AntDesign name="caretleft" size={24} color="white" />
                </Pressable>
                <View>
                    <Text style={styles.text}>
                        {formatDate ? formatDate : 'Today'}
                    </Text>
                </View>
                <Pressable onPress={nextDay}>
                <AntDesign name="caretright" size={24} color="white" />
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        
    },
    dayHandler: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor: 'blue',
        padding: 10
    },
    text: {
        color: 'white',
        fontSize: 18
    }
})