import React, {useState} from 'react'
import { StyleSheet, View, Text,TextInput, ImageBackground } from 'react-native'
import {globalStyles} from './global'
import FlatButton from '../shared/button'

function AddNewItem({addNewTask, navigation}){

  const val={todoItem: '', dueDate: '', description: ''};
  const [todos, setTodos] = useState('Read a book');
  const [dueDate, setDueDate] = useState('04/20/2020');
  const [description, setDescription] = useState('Read 100 pages a day');

  const selectedScreen = (item) => {
    if(item.screen === 'Inbox'){
      navigation.navigate('Inbox', item)
    }
    else if(item.screen === 'Today'){
      navigation.navigate('Today', item)
    }
    else if(item.screen === 'TaskList'){
      navigation.navigate('TaskList',item)
    }
    else if(item.screen === 'Reminder'){
      navigation.navigate('Reminder',item)
    }
    else{
      navigation.navigate('TaskList', item)
    }
  };

  return (
    <ImageBackground
        style={{ flex: 1 }}
        //We are using online image to set background
        source={{
          uri:
          'https://images.wallpaperscraft.com/image/desert_sand_man_131516_3415x3415.jpg',
        }}
        style={styles.container}>
    <View style={globalStyles.container}>
      <Text> Enter to do item: </Text>
        <TextInput
          style={globalStyles.input}
          placeholder='e.g Read a book'
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(val) => setTodos(val)}
          />

        <Text> Enter due date </Text>
        <TextInput 
          style={globalStyles.input}
          placeholder='e.g 04/20/2020'
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(val) => setDueDate(val)}
          />
          
          <Text> Enter description </Text>
          <TextInput
            multiline minHeight={60}
            style={globalStyles.input}
            placeholder='Description'
            onChangeText={(val) => setDescription(val)}
          />
          
          <FlatButton text='save'onPress={() => addNewTask & navigation.navigate('TaskList')}/> 
          <Text>Todos:{todos}, Due Date:{dueDate}, Description:{description}</Text>
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

export default AddNewItem