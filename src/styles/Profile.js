import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../values/Colors';

const dim = Dimensions.get('window');

export default StyleSheet.create({
  imageContainer: {
    left: dim.width / 2 - 75,
    top: 0,
    alignItems: 'center',
    height: 150,
    width: 150,
    borderRadius: 100,
    backgroundColor: Colors.LIGHT_GREY,
  },
  userPhoto: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
  },
  menuContainer: {
    marginTop: 70,
    paddingTop: 100,
  },
  iconContainer: {
    width: 35,
    height: 35,
    borderRadius: 15,
  },
});
