import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { COLOR_PRIMARY, COLOR_SECONDARY } from '../../../utils/constants/color';
import { IconType } from '../../../utils/constants/interfaces';

export default ({ active }: IconType) => {
  return (
    <Svg width={32} height={32} fill={active ? COLOR_PRIMARY : 'none'}>
      <Path
        d="m4 12 12-9.333L28 12v14.667a2.667 2.667 0 0 1-2.667 2.666H6.667A2.667 2.667 0 0 1 4 26.667V12Z"
        stroke={active ? COLOR_PRIMARY : COLOR_SECONDARY}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 29.333V16h8v13.333"
        stroke={active ? COLOR_PRIMARY : COLOR_SECONDARY}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
