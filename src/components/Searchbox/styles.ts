import { StyleSheet } from 'react-native';
import {
  COLOR_SEARCHBOX_BACKGROUND,
  COLOR_SEARCHBOX_TEXT,
} from '../../utils/constants/color';

export default StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  textInputWrapper: {
    width: '100%',
  },
  searchIconWrapper: {
    position: 'absolute',
    marginLeft: 15,
  },
  textInput: {
    backgroundColor: COLOR_SEARCHBOX_BACKGROUND,
    borderRadius: 20,
    paddingLeft: 45,
    paddingRight: 10,
    fontSize: 18,
    color: COLOR_SEARCHBOX_TEXT,
    fontWeight: 'bold',
  },
});
