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
    marginTop: "35%",
    marginBottom: 25,
  },
  otpButton: {
    backgroundColor: '#008037',
    borderRadius: 5,
    height: 45,
    marginTop: "5%",
    marginLeft: "35%",
    marginRight: "35%"
  },
  submitButton: {
    backgroundColor: '#008037',
    borderRadius: 5,
    height: 45,
    marginTop: "10%",
    marginLeft: "35%",
    marginRight: "35%"
  },
  submitPartnerButton: {
    backgroundColor: '#fdc400',
    borderRadius: 5,
    height: 45,
    marginTop: "20%",
    marginLeft: "25%",
    marginRight: "25%"
  },
  OtpInput: {
    height: 43,
    fontSize: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    marginLeft: "28%",
    marginRight: "28%",
    marginTop: "15%",
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center'
  },
  // otpBoxesContainer: {
  //   flexDirection: 'row',
  //   marginTop: 35,
  //   textAlign: 'center',
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // },
  // otpBox: {
  //   padding: 10,
  //   marginRight: 10,
  //   borderWidth: 1,
  //   borderColor: '#eaeaea',
  //   height: 45,
  //   width: 45,
  //   margin: 10,
  //   textAlign: 'center',
  //   alignItems: 'center',
  // },
  header: {
    width: 400,
    height: 120,
  },
  head: {
    marginTop: 0,
    position: 'absolute',
    alignSelf: 'center'
  }
});

export default styles;
