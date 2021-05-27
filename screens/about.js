import React from 'react';
import{StyleSheet, View, Text} from 'react-native';
import {globalStyles} from './global';

function About(){
    return(
    <View style={globalStyles.container}>
        <Text>About Screen</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:24
    }
});

export default about