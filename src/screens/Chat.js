import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import Header from "../component/Header";
import BottomNavigation from "../component/BottomNavigation";

export default function Chat(){
    return <View>
    <Header
    title="Chat"
    rightIcon={
        <Icon name="ellipsis-vertical-outline" type="ionicon"/>
    }
    />
        <ScrollView>
            {/* search */}
            <View>
                <Text>Search</Text>
                <Icon name="search-outline" type="ionicon"/>
            </View>
            {/* chat list */}
            <View>
                { CHATS.map((chat, index) => (
                    <View key={index}>
                        <View>
                            <Image source={ chat.image }/>
                            <View/>
                        </View>
                        <View>
                            <Text>{ chat.recipient }</Text>
                            <Text>{ chat.lastChat }</Text>
                        </View>
                        <View>
                            <Text>{ chat.lastChatTime }</Text>
                            { chat.unread > 0 &&  <View>
                                <Text>{ chat.unread }</Text>
                            </View> }
                        </View>
                    </View>
                )) }
            </View>
        </ScrollView>
        <BottomNavigation active={ 2 }/>
    </View>
}