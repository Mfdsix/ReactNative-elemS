import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import Colors from '../values/Colors';
import Styles from '../styles/Styles';

const MENU_ITEMS = [
  {
    title: 'Home',
    icon: 'home-outline',
    target: 'Home',
  },
  {
    title: 'My Course',
    icon: 'list-outline',
    target: 'Course',
  },
  {
    title: 'Chat',
    icon: 'chatbubble-outline',
    target: 'Chat',
  },
  {
    title: 'Profile',
    icon: 'person-outline',
    target: 'Profile',
  },
];

export default function BottomNavigation(props) {
  return (
    <View
      style={[
        Styles.bg,
        Styles.pd2,
        Styles.flexRow,
        Styles.flexBetween,
        Styles.alignCenter,
        Styles.shadow,
      ]}>
      {MENU_ITEMS.map((item, index) => (
        <TouchableOpacity
          onPress={() => props.navigation.navigate(item.target)}
          key={index}>
          <View
            style={[
              Styles.flexRow,
              Styles.alignCenter,
              index == props.active ? BottomNavigationStyles.itemContainer : {},
            ]}>
            <Icon
              color={index == props.active ? Colors.RED : Colors.GREY}
              name={item.icon}
              type="ionicon"
              style={Styles.mr1}
            />
            {index == props.active && (
              <Text
                style={[Styles.textPrimary, Styles.textBold, Styles.textSm]}>
                {item.title}
              </Text>
            )}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const BottomNavigationStyles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: Colors.WHITE,
    elevation: 10,
    shadowColor: Colors.RED,
  },
});
