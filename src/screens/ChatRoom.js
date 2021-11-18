import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import Header from "../component/Header";

function ChatBubble(props){
    if(props.isSender){
        return <View>
            <Image source={ props.image }/>
            <View>
                <Text>{ props.chat }</Text>
            </View>
        </View>
    }else{
        return <View>
            <Text>{ props.chat }</Text>
        </View>
    }
}

export default function ChatRoom(){
    return <View>
        <Header
        title={ CHAT.recipient }
        rightIcon={
            <View>
                <Icon name="videocam-outline" type="ionicon"/>
                <Icon name="call-outline" type="ionicon"/>
                <Icon name="ellipsis-vertical-outline" type="ionicon"/>
            </View>
        }/>
        <ScrollView>
            { CHAT.items.map((chat, index) => (
                <ChatBubble key={index} data={ chat }/>
            )) }
        </ScrollView>
        <View>
            <Icon name="add-circle-outline" type="ionicon"/>
            <View>
                <Text>Message...</Text>
            </View>
            <View>
                <Icon name="send-outline" type="ionicon"/>
            </View>
        </View>
    </View>
}