import React from 'react';
import { Button, TextInput, View, AsyncStorage } from 'react-native';
import { Formik } from 'formik';

import styles from './styles';

async function clearCart(props){
    var user = await AsyncStorage.getItem('user');
    var parsedUser = JSON.parse(user);
    parsedUser.cart = [];
    AsyncStorage.setItem('user', JSON.stringify(parsedUser));
    props.navigation.navigate('Orders');
}
export default function ReviewForm(props) {
    const data = props.navigation.getParam('data');
    
    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ name: '', contactno: '', address1: '', address2: '', pincode: '', city: '', state: '' }}
                onSubmit={(values) => {
                    console.log(values);
                    var count=0;
                    for (let i of data) {
                        console.log(count);
                        count = count + 1;
                        var orderObject = {
                            name: values.name,
                            userId: values.name,
                            productId: i.productId,
                            price: i.price,
                            quantity: 1,
                            addressLine1: values.address1 ,
                            addressLine2: values.address2,
                            pincode: values.pincode,
                            city: values.city,
                            state: values.state,
                        }
                        
                        const myHeaders = new Headers();
                        // myHeaders.append('sessionId', sessionID );
                        fetch("http://testdeployment-env.eba-eqdcmu3a.us-east-2.elasticbeanstalk.com/api/order/placeOrder",{
                            method: 'POST',
                            body: orderObject,
                            headers: myHeaders,
                        })
                        .then(response => response.json())
                        .then((res) => console.log(res))
                        .catch(err => console.log(err));
                      }
                    clearCart(props);
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
