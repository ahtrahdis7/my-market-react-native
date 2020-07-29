import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Orders</Text>
    </View>
  );
}
