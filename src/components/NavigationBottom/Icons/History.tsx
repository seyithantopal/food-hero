import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { COLOR_PRIMARY, COLOR_SECONDARY } from '../../../utils/constants/color';
import { IconType } from '../../../utils/constants/interfaces';

export default ({ active }: IconType) => {
  return (
    <Svg width={32} height={32} fill={active ? COLOR_PRIMARY : 'none'}>
      <Path
        opacity={0.9}
        d="M17.327 4C10.693 4 5.333 9.373 5.333 16h-4l5.194 5.193.093.194L12 16H8c0-5.153 4.18-9.333 9.333-9.333 5.154 0 9.334 4.18 9.334 9.333 0 5.153-4.18 9.333-9.334 9.333a9.295 9.295 0 0 1-6.593-2.74L8.853 24.48A11.924 11.924 0 0 0 17.327 28c6.633 0 12.006-5.373 12.006-12S23.96 4 17.327 4ZM16 10.667v6.666l5.707 3.387.96-1.62L18 16.333v-5.666h-2Z"
        fill={active ? COLOR_PRIMARY : COLOR_SECONDARY}
      />
    </Svg>
  );
};
