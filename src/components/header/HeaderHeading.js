import {HStack} from '@react-native-material/core';
import React from 'react';
import {COLORS, SIZES} from '../../constants';
import {Text} from 'react-native';

export default function HeaderHeading({heading}) {
  return (
    <HStack
      spacing={10}
      style={{paddingLeft: SIZES.medium, alignItems: 'center'}}>
      <Text
        style={{
          color: COLORS.black90,
          fontFamily: 'Manrope-Regular',
          fontSize: SIZES.large,
        }}>
        {heading}
      </Text>
    </HStack>
  );
}
