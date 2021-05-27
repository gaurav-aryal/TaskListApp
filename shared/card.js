import React,{useState} from'react';
import {View,StyleSheet} from 'react-native';

export default function Card(props){
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    )
}

const styles =StyleSheet.create({

    card: {
        borderRadius: 6,
        marginHorizontal: 4,
        marginVertical: 1
    },
    cardContent: {
        marginHorizontal: 1,
        marginVertical: 1,
    }
})