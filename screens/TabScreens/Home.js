import { View, StyleSheet, ScrollView} from "react-native"
import { CalorieWidget } from "../../components/card/CalorieWidget"
import ServicesScreen from "../../components/ServicesScreen"
import { TimerWidget } from "../../components/timer/TimerWidget"
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchDiary } from "../../store/diary-slice";

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {      
      dispatch(fetchDiary())
    }, [dispatch])
    return (
        <ScrollView>
            <View style={styles.news}>

            </View>
            <View style={styles.widgetBox}>
                <View style={styles.widget}>
                    <TimerWidget/>
                </View>
                <View style={styles.widget}>
                    <CalorieWidget />
                </View>               
            </View>
            <ServicesScreen/>            
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    timer: {
        padding: 20,
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 20,
        flexDirection: 'row',
        width: '100%'
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
    },
    news:{
        padding: 5,
        height: 200,
        width: '100%',
        backgroundColor: 'red'
    },
    widgetBox: {
        flexDirection: 'row'
    },
    widget:{
       padding: 5,
       width: '50%'
    }
})