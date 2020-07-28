import React, { Component } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import Icon from "@expo/vector-icons/Ionicons";
import CartItem from "./CartItem";
import styles from './styles'

class Cart extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#EFF0F1"
        }}
      >
        <View style={styles.items}>
          <ScrollView>
            <CartItem
              editIcon={true}
              imageUri={require("../../../assets/logo.png")}
              name="Dress Helena"
              price={120}
              {...this.props}
            />
            <CartItem
              editIcon={true}
              imageUri={require("../../../assets/logo.png")}
              name="Dress Marie-Anne short"
              price={180}
              {...this.props}
            />
            <CartItem
              editIcon={true}
              imageUri={require("../../../assets/logo.png")}
              name="Dress Marie-Anne short"
              price={180}
              {...this.props}
            />
          </ScrollView>
        </View>
        <View
          style={{
            flex: 1,
            paddingTop: wp("5%")
          }}
        >
          <View style={styles.totalcontainer}>
            <Text style={styles.total}>Total</Text>
            <Text style={styles.total}>Rs.{200}</Text>
          </View>
          <View style={styles.checkoutcontainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              //onPress={() => this.props.navigation.navigate("Checkout")}
              style={styles.checkoutbtn}
            >
              <View
                style={{
                  marginRight: 15
                }}
              >
                <Icon name="md-cart" size={20} color="white" />
              </View>
              <Text
                style={styles.checkout}
              >
                Place your order
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Cart;
