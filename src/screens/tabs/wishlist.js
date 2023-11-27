import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {COLORS, FONT, SIZES, icons} from '../../constants';
import {HStack, VStack} from '@react-native-material/core';

const Wishlist = () => {
  const items = useSelector(state => state.wishlist);
  const [wishlistItems, setWishlistItems] = useState(items.data);
  const uniqueData = [...new Set(wishlistItems.map(item => item.id))].map(
    id => {
      return wishlistItems.find(item => item.id === id);
    },
  );
  const navigation = useNavigation();
  useEffect(() => {
    setWishlistItems(items.data);
  });
  return (
    <View style={styles.container}>
      <FlatList
        data={uniqueData}
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
                  {item.description.length > 28
                    ? item.description.substring(0, 28) + '...'
                    : item.description}
                </Text>
              </VStack>
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
      {wishlistItems.length < 1 && (
        <View style={styles.noItems}>
          <Image source={icons.brokenHeart} style={styles.itemImage} />
          <Text
            style={{
              fontFamily: FONT.bold,
              fontSize: SIZES.medium,
              color: COLORS.black90,
            }}>
            No Items in Wishlist!
          </Text>
        </View>
      )}
    </View>
  );
};

export default Wishlist;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SIZES.medium,
    // backgroundColor: '#ff',
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
  noItems: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
});
