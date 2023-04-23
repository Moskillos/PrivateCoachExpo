import {View, Text, StyleSheet} from 'react-native'
import RegistrationForm from '../components/forms/RegistrationForm'
import { globalColor } from '../utils/globalColor'

const RegistrationScreen = ({navigation}) => {
    return <View style={styles.container}>        
        <RegistrationForm nav={navigation}/>
    </View>
}

export default RegistrationScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: globalColor.specialBK,
        
    }
})