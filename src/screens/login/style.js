const React = require("react-native");

const { StyleSheet } = React;

export default {
  containerView: {
    flex: 1,
  },
  loginScreenContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: 40,
    fontWeight: "800",
    marginTop: 60,
    marginBottom: 30,
    textAlign: 'center',
  },
  loginFormView: {
    flex: 1
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
    marginTop: 25,
    marginBottom: 25,
  },
  otpButton: {
    backgroundColor: '#3897f1',
    borderRadius: 5,
    height: 45,
    marginTop: 40,
    marginLeft: 130,
    marginRight: 130
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
    marginTop: 25,
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
  }
};
