import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"
import { Pressable, StyleSheet, View } from "react-native"
import * as Calendario from 'expo-calendar';
import { Calendar } from "expo-calendar";
import { AlimentationDiary } from "../../components/diary/AlimentationDiary"
import { DiaryDayHandler } from "../../components/diary/DiaryDayHandler"
import { EnergyPianification } from "../../components/profile/energy-pianification"
import CustomButton from "../../ui/CustomButton"
import { Text } from "react-native";
import CalendarStrip from 'react-native-calendar-strip';

export const Diary = () => {
    const restStorage = async () => {
        await AsyncStorage.clear()
    }

    const selectedDateHandler =(data) => {
        console.log(data)
    }
    return (
        <View style={styles.container}>
            {/* <DiaryDayHandler/>
            <View style={styles.energyPian}>
               <EnergyPianification /> 
            </View>
            <View>
                <AlimentationDiary />
            </View>      
            <CustomButton text={'reset'} onPress={restStorage}/>   */}
           
            
            <CalendarStrip 
            datesWhitelist={[
                '16/04/2023',
                {
                start: new Date('December 17, 2025 03:24:00'),
                end: new Date('December 17, 2025 03:24:00')
                }]}
            selectedDate={'16/04/2023'}
            calendarAnimation={{ type: 'sequence', duration: 30 }}
            daySelectionAnimation={{
            type: 'background',
            duration: 200
            }}
            style={{
            height: 150,
            paddingTop: 20,
            paddingBottom: 20,
            }}
            calendarHeaderStyle={{ color: '#000000' }}          
            customDatesStyles={{color: 'red'}}
            onDateSelected={selectedDateHandler}
            dateContainerStyle={{
            color:'black'
            }}
            />
        </View> 
        
    )
}
const styles = StyleSheet.create({
    container: {
       
    },
    energyPian: {
        width: '100%',
        alignItems: 'center',
        marginVertical: 10
    },
    
    
})


