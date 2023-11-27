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

const Stack = createNativeStackNavigator();

function App() {
  const [showTabBar, setShowTabBar] = useState(true);
  // const navigation = useNavigation();

  return (
    <Provider store={store}>
      <Fragment>
        <PaperProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="App"
                options={{headerShown: false, headerShadowVisible: false}}>
                {props => <Tabs />}
              </Stack.Screen>

              <Stack.Screen
                name="ProductDetail"
                options={{
                  headerShadowVisible: false,
                  headerShown: true,
                  headerTitle: '',
                  headerShown: true,
                  headerStyle: {
                    elevation: 0,
                  },
                  contentStyle: {backgroundColor: '#fff'},
                }}>
                {props => <ProductDetails />}
              </Stack.Screen>
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </Fragment>
    </Provider>
  );
}

export default App;
// headerLeft: () => (
//   // <HStack
//   //   spacing={10}
//   //   style={{padding: 10, alignItems: 'center'}}>
//   <ScreenHeaderBtn
//     iconUrl={icons.back}
//     handlePress={() => {
//       navigation.navigate('Home');
//     }}
//     dimension={20}
//   />
// ),
// headerRight: () => (
//   <ScreenHeaderBtn
//     iconUrl={icons.cart}
//     handlePress={() => {
//       navigation.navigate('Cart');
//     }}
//     dimension={35}
//   />
// ),
