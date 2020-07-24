import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles'

export default function TodoItem({ pressHandler, item }) {
  return (
    <TouchableOpacity >
      <View style={styles.item}>
        <Text style={styles.itemText}>OrderId : {item.key}</Text>
        <Text style={styles.itemText}>Costumer Name : {item.CustName}</Text>
        <Text style={styles.itemText}>Contact : {item.Contact}</Text>
        <Text style={styles.itemText}>Address : {item.Address}</Text>
        <MaterialIcons style={styles.done} onPress={() => pressHandler(item.key)} name='done' Text="done" size={18} color='#333' />
      </View>
    </TouchableOpacity>
  )
}
