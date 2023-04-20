import { FlatList, StyleSheet, Text, View, ScrollView } from "react-native"
import CustomButton from "../../../ui/CustomButton"
import Input from "../../../ui/Input"
import { domande } from "../../../utils/domande"
import React, { useEffect } from 'react';
import { LogBox } from 'react-native';

const PersonalQuestions = ({nav, service}) => {
    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])


    const sendForm = () => {
        nav.navigate('Buy', {
            service: service            
        })
    }
    return <ScrollView contentContainerStyle={styles.container}>
        <FlatList        
        data={domande}
        renderItem={({item}) => <View style={styles.inputBox}>
            <Input label={item.question} inputConfig={{
            placeholder: item.placeholder,
            multiline: true,
            textAlignVertical: 'top',
            height: 200
        }}  />
        </View>}
        keyExtractor={item => item.id}

      />
      <View style={styles.buttonBox}>
        <CustomButton text={'Ottieni Scheda'} onPress={sendForm}/>
      </View>
    </ScrollView>
    
    
}

export default PersonalQuestions

const styles = StyleSheet.create({
    container: {
        width: '80%',
        marginBottom: 400
    },
    inputBox:{
        marginTop: 40
    },
    buttonBox:{
        marginTop: 30,
        marginBottom: 39
    }
})