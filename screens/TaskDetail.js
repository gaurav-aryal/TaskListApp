import React,{useState} from'react';
import {View,Text, StyleSheet,ImageBackground} from 'react-native';
import {globalStyles} from './global';
import Card from '../shared/card';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AddNewItem from '../screens/AddNewItem'
import FlatButton from '../shared/button'

const TaskDetail=({route, navigation})=>{
  const {todoItem} = route.params;
  const {dueDate} = route.params;
  const {description} = route.params;

	return (
    <ImageBackground
        style={{ flex: 1 }}
        //We are using online image to set background
        source={{
          uri:
          'https://images.wallpaperscraft.com/image/desert_sand_man_131516_3415x3415.jpg',
        }}
        style={styles.container}>
  <View>
    <Card>
        <Text style={globalStyles.input}>Todo Item: {JSON.stringify(todoItem)}</Text>
        <Text style={globalStyles.input}>Due Date: {JSON.stringify(dueDate)}</Text>
        <Text style={globalStyles.input}>Description: {JSON.stringify(description)}</Text>
      <FlatButton text='Edit' onPress={() => navigation.navigate('AddNewItem')}/>
    </Card>
	</View>
  </ImageBackground>
	);
};

const styles = StyleSheet.create({
  container: {
    flex:1,
   backgroundColor: '#fff',
  }
});

export default TaskDetail;