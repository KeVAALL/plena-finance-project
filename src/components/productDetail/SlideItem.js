import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';
import React from 'react';
import {SIZES} from '../../constants';

const {width, height} = Dimensions.get('screen');

const SlideItem = ({item}) => {
  const translateYImage = new Animated.Value(40);

  Animated.timing(translateYImage, {
    toValue: 0,
    duration: 1000,
    useNativeDriver: true,
    easing: Easing.bounce,
  }).start();

  return (
    <View style={styles.container}>
      <Animated.Image
        source={{uri: item}}
        resizeMode="contain"
        style={[
          styles.image,
          {
            transform: [
              {
                translateY: translateYImage,
              },
            ],
          },
        ]}
      />

      {/* <View style={styles.content}>
        <Text style={styles.title}>Hey</Text>
        <Text style={styles.description}>asasasa</Text>
        <Text style={styles.price}>355</Text>
      </View> */}
    </View>
  );
};

export default SlideItem;

const styles = StyleSheet.create({
  container: {
    width,
    height: 300,
    alignItems: 'center',
  },
  image: {
    // flex: 0.2,
    width: '100%',
    height: '90%',
  },
  // content: {
  //   flex: 0.4,
  //   alignItems: 'center',
  // },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 18,
    marginVertical: 12,
    color: '#333',
  },
  price: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});
