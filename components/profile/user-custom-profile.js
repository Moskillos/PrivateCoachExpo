import { StyleSheet, Text, View } from "react-native"

export const UserCustomProfile = () => {
   
    return (
        <View style={styles.container}>
            <View style={styles.staticsSection}>
                <View>
                    <Text style={styles.text}>Peso</Text>
                    <Text style={styles.text}>-</Text>
                </View>
                <View>
                <Text style={styles.text}>Peso</Text>
                    <Text style={styles.text}>-</Text>
                </View>
                <View>
                <Text style={styles.text}>Peso</Text>
                    <Text style={styles.text}>-</Text>
                </View>
            </View>
            <View style={styles.goalsSection}>
                <Text style={styles.text}>Obiettivo</Text>
                <Text style={styles.text}>Descrizione Obiettivo</Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    staticsSection: {
        width: '70%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    goalsSection: {
        alignItems:'center',
        marginVertical: 20
    },
    text: {
        color: 'white'
    }
})