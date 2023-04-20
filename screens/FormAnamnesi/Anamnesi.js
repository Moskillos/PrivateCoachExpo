import { StyleSheet, View } from "react-native"
import BodyQuestions from "../../components/forms/Anamnesi/BodyQuestions"
import { useState } from "react"
import PersonalQuestions from "../../components/forms/Anamnesi/PersonalQuestions"
import { globalColor } from "../../utils/globalColor"

const Anamnesi = ({navigation, route}) => {
    const service = route.params
    const [firstPage, setFirstPage] = useState(true)

    const handlePagination = () => {
       setFirstPage(false)
    }

    return (
        <View style={styles.container}>
            {firstPage &&<BodyQuestions onFinish={handlePagination}/>}  
            {!firstPage &&<PersonalQuestions nav={navigation} service={service}/>}
        </View>
    )
}

export default Anamnesi

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems:'center',
        marginTop: 60,
        backgroundColor: globalColor.primaryBK
    }
})