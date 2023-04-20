import { Text } from 'react-native'
import { StyleSheet, View, TextInput} from 'react-native'

const Input = ({label,customStyle, inputConfig}) => {    


    return <View style={styles.container}>
        {label &&<Text style={styles.label}>{label}</Text>}
        <TextInput style={customStyle ? customStyle : styles.input}  {...inputConfig}/>
        </View>
     
}

export default Input

const styles = StyleSheet.create({
    container: {
        marginTop: 10
    },
    input: {
        width: '100%',
        height: 30,
        backgroundColor: 'white'
    },
    label: {
        color: 'white',
        fontSize: 20
    }
})