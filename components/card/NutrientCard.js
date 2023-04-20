import { Image, View, Text, StyleSheet, Pressable } from "react-native"
import { globalColor } from "../../utils/globalColor"

export const NutrientCard = ({food, onPress}) => {
    const image = food.image
    
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <View style={styles.foodLabel}>
                <Text style={styles.textFoodLabel}>
                    {food.label}
                </Text>
            </View>
            <View style={styles.nutrients}>
                <Text style={styles.text}>
                    Kcal:
                    {food.nutrients.ENERC_KCAL ? food.nutrients.ENERC_KCAL.toFixed(2) : ' 0'}
                </Text>
                <Text style={styles.text}>
                    Carboidrati: 
                    {food.nutrients.CHOCDF ? food.nutrients.CHOCDF.toFixed(2) : ' 0'}
                </Text>
                <Text style={styles.text}>
                    Grassi: 
                    {food.nutrients.FAT ? food.nutrients.FAT.toFixed(2) : ' 0'}
                </Text>
                <Text style={styles.text}>
                    Proteine: 
                    {food.nutrients.PROCNT ? food.nutrients.PROCNT.toFixed(2) : ' 0'}
                </Text>
                <Text style={styles.text}>
                    Fibre: 
                    {food.nutrients.FIBTG ? food.nutrients.FIBTG.toFixed(2) : ' 0'}
                </Text>
            </View>
            <View style={styles.imageContainer}>
                <Image source={{uri: image}} style={styles.image}/>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: 100,
        alignItems: 'center',
        borderColor: globalColor.border,
        borderWidth: 1,
        backgroundColor: globalColor.primaryBK,
        borderRadius: 20,
        width: '80%'
    },
    foodLabel: {
        marginVertical: 10
    },
    textFoodLabel: {
        fontSize: 20,
        color: 'white'
    },
    text: {
        color: 'white'
    },
    nutrients: {        
        gap: 10
    },
    imageContainer: {
        marginTop: 15
    },
    image: {
        width:300,
        height: 200
    }
})