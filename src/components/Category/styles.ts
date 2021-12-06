import { StyleSheet } from 'react-native';
import {
  COLOR_PRIMARY,
  COLOR_CATEGORY_NAME,
} from '../../utils/constants/color';

export default StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 40,
    marginTop: 10,
  },
  categoryName: {
    marginRight: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 0,
    fontFamily: 'SF-Pro-Rounded-Regular',
    fontSize: 17,
    color: COLOR_CATEGORY_NAME,
  },
  categoryNameActive: {
    color: COLOR_PRIMARY,
    borderBottomColor: COLOR_PRIMARY,
    borderBottomWidth: 3,
  },
});
