import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Icon} from 'react-native-elements';

import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';

import Styles from '../styles/Styles';
import ScreenStyles from '../styles/Course';

import COURSES from '../data/Course';
import Colors from '../values/Colors';

export default function Course({navigation}) {
  return (
    <View style={[Styles.full, Styles.bgGrey]}>
      <Header
        onPress={() => navigation.navigate('Home')}
        title="My Course"
        rightIcon={<Icon name="search-outline" type="ionicon" />}
      />
      <ScrollView style={Styles.full}>
        {/* filter */}
        <View style={[Styles.ml1, Styles.mv2]}>
          <ScrollView horizontal={true}>
            {['All', 'Upcoming', 'Completed'].map((item, index) => (
              <View
                key={index}
                style={[
                  Styles.bdRad2,
                  index == 0 ? Styles.bgPrimary : Styles.bg,
                  Styles.pv1,
                  Styles.ph1,
                  Styles.mr1,
                  Styles.flexRow,
                  Styles.alignCenter,
                ]}>
                <View
                  style={[
                    Styles.pd1,
                    index == 0 ? Styles.bg : Styles.bgGrey,
                    Styles.bdRad2,
                    Styles.mr1,
                  ]}
                />
                <Text
                  style={[
                    index == 0 ? Styles.textWhite : Styles.textPrimary,
                    Styles.mr2,
                  ]}>
                  {item}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
        {/* courses */}
        <View style={[Styles.ph1, Styles.mb3]}>
          <FlatList
            data={COURSES}
            renderItem={({item, index}) => (
              <TouchableOpacity
                style={{flex: 1, padding: 2}}
                key={index}
                activeOpacity={0.7}
                onPress={() => navigation.navigate('Detail')}>
                <View style={[Styles.bd, Styles.bg, Styles.bdRad1]}>
                  <Image style={ScreenStyles.courseImage} source={item.image} />
                  <View style={[Styles.ph1]}>
                    <Text style={[Styles.textDark, Styles.textBold]}>
                      {item.title}
                    </Text>
                    <Text style={[Styles.textGrey, Styles.textSm]}>
                      By {item.author}
                    </Text>
                    <View style={[Styles.mv1]}>
                      <View>
                        <View style={[Styles.flexRow, Styles.flexBetween]}>
                          <Text style={[Styles.textGrey, Styles.textSm]}>
                            Ongoing{' '}
                            <Text style={[Styles.textPrimary]}>
                              {item.progress}%
                            </Text>
                          </Text>
                          <View style={[Styles.flexRow, Styles.alignCenter]}>
                            <Icon
                              size={12}
                              name="star"
                              color={Colors.ORANGE}
                              type="ionicon"
                            />
                            <Text style={[Styles.textGrey, Styles.textSm]}>
                              {item.rating}
                            </Text>
                          </View>
                        </View>
                        <View
                          style={[
                            Styles.relative,
                            Styles.full,
                            Styles.bgGrey,
                            Styles.mt1,
                            Styles.bdRad1,
                            ScreenStyles.progressBack,
                          ]}>
                          <View
                            style={[
                              Styles.absolute,
                              Styles.bgPrimary,
                              Styles.bdRad1,
                              ScreenStyles.progressBar,
                              {
                                width: item.progress + '%'.toString(),
                              },
                            ]}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            numColumns={2}
          />
        </View>
      </ScrollView>
      <BottomNavigation navigation={navigation} active={1} />
    </View>
  );
}
