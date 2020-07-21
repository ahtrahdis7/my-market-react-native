import React from 'react';
import {
  FlatList,
  Text,
  ScrollView,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import styles from './styles';
import { products } from '../../data/products';
import { Tile } from 'react-native-elements';

export default class CategoriesScreen extends React.Component {
  static navigationOptions = {
    title: 'Categories'
  };

  constructor(props) {
    super(props);
  }



  render() {
    const { navigate } = this.props.navigation;
    var data = products;
    data.sort(function (a, b) { return a.type > b.type });
    let map = new Map();
    for (var itr = 0; itr < data.length; itr++) {
      var val = map.get(data[itr].type);
      if (val == undefined)
        map.set(data[itr].type, 1);
      else
        map.set(data[itr].type, val + 1);
    }
    var categories = [];
    for (let key of map) {
      categories.push({ type: key[0], count: key[1] })
    }
    const renderMenuItem = ({ item }) => (
      <View style={styles.card}>
        <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)'
        >
          <View style={styles.categoriesItemContainer}>
            <Tile
              key={item.type}
              title={item.type}
              caption={item.count}
              featured
              // style={styles.categoriesPhoto}
              onPress={() => navigate('ItemsList', { itemType: item.type })}
              imageSrc={{ uri: "https://images.unsplash.com/photo-1533777324565-a040eb52facd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" }}
            />
          </View>
        </TouchableHighlight>
      </View>
    );
    // console.log(categories);
    return (
      <ScrollView>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          data={categories}
          renderItem={renderMenuItem}
          keyExtractor={item => item.type}
        />
      </ScrollView>
    );
  }
}
