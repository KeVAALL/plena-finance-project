import {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import styles from './Discount.style';
import {COLORS, SIZES, icons} from '../../../constants';
import {addProducts} from '../../../redux/slices/ProductsSlice';
import RecommendedCard from '../../common/cards/recommended/RecommendCard';
import discountStyles from '../../common/cards/discount/discountCard.style';
import {HStack} from '@react-native-material/core';

const Discount = () => {
  const [selectedJob, setSelectedJob] = useState();
  const data = [
    {
      id: 1,
      img: icons.device,
      percent: '50%',
      description: 'On first 03 order',
    },
    {
      id: 2,
      img: icons.wirelessEarphones,
      percent: '30%',
      description: 'On wireless earphones',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.cardsContainer}>
        <FlatList
          data={data}
          // initialNumToRender={10}
          renderItem={({item, index}) => (
            <HStack
              key={index}
              style={discountStyles.container}
              // onPress={() => handleCardPress(item)}
            >
              <TouchableOpacity style={discountStyles.logoContainer}>
                <Image
                  source={item.img}
                  resizeMode="contain"
                  style={discountStyles.logoImage}
                />
              </TouchableOpacity>

              <View style={discountStyles.infoContainer}>
                <Text style={discountStyles.get}>Get</Text>
                <Text style={discountStyles.percent}>{item.percent} OFF</Text>
                {/* <View style={discountStyles.infoWrapper}> */}
                <Text style={discountStyles.order}>{item.description}</Text>
                {/* </View> */}
              </View>
            </HStack>
          )}
          keyExtractor={item => item.id}
          contentContainerStyle={{columnGap: SIZES.large}}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Discount;
