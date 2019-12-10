import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Question from './src/screens/Question';
import Category from './src/screens/Category';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Question,
      Category,
    },
    {
      initialRouteName: 'Category',
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#0011ff',
        },
        headerTintColor: '#ffffff',
      },
      mode: 'modal',
    },
  ),
);

export default Routes;
