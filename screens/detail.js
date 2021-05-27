import React, {useState} from 'react'
import { StyleSheet, View, Text, Button, TextInput } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import {globalStyles} from './global'
import {Formik, Form} from 'formik'
import * as yup from 'yup'
import FlatButton from '../shared/button'

const reviewSchema = yup.object({
    todoItem: yup.string()
    .required()
    .min(2),
    dueDate: yup.string()
    .required()
    .test('isNum', 'Date must be a numeric', (val) => {
        return parseInt(val);
    }),
    description: yup.string()
    .required()
    .min(2),
})


export default function Detail({addTasks}){

    const [dueDate, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
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
  
    const showDatepicker = () => {
      showMode('date');
    };
  
    const showTimepicker = () => {
      showMode('time');
    };

    return (
        <View style={globalStyles.cotainer}>
            <Formik
            initialValues={{todoItem: '', dueDate: '', description: ''}}
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
                            placeholder='Enter new to do item'
                            onChangeText={props.handleChange('todoItem')}
                            value={props.values.todoItem}
                            onBlur={props.handleBlur('todoItem')}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.todoItem && props.errors.todoItem}</Text>

                        <TextInput
                            style={globalStyles.input}
                            placeholder='Enter due date eg: 4/20/20'
                            onChangeText={props.handleChange('dueDate')}
                            value={props.values.dueDate}
                            onBlur={props.handleBlur('dueDate')}
                        />

                        {/* <TextInput
                            style={globalStyles.input}
                            placeholder='Enter due date eg: 4/20/20'
                            onChangeText={props.handleChange('dueDate')}
                            value={props.values.dueDate.toString()}
                            onBlur={props.handleBlur('dueDate')}
                        />
                            <View>
                                <View>
                                    <Button onPress={showDatepicker} title="Show date picker!" />
                                </View>
                                    {show && (
                                        <DateTimePicker
                                        value={dueDate}
                                        mode={mode}
                                        is24Hour={true}
                                        display="default"
                                        onChange={onChange}
                                        />
                                    )}
                            </View> */}
                        <Text style={globalStyles.errorText}>{props.touched.dueDate && props.errors.dueDate}</Text>

                        <TextInput
                            multiline minHeight={60}
                            style={globalStyles.input}
                            placeholder='Enter a description'
                            onChangeText={props.handleChange('description')}
                            value={props.values.description}
                            onBlur={props.handleBlur('description')}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.description && props.errors.description}</Text>

                        <FlatButton text='save' onPress={props.handleSubmit}/>
                    </View>
                )}
            </Formik>
        </View>
    )
}

