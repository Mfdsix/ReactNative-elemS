import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';

import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';

import Styles from '../styles/Styles';
import ScreenStyles from '../styles/Profile';
import Colors from '../values/Colors';

const ACCENT_COLORS = [
  Colors.ACCENT_GREEN,
  Colors.ACCENT_PURPLE,
  Colors.ACCENT_ORANGE,
];

const MENU_ITEMS = [
  {
    title: 'Edit Profile',
    icon: 'create-outline',
  },
  {
    title: 'Payment Detail',
    icon: 'card-outline',
  },
  {
    title: 'Notification',
    icon: 'notifications-outline',
  },
  {
    title: 'Wishlist',
    icon: 'heart-outline',
  },
  {
    title: 'Language',
    icon: 'language-outline',
  },
  {
    title: 'Logout',
    icon: 'log-out-outline',
  },
];

export default function Profile({navigation}) {
  return (
    <View style={[Styles.full, Styles.bgGrey]}>
      <Header
        title="Profile"
        rightIcon={
          <View>
            <Icon name="notifications-outline" type="ionicon" />
            <View />
          </View>
        }
      />
      <ScrollView style={Styles.full}>
        <View style={[Styles.relative, Styles.mt3]}>
          <View
            style={[
              Styles.mg2,
              Styles.bg,
              Styles.pd2,
              ScreenStyles.menuContainer,
              Styles.bdRad2,
              Styles.bd,
            ]}>
            <View style={Styles.alignCenter}>
              <Text style={[Styles.textDark, Styles.textBold, Styles.textLg]}>
                Ma Puth
              </Text>
              <Text style={[Styles.textGrey]}>+1234 **** *****</Text>
            </View>
            <View style={Styles.mt3}>
              {MENU_ITEMS.map((item, index) => (
                <View
                  key={index}
                  style={[
                    Styles.flexRow,
                    Styles.flexBetween,
                    Styles.pv1,
                    Styles.ph2,
                    Styles.bdRad2,
                    Styles.mb1,
                    Styles.alignCenter,
                    {
                      backgroundColor: ACCENT_COLORS[index % 3],
                    },
                  ]}>
                  <View
                    style={[
                      ScreenStyles.iconContainer,
                      Styles.bg,
                      Styles.alignCenter,
                      Styles.flexCenter,
                    ]}>
                    <Icon size={15} name={item.icon} type="ionicon" />
                  </View>
                  <Text style={[Styles.textDark, Styles.full, Styles.mh2]}>
                    {item.title}
                  </Text>
                  <Icon name="chevron-forward-outline" type="ionicon" />
                </View>
              ))}
            </View>
          </View>
          <View
            style={[
              Styles.absolute,
              ScreenStyles.imageContainer,
              Styles.flexCenter,
              Styles.alignCenter,
            ]}>
            <Image
              style={[ScreenStyles.userPhoto]}
              source={require('../assets/images/person/man.png')}
            />
          </View>
        </View>
      </ScrollView>
      <BottomNavigation navigation={navigation} active={3} />
    </View>
  );
}
