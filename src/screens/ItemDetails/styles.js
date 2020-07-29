import { StyleSheet, Dimensions } from 'react-native';

const { width: viewportWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    padding: 10,
    margin: 10
  },
  title: {
    fontFamily: 'comic-bold',
    fontSize: 20,
  },
  price: {
    paddingTop: 20,
    fontSize: 20,
    fontWeight: 'bold'
  },
  review: {
    paddingTop: 10,
    fontSize: 18,
    fontWeight: 'bold'
  },
  photo: {
    height: 450,
    width: 450
  },
  addbtn: {
    backgroundColor: "#008037",
    margin: 10,
    padding: 10,
    fontFamily: 'lilita-regular',
  }
});
export default styles;
