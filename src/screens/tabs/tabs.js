import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {HStack} from '@react-native-material/core';
import ScreenHeaderBtn from '../../components/header/HeaderBtn';
import {COLORS, SIZES, icons} from '../../constants';
import Home from './home';
import Wishlist from './wishlist';
import Cart from './cart';
import HeaderHeading from '../../components/header/HeaderHeading';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  const [showTabBar, setShowTabBar] = useState(true);
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      mode="modal"
      sceneContainerStyle={{backgroundColor: COLORS.white}}
      screenOptions={{
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveBackgroundColor: COLORS.white,
        tabBarStyle: {
          position: 'absolute',
          elevation: 0,
          backgroundColor: COLORS.white,
          height: 70,
          display: showTabBar ? 'flex' : 'none',
        },
      }}>
      <Tab.Screen
        name="Home"
        children={() => <Home />}
        options={{
          headerTitle: '',
          headerShown: true,
          headerStyle: {
            elevation: 0,
            backgroundColor: '#2A4BA0',
          },
          headerLeft: () => <HeaderHeading heading="Hey, Keval" />,
          headerRight: () => (
            <View style={{paddingRight: SIZES.medium}}>
              <ScreenHeaderBtn
                iconUrl={icons.shoppingBag}
                dimension={35}
                handlePress={() => {
                  navigation.navigate('Cart');
                }}
                isCart
              />
            </View>
          ),
          tabBarIcon: ({focused}) => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                gap: 5,
              }}>
              <Image
                source={icons.userFocus}
                resizeMode="cover"
                style={{
                  height: 30,
                  width: 30,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        children={() => <Wishlist />}
        options={{
          headerTitle: '',
          headerShown: true,
          headerStyle: {
            elevation: 0,
          },
          headerLeft: () => <HeaderHeading heading="Wishlist" />,
          headerRight: () => (
            <View style={{padding: 10}}>
              <ScreenHeaderBtn
                iconUrl={icons.shoppingBagBlack}
                dimension={30}
                handlePress={() => {
                  navigation.navigate('Cart');
                }}
                isCart
              />
            </View>
          ),
          tabBarIcon: ({focused}) => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                gap: 5,
              }}>
              <Image
                source={icons.colorWishlist}
                resizeMode="cover"
                style={{
                  height: 30,
                  width: 30,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        children={() => <Cart />}
        options={{
          headerTitle: '',
          headerShown: true,
          headerStyle: {
            elevation: 0,
          },
          headerLeft: () => (
            <HStack spacing={10} style={{padding: 10, alignItems: 'center'}}>
              <ScreenHeaderBtn
                iconUrl={icons.back}
                dimension={20}
                handlePress={() => {
                  navigation.navigate('Home');
                }}
              />
            </HStack>
          ),
          headerRight: () => (
            <View style={{padding: 10}}>
              <ScreenHeaderBtn
                iconUrl={icons.shoppingBagBlack}
                dimension={30}
                handlePress={() => {
                  navigation.navigate('Cart');
                }}
                isCart
              />
            </View>
          ),
          tabBarIcon: ({focused}) => (
            // focused ? (
            //         <View
            //           style={{
            //             justifyContent: 'center',
            //             alignItems: 'center',
            //             gap: 5,
            //           }}>
            //           <Image
            //             source={require('../images/shopping-cart.png')}
            //             resizeMode="cover"
            //             style={{
            //               height: 30,
            //               width: 30,
            //             }}
            //           />
            //         </View>
            //       )
            // :
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                gap: 5,
              }}>
              <Image
                source={icons.shoppingCartFill}
                resizeMode="cover"
                style={{
                  height: 30,
                  width: 30,
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
