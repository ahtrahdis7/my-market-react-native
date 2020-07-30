import React from 'react';
import {
  FlatList,
  Text,
  ScrollView,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

import MenuImage from '../../components/MenuImage/MenuImage';
import styles from './styles';

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerLeft: () =>
      <MenuImage
        onPress={() => {
          navigation.openDrawer();
        }}
      />
  });
  constructor(props) {

    super(props);
    this.state = {
      categories: []
    }
  }

  getData(categories) {
    this.setState({
      categories: categories
    })
  }

  componentDidMount() {
    // console.log(this.state)
    fetch("http://testdeployment-env.eba-eqdcmu3a.us-east-2.elasticbeanstalk.com/api/search/getCategories")
      .then(response => response.json())
      .then((categories) => this.getData(categories))
      .catch(err => console.log(err));
  }


  render() {
    const { navigate } = this.props.navigation;
    var fromCart = this.props.navigation.getParam('fromCart');
    if(fromCart == true){
      navigate('Cart');
    }
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

