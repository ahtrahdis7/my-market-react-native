import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles'

export default function TodoItem({ pressHandler, item }) {
  return (
    <TouchableOpacity >
      <View style={styles.item}>
        <Text style={styles.itemText}>OrderId : {item.key}</Text>
        <Text style={styles.itemText}>Product Name : {item.productName}</Text>
        <Text style={styles.itemText}>Price : {item.price}</Text>
        <Text style={styles.itemText}>Quantity : {item.quantity}</Text>
        <Text style={styles.itemText}>Contact : {item.Contact}</Text>
        <Text style={styles.itemText}>Address : {item.Address}</Text>
      </View>
    </TouchableOpacity>
  )
}
