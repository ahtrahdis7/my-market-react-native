import React from 'react';
import {
  Image,
  View,
  Text,
  Dimensions,
  AsyncStorage, ScrollView,
} from 'react-native';
import { Button } from 'react-native-elements';
import styles from './styles';

const { width: viewportWidth } = Dimensions.get('window');

async function addtocart(props) {
  const itemDetails = props.getParam('item');
  var user = await AsyncStorage.getItem('user');
  var parsedUser = JSON.parse(user);

  if (parsedUser == null) {
    alert('Please Login to continue')
  } else {
    parsedUser.cart.push(itemDetails);
  }
  AsyncStorage.setItem('user', JSON.stringify(parsedUser));

  user = await AsyncStorage.getItem('user');
  parsedUser = JSON.parse(user);
  alert('Item added to cart successfully');
}
export default class RecipeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('item').name.toUpperCase(),
    };
  }



  render() {
    const itemDetails = this.props.navigation.getParam('item');
    // console.log(itemDetails)
    return (
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Image style={styles.photo} source={{ uri: "data:image/png;base64," + itemDetails.imageLink }} />
          </View>
          <Text style={styles.title}>{itemDetails.name}</Text>
          <Text style={styles.price}>Rs.{itemDetails.price}</Text>
          <Button
            buttonStyle={styles.addbtn}
            title="Add To Cart"
            onPress={() => addtocart(this.props.navigation)}
          />
        </View>
      </ScrollView>

    );
  }
}


