import { StyleSheet } from 'react-native';
import { COLOR_BACKGROUND } from '../../utils/constants/color';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLOR_BACKGROUND,
    padding: 30,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});
