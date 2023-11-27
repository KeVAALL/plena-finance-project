import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {VStack} from '@react-native-material/core';
import {COLORS, FONT, SIZES} from '../../constants';
import {CollapsedItem} from 'react-native-paper/lib/typescript/components/Drawer/Drawer';

const CheckoutLayout = ({total, items}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.tab}>
        <VStack style={{alignItems: 'flex-start'}}>
          <Text style={styles.total}>Total</Text>
          <Text style={styles.price}>$ {total}</Text>
        </VStack>
      </View>
      <View style={styles.buttonTab}>
        <TouchableOpacity
          style={styles.checkout}
          //   onPress={() => {
          //     navigation.navigate('Checkout');
          //           }}
        >
          <Text
            style={{
              color: COLORS.white,
              fontFamily: FONT.bold,
              fontSize: SIZES.small + 1,
            }}>
            CHECKOUT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckoutLayout;
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 70,
    height: 80,
    width: Dimensions.get('window').width,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    borderTopColor: COLORS.gray10,
    borderTopWidth: 1,
    marginTop: SIZES.small,
    // shadowOpacity: 0.4,
    // shadowRadius: 6,
    // shadowOffset: {
    //   width: 0,
    //   height: -10,
    // },
    // shadowColor: '#000',
    // elevation: 10,
  },
  tab: {
    width: '40%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTab: {
    width: '60%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkout: {
    width: '80%',
    height: '60%',
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium - 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  total: {
    fontFamily: FONT.extraBold,
    fontSize: SIZES.large - 2,
    color: COLORS.gray20,
  },
  price: {
    fontSize: SIZES.large,
    fontFamily: FONT.extraBold,
    color: COLORS.black100,
  },
});
