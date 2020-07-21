import React from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  TouchableHighlight
} from 'react-native';
import styles from './styles';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import BackButton from '../../components/BackButton/BackButton';

const { width: viewportWidth } = Dimensions.get('window');

export default class RecipeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('item').title.toUpperCase(),
      headerTransparent: 'true',
      headerLeft: () =>
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      
    };
  };

  render() {
    const { navigation } = this.props;
    const itemDetails = navigation.getParam('item');
    //itemDetails contains all the details of the specific item
    console.log(itemDetails);
    return (
      <ScrollView style={styles.container}>
        <Image style={styles.photo} source="https://images.unsplash.com/photo-1533777324565-a040eb52facd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
        <Text>{itemDetails.description}</Text>
        <Text>{}</Text>
      </ScrollView>
    );
  }
}


