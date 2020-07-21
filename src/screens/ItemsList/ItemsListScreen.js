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
import { products } from '../../data/products';

function getItemsofType(itemType){
  var req = [];
  // console.log(products);
  var count=0;
  for(let item of products){
    if(item.type == itemType){
      req.push(item);

    }
  }
  return req;
}
export default class ItemsListScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('itemType').toUpperCase()
    };
  };

  constructor(props) {
    super(props);
  }

  renderMenuItem = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' 
    >
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: "https://images.unsplash.com/photo-1533777324565-a040eb52facd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" }} />
        {/* <Image style={styles.photo} source="1.jpg"/> */}
        <Text style={styles.title}>{item.title}</Text>
        {/* <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text> */}
      </View>
    </TouchableHighlight>
  );

  render() {
    
    const { navigation } = this.props;
    const itemType = navigation.getParam('itemType');
    const data = getItemsofType(itemType);
    return (
      <ScrollView>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={this.renderMenuItem}
          numColumns={2}
          keyExtractor={item => item.filename.split(".")[0]}
        />
      </ScrollView>
    );
  }
}
