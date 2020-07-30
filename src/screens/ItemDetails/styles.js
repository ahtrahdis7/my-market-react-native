import { StyleSheet, Dimensions, Platform } from 'react-native';

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
    fontSize: 20,
  },
  price: {
    fontFamily: 'comic-bold',
    paddingTop: 22,
    marginHorizontal: 30,
    fontSize: 20,
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
    margin: 20,
    padding: 8,
    fontFamily: 'lilita-regular',
  }
});
export default styles;
