import * as React from 'react'
import { NavigationContainer,createMaterialTopTabNavigator,createAppContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import TaskList from '../screens/TaskList'
import TaskDetail from '../screens/TaskDetail'
import AddNewItem from '../screens/AddNewItem'
import HomeScreen from '../screens/HomeScreen'
import Settings from '../screens/settings'
import Inbox from '../screens/inbox'
import Today from '../screens/today'
import Reminder from '../screens/reminder'

const Stack = createStackNavigator()

function homeStack() {
  return (
    <NavigationContainer>
        
    <Stack.Navigator
            initialRouteName='HomeScreen'
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
                name='HomeScreen'
                component={HomeScreen}
                options={{ title: 'MyTasks' }}
                />
                <Stack.Screen
                name='Reminder'
                component={Reminder}
                options={{ title: 'Reminder' }}
                />
                <Stack.Screen
                name='TaskList'
                component={TaskList}
                options={{ title: 'TaskList' }}
                />
                <Stack.Screen
                name='Inbox'
                component={Inbox}
                options={{ title: 'Inbox' }}
                />
                <Stack.Screen
                name='Today'
                component={Today}
                options={{ title: 'Today' }}
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
                options={{ title: 'Add New Item' }}
                />
                <Stack.Screen
                name='Settings'
                component={Settings}
                options={{ title: 'Settings' }}
                />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default homeStack