import {Image, TouchableOpacity, View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './screenheader.style';
import {COLORS, FONT, SIZES} from '../../constants';

const ScreenHeaderBtn = ({iconUrl, dimension, handlePress, isCart}) => {
  const cartItems = useSelector(state => state.cart);

  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
      />
      {isCart && (
        <View
          style={{
            width: SIZES.large,
            height: SIZES.large,
            borderRadius: 10,
            backgroundColor: COLORS.white,
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 2,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: COLORS.primary,
            borderWidth: 0.5,
          }}>
          <Text style={{fontFamily: FONT.regular, color: COLORS.black100}}>
            {cartItems.data.length}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
