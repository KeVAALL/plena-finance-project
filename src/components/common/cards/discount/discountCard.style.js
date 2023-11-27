import {StyleSheet} from 'react-native';

import {COLORS, FONT, SHADOWS, SIZES} from '../../../../constants';
import {CollapsedItem} from 'react-native-paper/lib/typescript/components/Drawer/Drawer';

const discountStyles = StyleSheet.create({
  container: {
    width: 300,
    height: 150,
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    width: '40%',
    height: '50%',
    // backgroundColor: selectedJob === item.job_id ? '#FFF' : COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: SIZES.medium,
    borderTopRightRadius: SIZES.medium,
  },
  itemPrice: {
    fontSize: SIZES.large,
    fontFamily: FONT.bold,
    color: COLORS.black90,
    // marginBottom: SIZES.small,
  },
  infoContainer: {
    paddingHorizontal: SIZES.large,
    paddingVertical: SIZES.small / 1.5,
  },
  get: {
    fontSize: SIZES.xLarge,
    fontFamily: FONT.medium,
    color: COLORS.lightWhite,
  },
  infoWrapper: {
    flexDirection: 'row',
    marginTop: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  percent: {
    fontSize: SIZES.xxLarge,
    color: COLORS.lightWhite,
    fontFamily: FONT.extraBold,
  },
  order: {
    fontSize: SIZES.medium,
    fontFamily: FONT.extraLight,
    color: COLORS.lightWhite,
  },
});

export default discountStyles;
