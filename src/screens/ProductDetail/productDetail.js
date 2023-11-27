import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {addItemToWishList} from '../../redux/slices/WishlistSlice';
import {addItemToCart} from '../../redux/slices/CartSlice';
import {COLORS, FONT, SIZES, icons} from '../../constants';
import CustomButton from '../../components/common/button/CustomButton';
import {HStack, VStack} from '@react-native-material/core';
import Slider from '../../components/productDetail/Slider';
import ScreenHeaderBtn from '../../components/header/HeaderBtn';

function ProductDetails() {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  useEffect(() => {
    console.log(route.params.data);
    navigation.setOptions({
      headerLeft: () => (
        <HStack spacing={10} style={{alignItems: 'center'}}>
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
        <ScreenHeaderBtn
          iconUrl={icons.cart}
          handlePress={() => {
            navigation.navigate('Cart');
          }}
          dimension={35}
          isCart
        />
      ),
    });
  });

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.brand}>{route.params.data.brand}</Text>
        <Text style={styles.title} numberOfLines={1}>
          {route.params.data.title}
        </Text>
        <Text style={styles.rating}>Rating: {route.params.data.rating}/ 5</Text>

        <View
          style={{
            marginTop: SIZES.xLarge,
            marginBottom: SIZES.large,
            paddingRight: SIZES.large,
          }}>
          <Slider Slides={route.params.data.images} />
        </View>

        <TouchableOpacity
          style={styles.wishlistBtn}
          onPress={() => {
            dispatch(addItemToWishList(route.params.data));
          }}>
          <Image source={icons.wishlist} style={styles.icon} />
        </TouchableOpacity>

        <VStack style={{gap: SIZES.small - 1}}>
          <HStack style={{alignItems: 'center', gap: SIZES.large}}>
            <Text style={styles.price}>$ {route.params.data.price}</Text>

            <View style={styles.chip}>
              <Text style={styles.chipText}>10% OFF</Text>
            </View>
            {/* <View style={styles.qtyView}>
            <TouchableOpacity
            style={styles.btn}
            onPress={() => {
                if (qty > 1) {
                    setQty(qty - 1);
                }
            }}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>-</Text>
            </TouchableOpacity>
            <Text style={styles.qty}>{qty}</Text>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                  setQty(qty + 1);
                }}>
                <Text style={{fontSize: 18, fontWeight: '600'}}>+</Text>
            </TouchableOpacity>
          </View> */}
          </HStack>

          <HStack style={{gap: SIZES.large}}>
            <CustomButton
              bg={COLORS.white}
              title={'Add To Cart'}
              color={COLORS.primary}
              onClick={() => {
                console.log('click');
                dispatch(
                  addItemToCart({
                    ...route.params.data,
                    qty: qty,
                  }),
                );
              }}
            />
            <CustomButton
              bg={COLORS.secondary}
              title={'Buy Now'}
              color={COLORS.white}
            />
          </HStack>
          <VStack
            style={{
              gap: SIZES.small - 5,
              paddingRight: SIZES.large,
              marginTop: SIZES.large,
            }}>
            <Text style={styles.details}>Details</Text>
            <Text style={styles.desc}>{route.params.data.description}</Text>
          </VStack>
        </VStack>
      </ScrollView>
    </View>
  );
}

export default ProductDetails;
const styles = StyleSheet.create({
  container: {
    paddingLeft: SIZES.large,
    // paddingBottom: SIZES.xxLarge,
  },
  banner: {
    width: '100%',
    height: 300,
    resizeMode: 'center',
  },
  brand: {
    fontSize: SIZES.xxLarge + 12,
    fontFamily: FONT.regular,
    color: COLORS.black100,
  },
  title: {
    fontSize: SIZES.xxLarge + 12,
    fontFamily: FONT.extraBold,
    color: COLORS.black100,
  },
  rating: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: COLORS.tertiary,
  },
  details: {
    fontSize: SIZES.large,
    fontFamily: FONT.semiBold,
    color: COLORS.black90,
  },
  desc: {
    height: SIZES.xxLarge + 45,
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: '#85929E',
  },
  price: {
    fontSize: SIZES.large,
    color: COLORS.secondary,
    fontFamily: FONT.regular,
  },
  chip: {
    height: SIZES.large + 6,
    width: 90,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.xxLarge,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chipText: {
    fontFamily: FONT.regular,
    fontSize: SIZES.small + 1,
    color: COLORS.white,
  },
  wishlistBtn: {
    position: 'absolute',
    right: 40,
    top: 200,
    backgroundColor: '#E2DFDF',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 20,
  },
  icon: {
    width: 20,
    height: 20,
  },
  qtyView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 20,
  },
  btn: {
    padding: 5,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderRadius: 10,
    marginLeft: 10,
  },
  qty: {
    marginLeft: 10,
    fontSize: 18,
  },
});
