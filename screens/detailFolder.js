import React, {useState} from 'react'
import { StyleSheet, View, Text, Button, TextInput } from 'react-native'
import {globalStyles} from './global'
import {Formik, Form} from 'formik'
import * as yup from 'yup'
import FlatButton from '../shared/button'

const reviewSchema = yup.object({
    todoItem: yup.string()
    .required()
    .min(2),
})


export default function DetailFolder({addTasks}){

    const [show, setShow] = useState(false);
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
    };
  
    const showMode = currentMode => {
      setShow(true);
      setMode(currentMode);
    };

    return (
        <View style={globalStyles.cotainer}>
            <Formik
            initialValues={{todoItem: ''}}
            validationSchema={reviewSchema}
            onSubmit={(values, actions) => {
                actions.resetForm();
                addTasks(values);
            }}
            >
                {(props) => (
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Enter a new list'
                            onChangeText={props.handleChange('todoItem')}
                            value={props.values.todoItem}
                            onBlur={props.handleBlur('todoItem')}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.todoItem && props.errors.todoItem}</Text>

                        <Text style={globalStyles.errorText}>{props.touched.description && props.errors.description}</Text>

                        <FlatButton text='save' onPress={props.handleSubmit}/>
                    </View>
                )}
            </Formik>
        </View>
    )
}

