import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  categoriesItemContainer: {
    flex: 1,
    margin: 80,
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    borderColor: '#cccccc',
    borderWidth: 2,
    borderRadius: 6,
    paddingLeft: 20,
    paddingRight: 20
  },
  categoriesPhoto: {
    width: '100%',
    height: 155,
    borderRadius: 2,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    shadowColor: 'blue',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 3
  },
  card:{
    borderWidth: 20
  },
  categoriesName: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333',
    marginTop: 8
  },
  categoriesInfo: {
    marginTop: 3,
    marginBottom: 5
  }
});

export default styles;
