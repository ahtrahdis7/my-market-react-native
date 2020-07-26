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

export default class CategoriesScreen extends React.Component {
  static navigationOptions = {
    title: 'Categories'
  };

  constructor(props) {

    super(props);
    this.state = {
      categories: []
    }
  }

  getData(categories) {
    // console.log("hello")
    this.setState({
      categories: categories
    })
  }

  componentDidMount() {
    // console.log(this.state)

    fetch("http://192.168.43.55:3000/api/search/getCategories")
      .then(response => response.json())
      .then((categories) => this.getData(categories))
      .catch(err => console.log(err));
  }



  render() {
    const { navigate } = this.props.navigation;

    const renderMenuItem = (item) => {
      return (
        <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)'
          onPress={() => navigate('ItemsList', { itemType: item.item })}>
          <View style={styles.container}>
            <Image style={styles.photo} source={require('../../image.png')} />
            <Text style={styles.title}>{item.item.toUpperCase()}</Text>
          </View>
        </TouchableHighlight>
      )
    };
    const data = this.state.categories;
    if (data != undefined)
      return (
        <ScrollView>
          <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            data={data}
            numColumns={2}
            renderItem={renderMenuItem}
            keyExtractor={item => item}
          />
        </ScrollView>
      );
    else
      return (
        <View>
          <Text>Check Your Network</Text>
        </View>
      )
  }
}
