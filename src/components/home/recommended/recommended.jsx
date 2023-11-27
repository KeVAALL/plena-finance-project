import {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import styles from './recommended.style';
import {COLORS, SIZES} from '../../../constants';
import {addProducts} from '../../../redux/slices/ProductsSlice';
import RecommendedCard from '../../common/cards/recommended/RecommendCard';

const Recommended = () => {
  const [products, setProducts] = useState([]);
  const [selectedJob, setSelectedJob] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = () => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(json => {
        console.log(json.products);
        setProducts(json.products);
        setIsLoading(false);
        json.products.map(item => {
          item.qty = 1;
        });
        dispatch(addProducts(json.products));
      });
  };

  const handleCardPress = item => {
    navigation.navigate('ProductDetail', {data: item});
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Recommended</Text>
        {/* <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity> */}
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} height={250} />
        ) : (
          <FlatList
            data={products}
            initialNumToRender={10}
            renderItem={({item, index}) => (
              <RecommendedCard
                index={index}
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={item => item.id}
            contentContainerStyle={{columnGap: SIZES.medium}}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  );
};

export default Recommended;
