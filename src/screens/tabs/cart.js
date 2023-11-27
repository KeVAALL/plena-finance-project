import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {COLORS, FONT, SIZES, icons} from '../../constants';
import {HStack, VStack} from '@react-native-material/core';
import {
  addItemToCart,
  reduceItemFromCart,
  removeItemFromCart,
} from '../../redux/slices/CartSlice';
import CheckoutLayout from '../../components/common/checkoutLayout';

const Cart = () => {
  const items = useSelector(state => state.cart);
  const [cartItems, setCartItems] = useState([]);

  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(items.data);
    setCartItems(items.data);
  }, [items]);

  const getTotal = () => {
    let total = 0;
    cartItems.map(item => {
      total = total + item.qty * item.price;
    });
    return total.toFixed(0);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              activeOpacity={1}
              style={styles.productItem}
              onPress={() => {
                navigation.navigate('ProductDetail', {data: item});
              }}>
              <Image source={{uri: item.thumbnail}} style={styles.itemImage} />
              <VStack style={{gap: SIZES.small - 5}}>
                <Text style={styles.name}>
                  {item.title.length > 25
                    ? item.title.substring(0, 25) + '...'
                    : item.title}
                </Text>
                <HStack style={{alignItems: 'center', gap: SIZES.small}}>
                  <Text style={styles.price}>$ {item.price}</Text>
                  <View style={styles.priceChip}>
                    <Text style={styles.chipText}>-10%</Text>
                  </View>
                </HStack>
                <Text style={styles.desc}>
                  {item.description.length > 30
                    ? item.description.substring(0, 30) + '...'
                    : item.description}
                </Text>
                <View style={styles.qtyview}>
                  <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                      if (item.qty > 1) {
                        dispatch(reduceItemFromCart(item));
                      } else {
                        dispatch(removeItemFromCart(index));
                      }
                    }}>
                    <Text
                      style={{
                        fontSize: SIZES.large,
                        fontFamily: FONT.extraBold,
                        color: COLORS.gray45,
                      }}>
                      -
                    </Text>
                  </TouchableOpacity>
                  <Text style={styles.qty}>{item.qty}</Text>
                  <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                      dispatch(addItemToCart(item));
                    }}>
                    <Text
                      style={{
                        fontSize: SIZES.large,
                        fontFamily: FONT.extraBold,
                        color: COLORS.gray45,
                      }}>
                      +
                    </Text>
                  </TouchableOpacity>
                </View>
              </VStack>
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
      {cartItems.length < 1 && (
        <View style={styles.noItems}>
          <Image source={icons.emptyCart} style={styles.itemImage} />
          <Text
            style={{
              fontFamily: FONT.bold,
              fontSize: SIZES.medium,
              color: COLORS.black90,
            }}>
            No Items in Cart!
          </Text>
        </View>
      )}
      {cartItems.length > 0 && (
        <CheckoutLayout items={cartItems.length} total={getTotal()} />
      )}
    </View>
  );
};

export default Cart;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SIZES.medium,
    // height: Dimensions.get('window').height + 200,
  },
  productItem: {
    width: Dimensions.get('window').width,
    backgroundColor: '#fff',
    paddingVertical: SIZES.xLarge,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    borderBottomColor: COLORS.gray10,
    borderBottomWidth: 1.5,
  },
  itemImage: {
    width: 100,
    height: 100,
  },
  name: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    marginLeft: SIZES.large,
    color: COLORS.gray45,
  },
  desc: {
    fontSize: SIZES.small + 1,
    fontFamily: FONT.regular,
    marginLeft: SIZES.large,
    color: COLORS.gray60,
  },
  price: {
    fontSize: SIZES.large,
    fontFamily: FONT.bold,
    marginLeft: SIZES.large,
    color: COLORS.black100,
  },
  priceChip: {
    height: SIZES.xLarge + 2,
    width: 70,
    backgroundColor: COLORS.gray10,
    borderRadius: SIZES.small,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chipText: {
    fontFamily: FONT.extraBold,
    fontSize: SIZES.small + 1,
    color: COLORS.primary,
  },
  qtyview: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZES.small - 2,
    marginLeft: SIZES.small - 2,
  },
  btn: {
    width: 35,
    height: 35,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.gray20,
    borderRadius: SIZES.small,
    marginLeft: SIZES.small - 2,
  },
  qty: {
    fontFamily: FONT.bold,
    marginLeft: SIZES.large,
    marginRight: SIZES.medium - 2,
    fontSize: SIZES.medium,
    color: COLORS.gray45,
  },
  noItems: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
});
