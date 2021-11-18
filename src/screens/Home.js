import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

import BottomNavigation from '../components/BottomNavigation';
import SectionTitle from '../components/SectionTitle';

import Styles from '../styles/Styles';
import ScreenStyles from '../styles/Home';
import Colors from '../values/Colors';

import CATEGORIES from '../data/Category';
import COURSES from '../data/Course';
import INSTRUCTORS from '../data/Instructor';

const ACCENT_COLORS = [
  Colors.ACCENT_GREEN,
  Colors.ACCENT_PURPLE,
  Colors.ACCENT_ORANGE,
];

export default function Home({navigation}) {
  return (
    <View style={[Styles.full, Styles.bg]}>
      <ScrollView style={Styles.full}>
        {/* header */}
        <View
          style={[
            Styles.flexRow,
            Styles.flexBetween,
            Styles.bg,
            Styles.pd2,
            Styles.shadow,
          ]}>
          <View>
            <Text style={[Styles.textLg, Styles.textDark, Styles.textBold]}>
              Hi, Mepi 👋
            </Text>
            <Text style={[Styles.textGrey]}>Find a course you wanna learn</Text>
          </View>
          <View
            style={[Styles.bgGrey, Styles.pd1, Styles.bdRad1, Styles.relative]}>
            <Icon
              color={Colors.BLACK}
              name="notifications-outline"
              type="ionicon"
            />
            <View
              style={[Styles.absolute, ScreenStyles.notificationIndicator]}
            />
          </View>
        </View>
        {/* search */}
        <View
          style={[Styles.mv1, Styles.pd2, Styles.flexRow, Styles.flexBetween]}>
          <View
            style={[
              Styles.bgGrey,
              Styles.pv1,
              Styles.ph2,
              Styles.flexRow,
              Styles.flexBetween,
              Styles.full,
              Styles.bdRad1,
              Styles.alignCenter,
            ]}>
            <Text style={Styles.textGrey}>Searches</Text>
            <Icon color={Colors.BLACK} name="search-outline" type="ionicon" />
          </View>
          <View
            style={[Styles.ml1, Styles.pd1, Styles.bgPrimary, Styles.bdRad1]}>
            <Icon color={Colors.WHITE} name="options-outline" type="ionicon" />
          </View>
        </View>
        {/* categories */}
        <View style={[Styles.mb2]}>
          <SectionTitle title="Categories" linkText="See All" />
          <ScrollView horizontal={true} style={Styles.ml2}>
            {CATEGORIES.map((category, index) => (
              <View
                key={index}
                style={[
                  Styles.pd1,
                  {
                    backgroundColor: ACCENT_COLORS[index % 3],
                  },
                  ScreenStyles.categoryContainer,
                  Styles.flexRow,
                  Styles.alignCenter,
                  Styles.mr1,
                ]}>
                <View style={[Styles.bg, ScreenStyles.categoryIconContainer]}>
                  <Image
                    source={category.icon}
                    style={ScreenStyles.categoryIcon}
                  />
                </View>
                <Text style={[Styles.textDark, Styles.ml1, Styles.mr2]}>
                  {category.name}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
        {/* popular course */}
        <View>
          <SectionTitle title="Popular Course" linkText="See All" />
          <View style={Styles.ml1}>
            <ScrollView horizontal={true}>
              {COURSES.map((course, index) => (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Detail')}
                  activeOpacity={0.7}
                  key={index}>
                  <View
                    style={[
                      Styles.bg,
                      Styles.shadow,
                      Styles.bdRad1,
                      Styles.mr2,
                      Styles.mb2,
                      Styles.mt1,
                      Styles.ml1,
                      ScreenStyles.courseContainer,
                    ]}>
                    <View style={Styles.relative}>
                      <Image
                        style={ScreenStyles.courseImage}
                        source={course.image}
                      />
                      <View
                        style={[
                          Styles.absolute,
                          Styles.bgSecondary,
                          Styles.pd1,
                          ScreenStyles.coursePrice,
                        ]}>
                        <Text style={[Styles.textWhite]}>${course.price}</Text>
                      </View>
                    </View>
                    <View style={[Styles.mt2, Styles.pd1]}>
                      <Text
                        style={[
                          Styles.textBold,
                          Styles.textDark,
                          Styles.textWrap,
                        ]}>
                        {course.title}
                      </Text>
                      <Text style={[Styles.textSm, Styles.textGrey]}>
                        By {course.author}
                      </Text>
                      <View
                        style={[
                          Styles.mt1,
                          Styles.flexRow,
                          Styles.alignCenter,
                          Styles.flexBetween,
                        ]}>
                        <View style={[Styles.flexRow, Styles.alignCenter]}>
                          <Icon
                            color={Colors.RED}
                            name="play-circle-outline"
                            type="ionicon"
                          />
                          <Text style={[Styles.textDark, Styles.textSm]}>
                            {course.videos} Tutorial
                          </Text>
                        </View>
                        <View style={[Styles.flexRow, Styles.alignCenter]}>
                          <Icon
                            size={16}
                            color={Colors.ORANGE}
                            name="star"
                            type="ionicon"
                          />
                          <Text style={[Styles.textDark, Styles.textSm]}>
                            {course.rating}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
        {/* insturtors */}
        <View>
          <SectionTitle title="Best Instructor" linkText="See All" />
          <View>
            <ScrollView horizontal={true}>
              {INSTRUCTORS.map((instructor, index) => (
                <View key={index} style={[Styles.relative, Styles.mb2]}>
                  <View
                    style={[
                      {
                        backgroundColor: ACCENT_COLORS[index % 3],
                      },
                      ScreenStyles.instructorContainer,
                      Styles.pd2,
                      Styles.ml4,
                      Styles.alignRight,
                      Styles.flexCenter,
                      Styles.bdRad1,
                    ]}>
                    <Text style={[Styles.textDark, Styles.textBold]}>
                      {instructor.name}
                    </Text>
                    <Text style={[Styles.textGrey, Styles.textSm]}>
                      {instructor.expertise}
                    </Text>
                    <Text style={[Styles.textDark, Styles.mt1]}>
                      {instructor.students} students
                    </Text>
                    <Text style={[Styles.textDark]}>
                      {instructor.courses} courses
                    </Text>
                    <View style={Styles.flexRow}>
                      <Text
                        style={[Styles.textDark, Styles.textSm, Styles.mr1]}>
                        {instructor.rating}
                      </Text>
                      <Icon size={14} name="star-outline" type="ionicon" />
                    </View>
                  </View>
                  <Image
                    style={[Styles.absolute, ScreenStyles.instructorImage]}
                    source={instructor.photo}
                  />
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
        {/*  */}
      </ScrollView>
      <BottomNavigation navigation={navigation} active={0} />
    </View>
  );
}
