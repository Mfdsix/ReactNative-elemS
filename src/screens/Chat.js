import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';

import Styles from '../styles/Styles';
import ScreenStyles from '../styles/Chat';

import CHATS from '../data/Chat';
import Colors from '../values/Colors';

export default function Chat({navigation}) {
  return (
    <View style={[Styles.full, Styles.bg]}>
      <Header
        onPress={() => navigation.navigate('Home')}
        title="Chat"
        rightIcon={<Icon name="ellipsis-vertical-outline" type="ionicon" />}
      />
      <ScrollView style={Styles.full}>
        {/* search */}
        <View
          style={[
            Styles.mg2,
            Styles.flexRow,
            Styles.flexBetween,
            Styles.alignCenter,
            Styles.pv1,
            Styles.ph2,
            Styles.bgGrey,
            Styles.bdRad1,
          ]}>
          <Text style={[Styles.textGrey]}>Search</Text>
          <Icon color={Colors.GREY} name="search-outline" type="ionicon" />
        </View>
        {/* chat list */}
        <View style={[Styles.ph2]}>
          {CHATS.map((chat, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate('ChatRoom')}>
              <View style={[Styles.flexRow, Styles.flexBetween, Styles.pv2]}>
                <View style={Styles.relative}>
                  <Image style={ScreenStyles.userImage} source={chat.image} />
                  <View
                    style={[
                      Styles.absolute,
                      ScreenStyles.onlineIndicator,
                      {
                        backgroundColor:
                          index % 2 == 0 ? Colors.GREEN : Colors.GREY,
                      },
                    ]}
                  />
                </View>
                <View style={[Styles.full, Styles.mh2]}>
                  <Text style={[Styles.textDark, Styles.textBold]}>
                    {chat.recipient}
                  </Text>
                  <Text numberOfLines={1} style={Styles.textGrey}>
                    {chat.lastChat}
                  </Text>
                </View>
                <View style={Styles.alignRight}>
                  <Text style={[Styles.textGrey, Styles.textSm]}>
                    {chat.lastChatTime}
                  </Text>
                  {chat.unread > 0 && (
                    <View
                      style={[
                        Styles.bgPrimary,
                        ScreenStyles.chatBadge,
                        Styles.alignCenter,
                        Styles.flexCenter,
                      ]}>
                      <Text style={[Styles.textWhite, Styles.textSm]}>
                        {chat.unread}
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <BottomNavigation navigation={navigation} active={2} />
    </View>
  );
}
