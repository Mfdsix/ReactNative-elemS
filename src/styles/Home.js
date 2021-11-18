import {StyleSheet} from 'react-native';
import Colors from '../values/Colors';

export default StyleSheet.create({
  notificationIndicator: {
    top: 10,
    right: 10,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.RED,
  },
  categoryContainer: {
    borderRadius: 50,
  },
  categoryIconContainer: {
    padding: 10,
    borderRadius: 20,
  },
  categoryIcon: {
    width: 15,
    height: 15,
    resizeMode: 'cover',
  },
  courseContainer: {
    width: 180,
  },
  courseImage: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
  },
  coursePrice: {
    bottom: -10,
    right: 0,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  instructorContainer: {
    width: 200,
    height: 150,
  },
  instructorImage: {
    width: 80,
    height: 80,
    top: 30,
    left: 10,
  },
});
