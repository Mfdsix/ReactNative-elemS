import React from 'react';
import {View, Text} from 'react-native';

import Styles from '../styles/Styles';

export default function SectionTitle(props) {
  return (
    <View
      style={[
        props.style,
        Styles.flexRow,
        Styles.flexBetween,
        Styles.ph2,
        Styles.mb1,
      ]}>
      <Text style={[Styles.textBold, Styles.textDark]}>{props.title}</Text>
      <Text style={[Styles.textGrey]}>{props.linkText}</Text>
    </View>
  );
}
