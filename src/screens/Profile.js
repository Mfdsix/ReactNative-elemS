import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import Header from "../component/Header";
import BottomNavigation from "../component/BottomNavigation";

const MENU_ITEMS = [
    {
        title: 'Edit Profile',
        icon: 'create-outline'
    },
    {
        title: 'Payment Detail',
        icon: 'create-outline'
    },
    {
        title: 'Notification',
        icon: 'create-outline'
    },
    {
        title: 'Wishlist',
        icon: 'create-outline'
    },
    {
        title: 'Language',
        icon: 'create-outline'
    },
    {
        title: 'Logout',
        icon: 'create-outline'
    },
];

export default function Profile(){
    return <View>
        <Header title="Profile"
        rightIcon={
            <View>
                <Icon name="notifications-outline" type="ionicon"/>
                <View/>
            </View>
        }/>
        <ScrollView>
            <View>
                <View>
                    <View>
                        <Text>Ma Puth</Text>
                        <Text>+1234 **** *****</Text>
                    </View>
                    <View>
                        { MENU_ITEMS.map((item , index) => (
                            <View key={index}>
                                <View>
                                    <Icon name={ item.icon } type="ionicon"/>
                                </View>
                                <Text>{ item.title }</Text>
                                <Icon name="chevron-forward-outline" type="ionicon"/>
                            </View>
                        )) }
                    </View>
                </View>
            </View>
        </ScrollView>
        <BottomNavigation active={ 3 }/>
    </View>
}