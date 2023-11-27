import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../../constants';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const CustomButton = ({bg, title, onClick, color}) => {
  return (
    <TouchableOpacity
      style={[styles.btn, {backgroundColor: bg}]}
      onPress={() => {
        onClick();
      }}>
      <Text
        style={{
          color: color,
          fontSize: SIZES.medium,
          fontFamily: 'Manrope-SemiBold',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
const styles = StyleSheet.create({
  btn: {
    width: Dimensions.get('window').width / 2.5,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 20,
    borderColor: COLORS.primary,
    borderWidth: 1,
  },
});
