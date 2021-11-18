import React from "react";
import { View, StyleSheet, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';
import Colors from "../values/Colors";
import Styles from "../styles/Styles";

const MENU_ITEMS = [
    {
        title: "Home",
        icon: "home-outline",
        target: "Home"
    },
    {
        title: "My Course",
        icon: "list-outline",
        target: "Course"
    },
    {
        title: "Chat",
        icon: "chatbubble-outline",
        target: "Chat"
    },
    {
        title: "Profile",
        icon: "person-outline",
        target: "Profile"
    },
];

export default function BottomNavigation(props){
    return <View>
        { MENU_ITEMS.map((item, index) => (
            <View key={index}>
                <Icon name={ item.icon } type="ionicon"/>
                { index == props.active && <Text>{ item.title }</Text> }
            </View>
        ))}
    </View>
}

const BottomNavigationStyles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: Colors.WHITE,
        elevation: 10,
    },
})