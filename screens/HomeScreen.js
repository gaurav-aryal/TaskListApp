import React, {useState, Component} from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal, 
  TouchableWithoutFeedback, Keyboard, Alert, ImageBackground} from 'react-native'

import {globalStyles} from './global'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {MaterialIcons} from '@expo/vector-icons'
import {FontAwesome5} from '@expo/vector-icons'
import {FontAwesome} from '@expo/vector-icons'
import Card from '../shared/card';
import Detail from './detailFolder'
import { string } from 'yup'
import { CardStyleInterpolators } from '@react-navigation/stack'

function HomeScreen({navigation}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [todos, settodos] = useState([
    {todoItem: 'Inbox', key:1},
    {todoItem: 'Today', key:2},
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
    Alert.alert('Are you sure?', 'All the tasks inside the list will be deleted',[
      {text: 'Yes', onPress: () => settodos((prevtodos) => {
        return prevtodos.filter(todos => todos.key != key)
      })},
      {text: 'No', onPress: () => console.log('alert closed')},
    ])
    console.log(key);
    // settodos((prevtodos) => {
    //   return prevtodos.filter(todos => todos.key != key)
    // })
}

  const selectedList = (item) => {
    if(item.todoItem === 'Inbox'){
      navigation.navigate('Inbox', item)
    }
    else if(item.todoItem === 'Today'){
      navigation.navigate('Today', item)
    }
    else{
      navigation.navigate('TaskList', item)
    }
  };

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
            'https://thewallpaper.co//wp-content/uploads/2016/01/high-quality-images-natural-sky-amazing-views-windows-wallpaper-mac-desktop-images-clean-weathers-free-natural-images-1810x1173.jpg',
        }}
        style={styles.container}>
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
       
        <View style={styles.containerFirst}>
              <View style={styles.buttonContainerFirst}>
              < MaterialCommunityIcons
                name='reminder' size={30}
                onPress={() => navigation.navigate('Reminder')}
                color='#333'
                />
              </View>
              <View style={styles.buttonContainerSecond}>
              < MaterialIcons 
                  name='settings' size={30}
                  onPress={() => navigation.navigate('Settings')}
                  color='#333'
                />
              </View>
            </View>

        < FontAwesome5
          name='folder-plus' size={30}
          style={styls.modalToggle}
           onPress={() => setModalOpen(true)}
          />

        <View style={globalStyles.list}>
          <FlatList
            keyExtractor={(item)=>item.key}
            data={todos}
            renderItem={({item}) => (
            <TouchableOpacity
                onPress={() => selectedList(item)}>
                  <View style={styles.item}>
                    <TouchableOpacity>
                    <FontAwesome style={styles.checkBoxStyles} name='folder' size={30} color='#333'/>
                    </TouchableOpacity>
                    <Card>
                      <Text style={styles.itemText}>{item.todoItem}</Text>
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

  export default HomeScreen

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
    },
    containerFirst: {
      flex: 0.1,
      flexDirection: 'row',
  },
  buttonContainerFirst: {
      flex: 0.5,
      alignItems:'flex-start'
  },
  buttonContainerSecond: {
    flex: 0.5,
    alignItems:'flex-end'
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