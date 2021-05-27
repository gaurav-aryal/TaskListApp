import {StyleSheet} from 'react-native';
import * as Font from '@use-expo/font'

export const globalStyles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
    },
    titleText: {
        fontFamily: 'nunito-regular',
        fontSize:20,
        color: '#333'
    },
    buttonText: {
        fontFamily: 'nunito-bold',
        fontSize:30,
        color: '#333'
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
    },
    errorText: {
        color: 'crimson',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6,
        textAlign: 'center'
    }
})