import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';
import Header from '../components/Header';

import Styles from '../styles/Styles';
import ScreenStyles from '../styles/Detail';

import COURSES from '../data/Course';
import PLAYLISTS from '../data/Playlist';
import Colors from '../values/Colors';

export default function Detail({navigation}) {
  const COURSE = COURSES[0];

  return (
    <View style={[Styles.bg, Styles.full]}>
      <Header
        onPress={() => navigation.navigate('Home')}
        title="Details"
        rightIcon={
          <View>
            <Icon name="heart" color={Colors.RED} type="ionicon" />
          </View>
        }
      />
      <ScrollView style={[Styles.full]}>
        {/* image */}
        <View style={Styles.relative}>
          <Image style={ScreenStyles.courseImage} source={COURSE.image} />
          <View
            style={[
              Styles.absolute,
              ScreenStyles.coursePrice,
              Styles.bgSecondary,
              Styles.ph2,
              Styles.pv1,
            ]}>
            <Text style={[Styles.textWhite, Styles.textBold, Styles.textLg]}>
              ${COURSE.price}
            </Text>
          </View>
        </View>
        {/* detail */}
        <View style={[Styles.pd2, Styles.mt1]}>
          <View style={[Styles.flexRow, Styles.flexBetween]}>
            <Text
              style={[
                Styles.textDark,
                Styles.textBold,
                Styles.textLg,
                Styles.textWrap,
              ]}>
              {COURSE.title}
            </Text>
            <View
              style={[
                Styles.flexRow,
                Styles.flexEnd,
                Styles.alignCenter,
                {
                  width: 60,
                },
              ]}>
              <Icon
                size={18}
                color={Colors.ORANGE}
                name="star"
                type="ionicon"
              />
              <Text style={[Styles.textDark, Styles.ml1]}>{COURSE.rating}</Text>
            </View>
          </View>
          <View style={[Styles.flexRow, Styles.flexBetween]}>
            <Text style={[Styles.textGrey]}>By {COURSE.author}</Text>
            <Text style={[Styles.textGrey]}>{COURSE.duration}</Text>
          </View>
        </View>
        {/* tab options */}
        <View
          style={[
            Styles.flexRow,
            Styles.flexBetween,
            Styles.alignCenter,
            Styles.ph2,
            Styles.mt2,
          ]}>
          <View
            style={[
              Styles.bgPrimary,
              Styles.flexRow,
              Styles.flexCenter,
              Styles.alignCenter,
              Styles.full,
              Styles.pv1,
              Styles.ph2,
              Styles.bdRad3,
              Styles.mr1,
            ]}>
            <Text style={[Styles.textBold, Styles.textWhite]}>Playlist</Text>
            <View
              style={[
                Styles.bgGrey,
                Styles.bdRad2,
                Styles.ml1,
                ScreenStyles.badge,
              ]}>
              <Text style={Styles.textGrey}>{COURSE.videos}</Text>
            </View>
          </View>
          <View
            style={[
              Styles.bg,
              Styles.flexRow,
              Styles.flexCenter,
              Styles.alignCenter,
              Styles.ph2,
              ScreenStyles.pv13,
              Styles.full,
              Styles.bd,
              Styles.bdRad3,
            ]}>
            <Text style={[Styles.textDark]}>Description</Text>
          </View>
        </View>
        {/* playlist */}
        <View style={[Styles.mt2, Styles.ph2]}>
          {PLAYLISTS.map((playlist, index) => (
            <View
              key={index}
              style={[
                Styles.bgGrey,
                Styles.mb1,
                Styles.bdRad1,
                Styles.flexRow,
                Styles.flexBetween,
                Styles.alignCenter,
                Styles.pv1,
                Styles.ph2,
              ]}>
              <View>
                <Text style={[Styles.textDark]}>{index + 1}</Text>
              </View>
              <View style={[Styles.full, Styles.ml2]}>
                <Text style={[Styles.textDark, Styles.textBold]}>
                  {playlist.title}
                </Text>
                <Text style={[Styles.textGrey, Styles.textSm]}>
                  {playlist.duration}
                </Text>
              </View>
              <View style={[Styles.pd1, Styles.bgPrimary, Styles.bdRad2]}>
                <Icon
                  size={16}
                  color={Colors.WHITE}
                  name="lock-closed-outline"
                  type="ionicon"
                />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <View
        style={[
          Styles.flexRow,
          Styles.flexBetween,
          Styles.alignCenter,
          Styles.pv1,
          Styles.ph2,
          Styles.shadow,
        ]}>
        <View style={[Styles.bgGrey, Styles.pd1, Styles.bdRad1]}>
          <Icon name="cart-outline" type="ionicon" />
        </View>
        <View
          style={[
            Styles.btn,
            Styles.full,
            Styles.ml2,
            Styles.bdRad1,
            Styles.alignCenter,
          ]}>
          <Text style={[Styles.textWhite, Styles.textBold]}>Buy Now</Text>
        </View>
      </View>
    </View>
  );
}
