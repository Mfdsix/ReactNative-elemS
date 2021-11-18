import React from 'react';
import { StyleSheet } from 'react-native';

export default function SectionTitle(props){
    return <View>
        <Text>{ props.title }</Text>
        <Text>{ props.linkText }</Text>
    </View>
}

const SectionTitleStyle = StyleSheet.create({})