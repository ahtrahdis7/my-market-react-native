import React from 'react';
import {
  FlatList,
  Text,
  View,
  TouchableHighlight,
  Image,
  ScrollView
} from 'react-native';
import styles from './styles';

export default class ItemsListScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('itemType').toUpperCase()
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      itemlist: [],
      render: true
    }
  }
  getData(itemlist) {
    this.setState({
      itemlist: itemlist,
      render: true
    })
  }

  componentDidMount() {
    const itemType = this.props.navigation.getParam('itemType');
    fetch("http://testdeployment-env.eba-eqdcmu3a.us-east-2.elasticbeanstalk.com/api/search/category/" + itemType)
      .then(response => response.json())
      .then((itemlist) => this.getData(itemlist))
      .catch(err => console.log(err));

    console.log(this.state.itemlist)
  }

  onPressItem = item => {
    this.props.navigation.navigate('ItemDetails', { item: item });
  };

  renderMenuItem = ({ item }) => {
    return (
      <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.onPressItem(item)}
      >
        <View style={styles.container}>
          <Image style={styles.photo} source={{ uri: "data:image/png;base64," + item.imageLink }} />
          <Text style={styles.title}>{item.name}</Text>
        </View>
      </TouchableHighlight>
    )
  };

  render() {

    const { navigation } = this.props;
    const data = this.state.itemlist;
    if (data != undefined)
      return (
        <ScrollView>
          <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={this.renderMenuItem}
            numColumns={2}
            keyExtractor={item => item._id}
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
