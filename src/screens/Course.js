import React from 'react';
import {View, Text, Image, ScrollView, FlatList} from 'react-native';
import {Icon} from 'react-native-elements';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';

export default function Course({navigation}) {
  return (
    <View>
      <Header
        title="My Course"
        rightIcon={<Icon name="search-outline" type="ionicon" />}
      />
      <ScrollView>
        {/* filter */}
        <View>
          {['All', 'Upcoming', 'Completed'].map((item, index) => (
            <View key={index}>
              <View />
              <Text>{item}</Text>
            </View>
          ))}
        </View>
        {/* courses */}
        <View>
          <FlatList
            data={COURSES}
            renderItem={({item, index}) => (
              <TouchableHighlight style={{flex: 1}} key={index}>
                <View>
                  <Image source={item.image} />
                  <View>
                    <Text>{item.title}</Text>
                    <Text>By {item.author}</Text>
                    <View>
                      <View>
                        <Text>Ongoing {item.progress}%</Text>
                        <View></View>
                        <View>
                          <Icon name="star-outline" type="ionicon" />
                          <Text>{item.rating}</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableHighlight>
            )}
            numColumns={2}
          />
        </View>
      </ScrollView>
      <BottomNavigation active={1} />
    </View>
  );
}
