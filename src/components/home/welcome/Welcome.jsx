import {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

import styles from './welcome.style';
import {COLORS, icons, SIZES} from '../../../constants';

const jobTypes = ['Laptops', 'Mobiles', 'Perfumes'];

const Welcome = ({searchTerm, setSearchTerm, handleClick}) => {
  const [activeJobType, setActiveJobType] = useState('Full-time');

  return (
    <View
      style={{
        backgroundColor: COLORS.secondary,
        padding: SIZES.medium,
        paddingTop: 0,
        paddingBottom: SIZES.xxLarge,
      }}>
      {/* <View style={styles.container}>
        <Text style={styles.userName}>Hello Adrian</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View> */}

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={text => setSearchTerm(text)}
            placeholder="What are you looking for?"
            placeholderTextColor={COLORS.gray45}
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      {/* <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
              }}>
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{columnGap: SIZES.small}}
          horizontal
        />
      </View> */}
    </View>
  );
};

export default Welcome;
