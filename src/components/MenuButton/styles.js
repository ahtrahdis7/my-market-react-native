import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  btnClickContain: {
    flexDirection: 'row',
    padding: 5,
    marginTop: 5,
    marginBottom: 5
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  btnIcon: {
    height: 25,
    width: 25
  },
  btnText: {
    fontSize: 20,
    fontFamily:'comic-bold',
    fontWeight:'500',
    marginLeft: 15,
    marginTop: 4
  }
});

export default styles;
