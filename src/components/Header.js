import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import Styles from '../styles/Styles';

export default function Header(props) {
  return (
    <View
      style={[
        Styles.bg,
        Styles.flexRow,
        Styles.pd2,
        Styles.flexBetween,
        Styles.shadow,
      ]}>
      <TouchableOpacity onPress={props.onPress} activeOpacity={0.7}>
        <Icon name="arrow-back-outline" type="ionicon" />
      </TouchableOpacity>
      {!props.titleView && (
        <Text style={[Styles.textDark, Styles.textBold, Styles.textMd]}>
          {props.title}
        </Text>
      )}
      {props.titleView && props.titleView}
      {props.rightIcon}
    </View>
  );
}
