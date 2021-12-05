import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { COLOR_PRIMARY, COLOR_SECONDARY } from '../../../utils/constants/color';
import { IconType } from '../../../utils/constants/interfaces';

export default ({ active }: IconType) => {
  return (
    <Svg width={32} height={32} fill={active ? COLOR_PRIMARY : 'none'}>
      <Path
        d="M27.787 6.147a7.333 7.333 0 0 0-10.374 0L16 7.56l-1.413-1.413A7.335 7.335 0 0 0 4.213 16.52l1.414 1.413L16 28.307l10.373-10.374 1.414-1.413a7.333 7.333 0 0 0 0-10.373v0Z"
        stroke={active ? COLOR_PRIMARY : COLOR_SECONDARY}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
