import { createAppContainer } from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createStackNavigator} from 'react-navigation-stack'

import HomeScreen from '../screens/Home/HomeScreen';
import CategoriesScreen from '../screens/Categories/CategoriesScreen';
import ItemDetailsScreen from '../screens/ItemDetails/ItemDetailsScreen';
import ItemsListScreen from '../screens/ItemsList/ItemsListScreen';
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';
import CartScreen from '../screens/Cart/CartScreen';


const MainNavigator = createStackNavigator(
  {
    
    Home: HomeScreen,
    Categories: CategoriesScreen,
    ItemDetails: ItemDetailsScreen,
    ItemsList: ItemsListScreen,
    Cart: CartScreen,
  },
  {
    initialRouteName: 'Home',
    // headerMode: 'float',
    
    defaulfNavigationOptions: ({ navigation }) => ({
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        flex: 1,
      }
    })
  }
); 

const DrawerStack = createDrawerNavigator(
  {
    Main: MainNavigator
  },
  {
    hideStatusBar: true,
    drawerPosition: 'left',
    initialRouteName: 'Main',
    drawerWidth: 250,
    contentComponent: DrawerContainer
  }
);

export default AppContainer = createAppContainer(DrawerStack);

console.disableYellowBox = true;