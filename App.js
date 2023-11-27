/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Fragment, useState} from 'react';
import {View} from 'react-native';

import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PaperProvider} from 'react-native-paper';
import {HStack} from '@react-native-material/core';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {COLORS, icons} from './src/constants';

import Tabs from './src/screens/tabs/tabs';
import ScreenHeaderBtn from './src/components/header/HeaderBtn';
import ProductDetails from './src/screens/ProductDetail/productDetail';
import AppNavigator from './AppNavigator';

const Stack = createNativeStackNavigator();

function App() {
  const [showTabBar, setShowTabBar] = useState(true);
  // const navigation = useNavigation();

  return (
    <Provider store={store}>
      <Fragment>
        <PaperProvider>
          <AppNavigator />
        </PaperProvider>
      </Fragment>
    </Provider>
  );
}

export default App;
