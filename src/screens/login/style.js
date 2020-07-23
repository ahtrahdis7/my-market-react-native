import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  loginScreenContainer: {
    flex: 1,
  },
  loginFormView: {
    flex: 1,
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 16,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 200,
    marginBottom: 25,
  },
  otpButton: {
    backgroundColor: '#fdc400',
    borderRadius: 5,
    height: 45,
    marginTop: 10,
    marginLeft: 140,
    marginRight: 140
  },
  submitButton: {
    backgroundColor: '#fdc400',
    borderRadius: 5,
    height: 45,
    marginTop: 25,
    marginLeft: 150,
    marginRight: 150
  },
  submitPartnerButton: {
    backgroundColor: '#008037',
    borderRadius: 5,
    height: 45,
    marginTop: 100,
    marginLeft: 100,
    marginRight: 100
  },
  otpinput: {
    height: 43,
    fontSize: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    paddingLeft: 20,
    marginLeft: 100,
    marginRight: 100,
    marginTop: 25,
    marginBottom: 5,
    alignItems: 'center',
  },
  otpBoxesContainer: {
    flexDirection: 'row',
    marginTop: 50,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  otpBox: {
    padding: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#eaeaea',
    height: 45,
    width: 45,
    margin: 10,
    textAlign: 'center',
    alignItems: 'center',
  },
  header: {
    width: 400,
    height: 180,
  },
  head: {
    marginTop: 0,
    position: 'absolute',
    alignSelf: 'center'
  }
});

export default styles;
