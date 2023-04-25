import { Pressable, View, Text, StyleSheet, ScrollView, Modal } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { ActiveService } from "../../components/profile/active-service";
import { useDispatch, useSelector } from "react-redux";
import { EnergyPianification } from "../../components/profile/energy-pianification";
import { UserCustomProfile } from "../../components/profile/user-custom-profile";
import { settingsSliceActions } from "../../store/settings-slice";
import { SettingScreens } from "../../components/SettingScreens";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomButton from "../../ui/CustomButton";
import { NutrientsGrafic } from "../../components/NutrientsGrafic";

const ProfileScreen = ({navigation}) => {
    const dispatch = useDispatch()
    const services = useSelector(state => state.service)
    const settings = useSelector(state => state.settings)  
 
    const addService = async () => {
        navigation.navigate('Home')      
    }

    const handleEnergy = () => {
        navigation.navigate('HandleEnergyPage')
    }

    const handleSet = () => {
        dispatch(settingsSliceActions.openSettings())        
    }

    const closeSettings = () => {
        dispatch(settingsSliceActions.closeSettings())
    }

    const restStorage = async () => {
        await AsyncStorage.removeItem('diary')
    }

    
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Modal animationType="slide"
            transparent={true} 
            visible={settings.open}>
            <View style={styles.modalContainer}>
                <Pressable style={styles.closeIcon} onPress={closeSettings}>
                <AntDesign name="close" size={40} color="white" />      
                </Pressable>
            <View style={styles.modal}>                
                <SettingScreens />
            </View>
            </View>
            </Modal>
            <Pressable style={styles.settingsIcon} onPress={handleSet}>
              <AntDesign name="setting" size={30} color="white" />
            </Pressable>
            <View style={styles.profile}>
                <View style={styles.icon}>
                    <AntDesign name="user" size={35} color="black" />
                </View>             
            </View>
            <UserCustomProfile />
            <Pressable style={styles.energyContainer} onPress={handleEnergy}>
                <EnergyPianification />  
            </Pressable>                                
            {services.servizi.length === 0 &&<Pressable onPress={addService} style={styles.containerNoServices}>
                    <Text style={styles.text}>Non hai servizi attivi</Text>
                    <AntDesign name="pluscircleo" size={28} color="black" />
                </Pressable>}
            {services.servizi.length > 0 &&<ActiveService servicesProps={services}/>}            
            <CustomButton text={'wewajò'} onPress={restStorage}/>
            <NutrientsGrafic />
            <View style={styles.graf}>
                <View style={styles.grafColumn}>

                </View>
            </View>
        </ScrollView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
    },
    profile: {
        width: '100%',
        height : 200,
        alignItems: 'center',
        justifyContent: 'center'
    },
    energyContainer: {       
        alignItems: 'center'
    },
    containerNoServices: {
        height: 200,
        width: '100%',
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    icon: {
        borderRadius: 100,
        backgroundColor: 'red',
        padding: 30
    },
    text: {
        color: 'white'
    },
    settingsIcon:{
        flexDirection: 'row-reverse',
        paddingLeft: 10,
        paddingTop: 10
    },
    modalContainer: {
        width: '100%',
        backgroundColor: 'rgba(34, 22, 29, 0.8)',
        height: '100%'
    },
    modal: {
        width: '90%',       
        backgroundColor: 'white',     
        height: '100%' 
    },
    closeIcon: {
        position: 'absolute',
        right: 0,
        top: 0
    },
    graf: {
        height: 200
    },
    grafColumn:{
        backgroundColor: 'red',
        width: 5,
        height : 100
    }
    
})