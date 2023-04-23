import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"
import { StyleSheet, View } from "react-native"
import {Agenda} from 'react-native-calendars';
import CustomButton from "../../ui/CustomButton"
import { Text } from "react-native";

export const Diary = () => {
    
  
    const [items, setItems] = useState({});
    useEffect(() => {
        async function getDiary() {
            try{
                const diary = await AsyncStorage.getItem('diary')
                if(diary.items = null){                    
                    setItems(diary.items)
                }
                
            }
            catch(e){
                setItems([])
            }
        }
        getDiary()
    },[])

    const avesseraEsse = [
      {
        date: '2023-04-23',
        title: 'Cena',
        startTime: '10:00 AM',
        endTime: '11:00 AM'
      },
      {
        date: '2023-04-21',
        title: 'Pranzo',
          startTime: '10:00 AM',
          endTime: '11:00 AM'
      },
    ]
    
  const loadItems = (day) => {
    // Simulate fetching data from an API
    setTimeout(async() => {
      const newItems = {};
      
      for(let i of avesseraEsse){
        if(i.date === day.dateString){
        newItems[day.dateString] = [
        {
          title: i.title,
          startTime: i.startTime,
          endTime: i.endTime
        }
        
      ];
      }
      }
      
     

      setItems(newItems);
    }, 1000);
  };
  console.log(items)
  const renderItem = (item) => {
    return (
      <View style={{ backgroundColor: 'white', padding: 10 }}>
        <Text>{item.title}</Text>
        <Text>{item.startTime} - {item.endTime}</Text>
      </View>
    );
  };

  const renderEmptyDate = () => {
    return (
      <View style={{ backgroundColor: 'white', padding: 10 }}>
        <Text>No events for this day</Text>
      </View>
    );
  };

  const rowHasChanged = (r1, r2) => {
    return r1.title !== r2.title;
  };

  return (
    <Agenda
      items={items}
      loadItemsForMonth={loadItems}
      selected={'2023-04-23'}
      renderItem={renderItem}
      renderEmptyDate={renderEmptyDate}
      rowHasChanged={rowHasChanged}
    />
  );
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


