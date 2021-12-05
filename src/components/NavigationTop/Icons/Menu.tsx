import React from 'react';
import Svg, { Path } from 'react-native-svg';

export default () => {
  return (
    <Svg width={28} height={28} fill="none">
      <Path
        d="M4 7a1 1 0 0 1 1-1h19a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1ZM4 14a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1ZM5 20a1 1 0 1 0 0 2h17a1 1 0 1 0 0-2H5Z"
        fill="#000"
      />
    </Svg>
  );
};
