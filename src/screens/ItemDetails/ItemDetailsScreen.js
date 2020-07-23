import React from 'react';
import {
  Image,
  View,
  Text,
  Dimensions
} from 'react-native';
import styles from './styles';
import BackButton from '../../components/BackButton/BackButton';

const { width: viewportWidth } = Dimensions.get('window');

export default class RecipeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('item').title.toUpperCase(),
      headerTransparent: 'true',
      width: '100%',
      headerLeft: () =>
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
    };
  }

  render() {
    const itemDetails = this.props.navigation.getParam('item');
    return (
      <View style={styles.container}>
        <View>
          <Image style={styles.photo} source={require('../../data/images/0.png')} />
        </View>
        <Text style={styles.description}>{itemDetails.description}</Text>
        <Text style={styles.price}>Rs.{itemDetails.price}</Text>
        <Text style={styles.review}>Review-{itemDetails.rating} star</Text>
      </View>
    );
  }
}


