import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { useSelector } from 'react-redux';

export function Diary() {
  const [items, setItems] = useState({});
  const giorni = useSelector(state => state.diary.giorni)
  console.log(giorni[0].esercizi)
  // Funzione chiamata quando viene selezionato un giorno
  const loadItems = (day) => {
    // Effettua la chiamata API per caricare gli eventi del giorno selezionato
    // e aggiorna lo stato dell'agenda con i dati ottenuti
    setItems({
      [day.dateString]: giorni
    });
  };

  // Funzione per renderizzare un evento nell'agenda
  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item.date}</Text>
        {item.esercizi.map(esercizio => {
          return <View style={styles.item}>
            <Text style={styles.title}>
              cascas
            </Text>
            </View>
        }) }
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={'2023-04-25'}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    marginBottom: 5,
  },
  time: {
    fontSize: 12,
    color: '#999',
  },
});