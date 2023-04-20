import { ScrollView, StyleSheet, View, ImageBackground, Dimensions } from "react-native";
import CustomButton from "../../ui/CustomButton";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";

const Welcome = ({navigation}) => {    
    const continueProcess = () => {
        navigation.navigate('Registration')
    }

    return <ImageBackground source={require('../../assets/pt.jpg')} resizeMode='cover' imageStyle={styles.img}>
        <View style={styles.container}>
        <ScrollView 
        contentContainerStyle={styles.scroll}
        horizontal={true}        
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        >
            <View style={styles.proviamo}>
                <FirstPage />
            </View>
            <View>
                <SecondPage />
            </View>
            <View>
                <ThirdPage />
            </View>
                     
        </ScrollView>
        <CustomButton text={'Inizia'} onPress={continueProcess}/>
    </View>
    </ImageBackground>
    
}

export default Welcome

const styles = StyleSheet.create({
    container: {       
       height: '100%',       
       justifyContent: 'center',
       alignItems: 'center',       
    },
    proviamo: {
        width: Dimensions.get('window').width
    },
    scroll: {
       justifyContent: 'center',
       alignItems: 'center',    
    },
    img: {
        opacity: 0.7
    }
})