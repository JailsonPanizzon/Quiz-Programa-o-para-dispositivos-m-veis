import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {Icon} from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './src/screens/Home';
import Score from './src/screens/Score';
import Category from './src/screens/Category';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Score,
      Category,
    },
    {
      initialRouteName: 'Home',
      defaultNavigationOptions: {
        title: 'Quiz',
        headerBackTitle: <Icon name={'chevron-left'} />,
        headerStyle: {
          backgroundColor: '#1f1fff',
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
      mode: 'modal',
    },
  ),
);

export default Routes;
