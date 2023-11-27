import {useState} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';

import {COLORS, icons, SIZES} from '../../constants';
// import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components';
import Welcome from '../../components/home/welcome/Welcome';
import Recommended from '../../components/home/recommended/recommended';
import Discount from '../../components/home/discount/Discount';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            // padding: SIZES.medium,
          }}>
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                // router.push(`/search/${searchTerm}`);
              }
            }}
          />

          <Discount />
          <Recommended />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
