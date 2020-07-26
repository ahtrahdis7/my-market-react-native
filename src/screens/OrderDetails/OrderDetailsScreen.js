import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import Header from './header';
import OrderItem from './orders';
import styles from './styles';

export default function App() {
    const [orders, setorder] = useState([
        { CustName: 'Ramachandra Panda', key: '1', Contact: "+919876543210", Address: "Shaheed Nagar 1st line" },
        { CustName: 'Harekrushna Mishra', key: '2', Contact: "+919876543210", Address: "Baramunda 3rd line" },
        { CustName: 'Ajitesh Panda', key: '3', Contact: "+919876543210", Address: "Gothapatna 2nd line" },
        { CustName: 'Sidhrtha Mallick', key: '4', Contact: "+919876543210", Address: "Master Canteen 3rd line" },
    ]);

    const pressHandler = (key) => {
        const msg = "OrderId " + key + " Delivered Successfully"
        alert(msg);
        setorder(prevorder => {
            return prevorder.filter(todo => todo.key != key);
        });
    };

    return (
        <View style={styles.container}>
            {/* <Header /> */}
            <View style={styles.list}>
                <FlatList
                    data={orders}
                    renderItem={({ item }) => (
                        <OrderItem item={item} pressHandler={pressHandler} />
                    )}
                />
            </View>
        </View>
    );
}

