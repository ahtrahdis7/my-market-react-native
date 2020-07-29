import React from 'react';
import {
  Image,
  View,
  Text,
  Dimensions,
  Button,
  AsyncStorage
} from 'react-native';
import styles from './styles';

const { width: viewportWidth } = Dimensions.get('window');

async function addtocart(props){
  console.log('i am in add to cart');
  const itemDetails = props.getParam('item');
  var user = await AsyncStorage.getItem('user');  
  var parsedUser = JSON.parse(user);  

  console.log('fetched user');
  console.log(parsedUser);

  if(parsedUser == null){
    alert('login first')
  } else {
    parsedUser.cart.push(itemDetails);
  }
  AsyncStorage.setItem('user',JSON.stringify(parsedUser));  
  
  user = await AsyncStorage.getItem('user');  
  parsedUser = JSON.parse(user); 
  console.log('fetched updated user');
  console.log(parsedUser.cart.length); 
  // AsyncStorage.merge('user',JSON.stringify({cart: [itemDetails._id]}),
  // () =>{
  //   AsyncStorage.getItem('user', (err, result) => {
  //     console.log('added to cart')
  //     console.log(result);
  //   });
  // });  

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
      <View style={styles.container}>
        <View>
          <Image style={styles.photo} source={{ uri: "data:image/png;base64," + itemDetails.imageLink }} />
        </View>
        <Text style={styles.description}>{itemDetails.name}</Text>
        <Text style={styles.price}>Rs.{itemDetails.price}</Text>
        <Button 
          title="Add To Cart"
          onPress={() => addtocart(this.props.navigation)}
        />
      </View>
    );
  }
}


