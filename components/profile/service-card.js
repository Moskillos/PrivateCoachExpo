import { StyleSheet, Text, View } from "react-native"

export const ServiceCard = ({service}) => {
    return <View style={styles.container}>
        <Text>{service.item.title}</Text>
        <Text>{service.item.subscription}</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
    }
    
})