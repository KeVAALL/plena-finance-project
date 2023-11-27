import {StyleSheet} from 'react-native';

import {FONT, SIZES, COLORS} from '../../../constants';

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.small,
    paddingLeft: SIZES.medium,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: SIZES.xLarge,
    fontFamily: FONT.medium,
    color: COLORS.black90,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray10,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
  },
});

export default styles;
