import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';

import BottomNavigation from '../components/BottomNavigation';
import SectionTitle from '../components/SectionTitle';

import Styles from '../styles/Styles';
import ScreenStyles from '../styles/Home';
import Colors from '../values/Colors';

import CATEGORIES from '../data/Category';
import COURSES from '../data/Course';
import INSTRUCTORS from '../data/Instructor';

export default function Home() {
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
            <Text style={[Styles.textXl, Styles.textDark, Styles.textBold]}>
              Hi, Alison 👋
            </Text>
            <Text style={[Styles.textGrey, Styles.textMd]}>
              Find a course you wanna learn
            </Text>
          </View>
          <View
            style={[Styles.bgGrey, Styles.pd2, Styles.bdRad1, Styles.relative]}>
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
        <View style={[Styles.mv2, Styles.pd2]}>
          <View
            style={[
              Styles.bgGrey,
              Styles.pd1,
              Styles.flexRow,
              Styles.flexBetween,
            ]}>
            <Text style={[Styles.textGrey, Styles.textBold]}>Searches</Text>
            <Icon color={Colors.BLACK} name="search-outline" type="ionicon" />
          </View>
          <View style={[Styles.ml1, Styles.pd1, Styles.bgPrimary]}>
            <Icon color={Colors.WHITE} name="options-outline" type="ionicon" />
          </View>
        </View>
        {/* categories */}
        <View style={[Styles.mb2]}>
          <SectionTitle
            style={Styles.pd2}
            title="Categories"
            linkText="See All"
          />
          <ScrollView horizontal={true}>
            {CATEGORIES.map((category, index) => (
              <View key={index}>
                <View>
                  <Image source={category.icon} />
                </View>
                <Text>{category.name}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
        {/* popular course */}
        <View>
          <SectionTitle title="Popular Course" linkText="See All" />
          <View>
            <ScrollView horizontal={true}>
              {COURSES.map((course, index) => (
                <View key={index}>
                  <View>
                    <Image source={course.image} />
                    <View>
                      <Text>${course.price}</Text>
                    </View>
                  </View>
                  <View>
                    <Text>{course.title}</Text>
                    <Text>By {course.author}</Text>
                    <View>
                      <View>
                        <Icon name="play-circle-outline" type="ionicon" />
                      </View>
                      <Text>{course.videos} Tutorial</Text>
                      <View>
                        <Icon name="star-outline" type="ionicon" />
                        <Text>{course.rating}</Text>
                      </View>
                    </View>
                  </View>
                </View>
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
                <View key={index}>
                  <View>
                    <Text>{instructor.name}</Text>
                    <Text>{instructor.expertise}</Text>
                    <Text>{instructor.students} students</Text>
                    <Text>{instructor.courses} courses</Text>
                    <View>
                      <Text>{instructor.rating}</Text>
                      <Icon name="star-outline" type="ionicon" />
                    </View>
                  </View>
                  <Image source={instructor.photo} />
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
        {/*  */}
      </ScrollView>
      <BottomNavigation active={0} />
    </View>
  );
}
