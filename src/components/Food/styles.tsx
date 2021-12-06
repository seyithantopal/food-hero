import { StyleSheet } from 'react-native';
import {
  COLOR_PRIMARY,
  COLOR_FOOD_NAME,
  COLOR_FOOD_BACKGROUND,
  COLOR_FOOD_SHADOW,
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
      shadowColor: COLOR_FOOD_SHADOW,
      shadowOpacity: 1,
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowRadius: 0,
    },
    onBox: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
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
