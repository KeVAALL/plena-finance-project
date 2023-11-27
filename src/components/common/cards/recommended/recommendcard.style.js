import {StyleSheet} from 'react-native';

import {COLORS, FONT, SHADOWS, SIZES} from '../../../../constants';
import {CollapsedItem} from 'react-native-paper/lib/typescript/components/Drawer/Drawer';

const styles = StyleSheet.create({
  container: (selectedJob, item) => ({
    width: 200,
    height: 250,
    // padding: SIZES.xLarge,
    backgroundColor: COLORS.gray10,
    borderRadius: SIZES.medium,
    justifyContent: 'flex-start',
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  }),
  logoContainer: (selectedJob, item) => ({
    width: '100%',
    height: '50%',
    // backgroundColor: selectedJob === item.job_id ? '#FFF' : COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: 'center',
    alignItems: 'center',
  }),
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
    // marginTop: SIZES.small,
    paddingHorizontal: SIZES.large,
    paddingVertical: SIZES.small / 1.5,
  },
  itemName: (selectedJob, item) => ({
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray20,
    // color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
  }),
  infoWrapper: {
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  publisher: (selectedJob, item) => ({
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
  }),
  location: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: '#B3AEC6',
  },
});

export default styles;
