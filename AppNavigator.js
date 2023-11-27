import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
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
  );
}
