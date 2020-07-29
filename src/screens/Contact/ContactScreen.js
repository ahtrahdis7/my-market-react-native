import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';


export default function ContactScreen() {

    return (
        <View style={styles.container}>
            <Text style={styles.head}>Contact Details</Text>
            <Text style={styles.text}>Rakesh : +919337898487</Text>
            <Text style={styles.text}>Samir : +919439818005</Text>
        </View>
    );
}

