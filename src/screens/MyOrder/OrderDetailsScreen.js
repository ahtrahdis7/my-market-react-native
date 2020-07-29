import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import OrderItem from './orders';
import styles from './styles';

export default function App() {
    const [orders, setorder] = useState([
        { key: '1', productName: 'atta 5kg', price: '200', quantity: '1', Contact: "+919876543210", Address: "Shaheed Nagar 1st line" },
        { key: '2', productName: 'oil 1ltr', price: '100', quantity: '2', Contact: "+919876543210", Address: "Shaheed Nagar 1st line" },
    ]);

    return (
        <View style={styles.container}>
            <View style={styles.list}>
                <FlatList
                    data={orders}
                    renderItem={({ item }) => (
                        <OrderItem item={item} />
                    )}
                />
            </View>
        </View>
    );
}

