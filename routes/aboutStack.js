import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import TaskList from '../screens/TaskList'
import TaskDetail from '../screens/TaskDetail'
import AddNewItem from '../screens/AddNewItem'
import About from '../screens/about'

const Stack = createStackNavigator()

function aboutStack() {
  return (
    <NavigationContainer>
        
    <Stack.Navigator
            initialRouteName='About'
            screenOptions={{
            gestureEnabled: true,
            headerStyle: {
                backgroundColor: '#101010'
            },
            headerTitleStyle: {
                fontWeight: 'bold'
            },
            headerTintColor: '#ffd700',
            headerBackTitleVisible: false
            }}
            headerMode='float'>
                <Stack.Screen
                name='TaskList'
                component={TaskList}
                options={{ title: 'TaskList Screen' }}
                />
                <Stack.Screen
                    name='TaskDetail'
                    component={TaskDetail}
                    options={({ route }) => ({
                        title: 'TaskDetail Screen'
                    })}
                />
                <Stack.Screen
                name='AddNewItem'
                component={AddNewItem}
                options={{ title: 'AddNewItem' }}
                />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default aboutStack