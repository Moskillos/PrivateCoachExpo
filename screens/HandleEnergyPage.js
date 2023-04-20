import { useState } from "react";
import { FlatList, Modal, StyleSheet, View, SafeAreaView } from "react-native"
import { TrainingCard } from "../components/card/TrainingCard";
import { MealSquare } from "../components/MealSquare";
import { EnergyPianification } from "../components/profile/energy-pianification";
import { InsertFood } from "../components/profile/inserisci-alimento"
import CustomButton from "../ui/CustomButton";
import { timeMeal } from "../utils/meals";

export const HandleEnergyPage = () => {
    const [modal, setModal] = useState(false)    
    const [trainingModal, setTrainingModal] = useState(false);    
    

    const modalHandler = () => {
        setModal(!modal)
    }
    

    const renderMealBox = (meal) => {
        return <MealSquare meal={meal.item} onPress={modalHandler}/>
    }

    const handleTraining = () => {
        setTrainingModal(!trainingModal)
    }

    return (
        <SafeAreaView>

        
        <View style={styles.container}>
            <View style={styles.energyPianificationSection}>
                <EnergyPianification />
            </View>
            
            <Modal
            animationType="slide"
            transparent={true} 
            visible={modal}
            >
            <View style={styles.modalContainer}>
                <View style={styles.modal}>
                    <InsertFood onCloseModal={modalHandler}/>
                </View>
                
            </View>
             
            </Modal>         
            <FlatList
                data={timeMeal}
                keyExtractor={item => item.title}
                renderItem={renderMealBox}
                numColumns={2}
            />
            <Modal animationType="slide"
            transparent={true} 
            visible={trainingModal}>
                <View style={styles.modalContainer}>
                <View style={styles.modal}>
                   <TrainingCard onPress={handleTraining}/>
                </View>
                
            </View>
            </Modal>
            <CustomButton text={'Esercizio'} onPress={handleTraining}/>
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    energyPianificationSection: {
        marginTop: 30,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    mealBox: {
        width: 150,
        height: 150
    },
    modalContainer:{        
       width: '100%',
       height: '100%',
       backgroundColor: 'rgba(34, 22, 29, 0.8)',
       alignItems: 'center',
       justifyContent: 'center',
    },
    modal: {
        width: '90%',       
        backgroundColor: 'white',        
    },
    text: {
        color: 'white'
    },
   
})