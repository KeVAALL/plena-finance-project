const COLORS = {
  primary: '#153075',
  secondary: '#2A4BA0',
  tertiary: '#F9B023',

  gray60: '#606D76',
  gray45: '#606D76',
  gray20: '#606D76',
  gray10: '#E7ECF0',
  gray1: '#F8F9FB',

  black100: '#1B262E',
  black90: '#354349',

  white: '#FFF',
  lightWhite: '#FAFAFC',
};

const FONT = {
  light: 'Manrope-Light',
  extraLight: 'Manrope-ExtraLight',
  regular: 'Manrope-Regular',
  medium: 'Manrope-Medium',
  semiBold: 'Manrope-SemiBold',
  bold: 'Manrope-Bold',
  extraBold: 'Manrope-ExtraBold',
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export {COLORS, FONT, SIZES, SHADOWS};
