import {Dimensions, StyleSheet} from 'react-native';

const dim = Dimensions.get('window');

export default StyleSheet.create({
  courseImage: {
    width: dim.width,
    height: 320,
    resizeMode: 'cover',
  },
  coursePrice: {
    right: 0,
    bottom: 10,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  badge: {
    paddingHorizontal: 15,
    paddingVertical: 3,
  },
  pv13: {
    paddingVertical: 13,
  },
});
