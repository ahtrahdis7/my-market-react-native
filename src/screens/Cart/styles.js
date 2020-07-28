import { StyleSheet } from 'react-native';

import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  items: {
    height: "77%"
  },
  checkoutbtn: {
    flexDirection: "row",
    backgroundColor: "#008037",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
    shadowOffset: { width: 1, height: 2 },
    shadowColor: "#000",
    shadowOpacity: 0.4,
    elevation: 4,
    paddingVertical: 10
  },
  checkoutcontainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "flex-end",
    paddingBottom: 15
  },
  checkout: {
    fontSize: 18,
    fontWeight: "500",
    color: "white"
  },
  totalcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  cartitemcontainer: {
    height: wp("28%"),
    width: wp("100%"),
    backgroundColor: "white",
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 14,
    marginBottom: 5
  },
  imagecontainer: {
    width: wp("26%"),
    height: wp("26%"),
    marginRight: 10
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain"
  },
  itemdetails: {
    flex: 2,
    alignSelf: "flex-start",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  namecontainer: {
    flex: 3,
    justifyContent: "space-around"
  },
  itemname: {
    fontSize: 18,
    fontWeight: "bold"
  },
  pricecontainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'column'
  },
  delete: {
    flexDirection: "column",
    justifyContent: 'center',
    paddingTop: 10
  },
  price: {
    fontSize: 18,
    fontWeight: "bold"
  }
});

export default styles;
