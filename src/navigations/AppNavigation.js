import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from '../screens/Home/HomeScreen';
import CheckoutScreen from '../screens/Checkout/CheckoutScreen';
import ItemDetailsScreen from '../screens/ItemDetails/ItemDetailsScreen';
import ItemsListScreen from '../screens/ItemsList/ItemsListScreen';
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';
import CartScreen from '../screens/Cart/CartScreen';
import AboutScreen from '../screens/About/AboutScreen';
import ContactScreen from '../screens/Contact/ContactScreen';
import LoginScreen from '../screens/login/login';
import OrderDetails from '../screens/OrderDetails/OrderDetailsScreen'
import SearchScreen from '../screens/Search/SearchScreen'
// import MyOrder from '../screens/MyOrder/OrderDetailsScreen'

const screens = {
  Home: HomeScreen,
  Search: SearchScreen,
  ItemDetails: ItemDetailsScreen,
  ItemsList: ItemsListScreen,
  About: AboutScreen,
  Contact: ContactScreen,
  Cart: CartScreen,
  Checkout: CheckoutScreen,
  Login: LoginScreen,
  OrderDetails: OrderDetails,
  // Orders: MyOrder,
};

const MainNavigator = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: '#545454', height: 50, },
    headerTintColor: 'white',
    headerTitleStyle: {
      color: 'white'
    },
    headerForceInset: { top: 'never' },
  }
});

const DrawerStack = createDrawerNavigator(
  {
    Main: MainNavigator
  },
  {
    drawerPosition: 'left',
    initialRouteName: 'Main',
    drawerWidth: 230,
    contentComponent: DrawerContainer,
  }
);

export default AppContainer = createAppContainer(DrawerStack);

console.disableYellowBox = true;

