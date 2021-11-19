import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

import CHATS, {CHAT} from '../data/Chat';
import Styles from '../styles/Styles';
import ScreenStyles from '../styles/ChatRoom';
import Colors from '../values/Colors';

function ChatText(props) {
  if (!props.isSender) {
    return (
      <View
        style={[
          Styles.bgPrimary,
          Styles.pd1,
          Styles.bdRad1,
          ScreenStyles.chatBalloon,
          props.style,
        ]}>
        <Text style={Styles.textWhite}>{props.chat}</Text>
      </View>
    );
  } else {
    return (
      <View
        style={[
          Styles.bg,
          Styles.bdRad1,
          Styles.pd1,
          Styles.mb1,
          ScreenStyles.chatBalloon,
          {
            alignSelf: 'flex-end',
          },
        ]}>
        <Text style={Styles.textDark}>{props.chat}</Text>
      </View>
    );
  }
}

function ChatArrayParser(props) {
  if (Array.isArray(props.chat)) {
    return (
      <View>
        {props.chat.map((ch, index) => (
          <ChatText
            style={Styles.mb1}
            key={index}
            isSender={props.isSender}
            chat={ch.text}
          />
        ))}
      </View>
    );
  } else {
    return <ChatText isSender={props.isSender} chat={props.chat} />;
  }
}

function ChatBubble(props) {
  if (!props.isSender) {
    return (
      <View style={[Styles.flexRow, Styles.mb1]}>
        <Image
          style={[ScreenStyles.userPhoto, Styles.mr1]}
          source={props.image}
        />
        <ChatArrayParser isSender={props.isSender} chat={props.chat} />
      </View>
    );
  } else {
    return <ChatArrayParser isSender={props.isSender} chat={props.chat} />;
  }
}

export default function ChatRoom({navigation}) {
  const USER = CHATS[0];

  return (
    <View style={[Styles.full]}>
      <View
        style={[
          Styles.bg,
          Styles.flexRow,
          Styles.pd2,
          Styles.flexBetween,
          Styles.shadow,
        ]}>
        <View style={[Styles.flexRow, Styles.alignCenter]}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Chat')}
            activeOpacity={0.7}
            style={Styles.mr2}>
            <Icon name="arrow-back-outline" type="ionicon" />
          </TouchableOpacity>
          <View style={[Styles.flexRow, Styles.alignCenter]}>
            <Image
              style={[ScreenStyles.userPhoto, Styles.mr1]}
              source={USER.image}
            />
            <View>
              <Text style={[Styles.textDark, Styles.textBold]}>
                {USER.recipient}
              </Text>
              <Text style={[Styles.textGrey, Styles.textSm]}>online</Text>
            </View>
          </View>
        </View>
        <View style={[Styles.flexRow, Styles.alignCenter]}>
          <Icon style={Styles.mr1} name="videocam-outline" type="ionicon" />
          <Icon style={Styles.mr1} name="call-outline" type="ionicon" />
          <Icon name="ellipsis-vertical-outline" type="ionicon" />
        </View>
      </View>
      <ScrollView style={Styles.full}>
        <View style={Styles.pd2}>
          {CHAT.map((chat, index) => (
            <ChatBubble
              key={index}
              isSender={chat.isSender}
              image={USER.image}
              chat={chat.chat}
            />
          ))}
        </View>
      </ScrollView>
      <View
        style={[
          Styles.bg,
          Styles.pv1,
          Styles.ph2,
          Styles.flexRow,
          Styles.alignCenter,
          Styles.flexBetween,
        ]}>
        <Icon color={Colors.BLACK} name="add-circle-outline" type="ionicon" />
        <View
          style={[
            Styles.pv1,
            Styles.ph2,
            Styles.bgGrey,
            Styles.full,
            Styles.mh1,
            Styles.bdRad1,
          ]}>
          <Text style={Styles.textGrey}>Message...</Text>
        </View>
        <View>
          <Icon color={Colors.RED} name="send-outline" type="ionicon" />
        </View>
      </View>
    </View>
  );
}
