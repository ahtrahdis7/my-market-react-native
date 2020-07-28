import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles';

class BasketItem extends Component {
    render() {
        const { imageUri, name, price } = this.props;
        return (
            <View style={styles.cartitemcontainer}>
                <View style={styles.imagecontainer}>
                    <Image
                        source={imageUri}
                        style={styles.image} />
                </View>
                <View style={styles.itemdetails}>
                    <View style={styles.namecontainer}>
                        <Text style={styles.itemname}>{name}</Text>
                    </View>
                    <View style={styles.pricecontainer}>
                        <Text style={styles.price}>
                            Rs.{price}
                        </Text>
                        <View style={styles.delete}>
                            <TouchableOpacity>
                                <MaterialIcons onPress={() => pressHandler(item.key)} name='delete' Text="delete" size={22} color='#545' />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View >
        );
    }
}

export default BasketItem;
