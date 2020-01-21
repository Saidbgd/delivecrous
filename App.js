import React from 'react';
import { createAppContainer } from 'react-navigation';
import {
  createStackNavigator,
  TransitionPresets
} from 'react-navigation-stack';

import { FontSizeScale } from '@helpers/scales';
import Colors from '@helpers/colors';
import CartButton from '@components/CartButton';
import HomePage from '@pages/HomePage';
import ItemDetailsPage from '@pages/ItemDetailsPage';
import CartRecapPage from '@pages/CartRecapPage';
import SuccessPage from '@pages/SuccessPage';

//
const AppNavigator = createStackNavigator(
  {
    Home: HomePage,
    ItemDetails: ItemDetailsPage,
    CartRecap: CartRecapPage,
    Success: SuccessPage
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Delivecrous',
      headerRight: () => <CartButton />,
      headerTitleAlign: 'center',
      headerStyle: {
        height: 104,
        backgroundColor: Colors.OldLace
      },
      headerTitleStyle: {
        // fontFamily: 'Montserrat',
        fontSize: FontSizeScale(22),
        lineHeight: FontSizeScale(28),
        color: Colors.Gondola
      },
      ...TransitionPresets.SlideFromRightIOS
    }
  }
);

//
export default createAppContainer(AppNavigator);
