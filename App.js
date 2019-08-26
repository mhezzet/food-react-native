import { createStackNavigator, createAppContainer } from 'react-navigation'
import SearchScreen from './src/screens/SearchScreen'
import RestaurantScreen from './src/screens/RestaurantScreen'

const AppNavigator = createStackNavigator(
  {
    Search: SearchScreen,
    Restaurant: RestaurantScreen
  },
  {
    intialialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search'
    }
  }
)

export default createAppContainer(AppNavigator)
