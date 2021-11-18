import React from 'react';

export default function Header(props){
    return <View>
            <Icon name="arrow-back-outline" type="ionicon"/>
            <Text>{ props.title }</Text>
            { props.rightIcon }
            <View>
                <Icon name="heart-outline" type="ionicon"/>
            </View>
        </View>
}

const HeaderStyles = StyleSheet.create({})