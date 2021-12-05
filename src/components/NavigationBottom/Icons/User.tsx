import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { COLOR_PRIMARY, COLOR_SECONDARY } from '../../../utils/constants/color';
import { IconType } from '../../../utils/constants/interfaces';

export default ({ active }: IconType) => {
  return (
    <Svg width={32} height={32} fill={active ? COLOR_PRIMARY : 'none'}>
      <Path
        d="M26.667 28v-2.667A5.333 5.333 0 0 0 21.333 20H10.667a5.333 5.333 0 0 0-5.334 5.333V28M16 14.667A5.333 5.333 0 1 0 16 4a5.333 5.333 0 0 0 0 10.667Z"
        stroke={active ? COLOR_PRIMARY : COLOR_SECONDARY}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
