import React, {useState} from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal, 
  TouchableWithoutFeedback, Keyboard, CheckBox,ImageBackground, Alert} from 'react-native'
import {globalStyles} from './global'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {MaterialIcons} from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'; 
import Card from '../shared/card';
import Detail from './detail'
import AddNewItem from './AddNewItem'

function TaskList({navigation}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [isSelected, setSelection] = useState(false);
  const [todos, settodos] = useState([
    {todoItem: 'Enter a to do item',dueDate: '5/8/2020',description: 'Submit before Wednesday', screen:'Tasklist', key:1},
  ]);

  const addTasks = (task) => {
    task.key = Math.random().toString();
    settodos((currentTasks) => {
      return [task, ...currentTasks]
    });
    setModalOpen(false);
  }

  const addNewTask = (task) => {
    task.key = Math.random().toString();
    settodos((currentTasks) => {
      return [task, ...currentTasks]
    });
  }

  const pressHandler = (key) => {
    let text
    Alert.alert('Are you sure?', 'This task will be deleted permanently.',[
      {text: 'Yes', onPress: () => settodos((prevtodos) => {
        return prevtodos.filter(todos => todos.key != key)
      })},
      {text: 'No', onPress: () => console.log('alert closed')},
    ])
    console.log(key);
  }

  const isChecked = (key) => {
    console.log(key);
    settodos((prevtodos) => {
      return [
        
      ]
    })
  }

  const submitHandler = (todoItem) => {
    settodos((prevTodos) => {
      return[
        {todoItem: todoItem,key: Math.random().toString()},
        ...prevTodos
      ]
    })
  }

  const sortTasks = () => {
    let taskArray = [...todos.values()];
    taskArray.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    return taskArray.sort((a, b) => a.done - b.done);
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
          <Entypo name="home" size={30} color="black" 
          onPress={() => navigation.navigate("HomeScreen")}/>
      <View style={globalStyles.container}>
        <Modal visible={modalOpen} animationType='slide'>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styls.modalContent}>
            < MaterialIcons
                name='close'
                size={30} 
                style = {{...styls.modalToggle, ...styls.modalClose}}
                onPress={() => setModalOpen(false)}
            />
              <Detail addTasks={addTasks}/>
            </View>
          </TouchableWithoutFeedback>
        </Modal>

        <MaterialIcons
          name='add' size={30}
          style={styls.modalToggle}
           onPress={() => setModalOpen(true)}
          />

        <View style={globalStyles.list}>
          <FlatList
            keyExtractor={(item)=>item.key}
            data={todos}
            renderItem={({item}) => (
            <TouchableOpacity
                onPress={() => navigation.navigate('TaskDetail', item)}>
                  <View style={styles.item}>
                    <TouchableOpacity>
                      <CheckBox
                          value={isSelected.todoItem}
                          onValueChange={setSelection}
                          style={styles.checkbox}
                          fontSize={30}
                        />
                    </TouchableOpacity>
                    <Card>
                      <Text style={styles.itemText}>{item.todoItem}</Text>
                      <Text style={styles.itemText}>{item.dueDate}</Text>
                    </Card>
                    <TouchableOpacity onPress={() => pressHandler(item.key)}>
                      <MaterialCommunityIcons style={styles.checkBoxStyles} name='delete' size={30} color='#333'/>
                    </TouchableOpacity>
                  </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
      </ImageBackground>
    )
  }

  export default TaskList

  const styles = StyleSheet.create({
    item:{
      padding: 10,
      paddingLeft: 10,
      marginTop: 16,
      borderColor: '#bbb',
      borderWidth: 1,
      borderStyle: 'dotted',
      borderRadius: 10,
      flexDirection: 'row',
    },
  checkBoxStyles:{ 
    color:'#333',
    marginLeft: 10,
  },
    itemText:{
      marginLeft: 10,
      fontSize: 18,
    },
    container: {
      flex:1,
     backgroundColor: '#fff',
    }
  });

  const styls = StyleSheet.create({
    modalToggle: {
      marginBottom: 10,
      borderWidth: 1,
      borderColor: '#f2f2f2',
      padding: 10,
      borderRadius: 10,
      alignSelf: 'center',
    },
    modalToggle: {
      marginTop: 20,
      marginBottom: 0,
      alignSelf: 'center',
    },
    modalContent: {
      flex: 1,
    }
  })