import { StyleSheet } from 'react-native';
import {
  COLOR_PRIMARY,
  COLOR_FOOD_NAME,
  COLOR_FOOD_BACKGROUND,
} from '../../utils/constants/color';

export default (
  BOX_WIDTH?: number,
  CELL_WIDTH?: number,
  CELL_HEIGHT?: number,
  SPACING?: number,
) =>
  StyleSheet.create({
    foodWrapper: {
      backgroundColor: COLOR_FOOD_BACKGROUND,
      width: CELL_WIDTH,
      height: CELL_HEIGHT,
      margin: SPACING,
      marginTop: 50,
      borderRadius: 30,
    },
    onBox: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '100%',
      marginTop: -55,
    },
    foodName: {
      fontFamily: 'SF-Pro-Rounded-Bold',
      fontSize: 22,
      color: COLOR_FOOD_NAME,
      width: 130,
      marginTop: 20,
      textAlign: 'center',
    },
    foodPrice: {
      fontFamily: 'SF-Pro-Rounded-Bold',
      fontSize: 17,
      color: COLOR_PRIMARY,
      marginTop: 10,
    },
    foodImage: {
      width: 165,
      height: 165,
    },
});
