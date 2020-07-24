import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import Header from './header';
import OrderItem from './orders';
import styles from './styles';

export default function App() {
    const [orders, setorder] = useState([
        { CustName: 'lorem ipsum', key: '1', Contact: "9876543210", Address: "lorem ipsum sit ipsum" },
        { CustName: 'lorem ipsum', key: '2', Contact: "9876543210", Address: "lorem ipsum sit ipsum" },
        { CustName: 'lorem ipsum', key: '3', Contact: "9876543210", Address: "lorem ipsum sit ipsum" },
        { CustName: 'lorem ipsum', key: '4', Contact: "9876543210", Address: "lorem ipsum sit ipsum" },

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

