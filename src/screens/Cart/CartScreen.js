import React, { Component } from "react";
import { View, ScrollView, Text, TouchableOpacity, FlatList, AsyncStorage } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import Icon from "@expo/vector-icons/Ionicons";
import CartItem from "./CartItem";
import styles from './styles'

function sleepFor(sleepDuration) {
  var now = new Date().getTime();
  while (new Date().getTime() < now + sleepDuration) { /* do nothing */ }
}

function calculatePrice(itemlist) {
  var price = 0;
  for (let i of itemlist) {
    price = price + i.price;
  }
  return price
}


class Cart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      itemlist: [],
      render: true,
      price: 0
    }
  }


  async getData() {
    var user = await AsyncStorage.getItem('user');
    var parsedUser = JSON.parse(user);
    // console.log(parsedUser.cart)
    this.setState({
      itemlist: parsedUser.cart,
      price: calculatePrice(parsedUser.cart)
    })
    // return parsedUser;  
  }
  componentDidMount() {
    this.getData();
    console.log("inside component did mount")
  }

  renderMenuItem = ({ item }) => {
    // console.log(item.price)
    return (
      <CartItem
        editIcon={true}
        imageUri={{ uri: "data:image/png;base64," + item.imageLink }}
        name={item.name}
        price={item.price}
      />
    )
  };



  render() {
    var data = this.state.itemlist;
    console.log('after get  data ')
    var price = this.state.price;
    console.log('price')
    console.log(price)

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#EFF0F1"
        }}
      >
        <View style={styles.items}>
          <ScrollView>
            <FlatList
              vertical
              showsVerticalScrollIndicator={false}
              data={data}
              renderItem={this.renderMenuItem}
              keyExtractor={item => item.id}
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
            <Text style={styles.total}>Rs.{price}</Text>
          </View>
          <View style={styles.checkoutcontainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => this.props.navigation.navigate("Checkout")}
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
