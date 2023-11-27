import {View, Text, TouchableOpacity, Image} from 'react-native';

import styles from './recommendcard.style';

const RecommendedCard = ({index, item, selectedJob, handleCardPress}) => {
  return (
    <TouchableOpacity
      key={index}
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}>
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{
            uri: item.thumbnail,
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <View style={styles.infoContainer}>
        <Text style={styles.itemPrice} numberOfLines={1}>
          $ {item.price}
        </Text>
        <Text style={styles.itemName(selectedJob, item)} numberOfLines={1}>
          {item.brand}
        </Text>
        <View style={styles.infoWrapper}>
          {/* <Text style={styles.publisher(selectedJob, item)}>
            {item?.job_publisher} -
          </Text> */}
          <Text style={styles.location} numberOfLines={2}>
            {item.description.trimStart()}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RecommendedCard;
