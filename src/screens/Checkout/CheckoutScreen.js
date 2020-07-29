import React from 'react';
import { Button, TextInput, View, } from 'react-native';
import { Formik } from 'formik';

import styles from './styles';

export default function ReviewForm() {

    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ name: '', contactno: '', address1: '', address2: '', pincode: '', city: '', state: '' }}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {props => (
                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder='Name'
                            onChangeText={props.handleChange('name')}
                            value={props.values.name}
                        />

                        <TextInput
                            style={styles.input}
                            multiline
                            placeholder='Contact No.'
                            onChangeText={props.handleChange('contactno')}
                            value={props.values.contactno}
                            keyboardType='numeric'
                        />

                        <TextInput
                            style={styles.input}
                            placeholder='Building no./plot no.'
                            onChangeText={props.handleChange('address1')}
                            value={props.values.address1}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='Street'
                            onChangeText={props.handleChange('address2')}
                            value={props.values.address2}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='pincode'
                            onChangeText={props.handleChange('pincode')}
                            value={props.values.pincode}
                            keyboardType='numeric'
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='city'
                            onChangeText={props.handleChange('city')}
                            value={props.values.city}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='state'
                            onChangeText={props.handleChange('state')}
                            value={props.values.state}
                        />
                        <Button buttonStyle={styles.placeorder} color='#008037' title="Place order" onPress={props.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View >

    );
}
