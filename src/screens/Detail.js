import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import Header from "../component/Header";

export default function Detail(){
    return <View>
        <Header
        title="Details"
        rightIcon={
            <View>
                <Icon name="heart-outline" type="ionicon"/>
            </View>
        }
        />
        <ScrollView>
            {/* image */}
            <View>
                <Image source={ COURSE.image }/>
                <View>
                    <Text>${ COURSE.price }</Text>
                </View>
            </View>
            {/* detail */}
            <View>
                <View>
                    <Text>{ COURSE.title }</Text>
                    <View>
                        <Text>{ COURSE.rating }</Text>
                        <Icon name="star-outline" type="ionicon"/>
                    </View>
                </View>
                <View>
                    <Text>By { COURSE.author }</Text>
                    <Text>{ COURSE.duration }</Text>
                </View>
            </View>
            {/* tab options */}
            <View>
                <View>
                    <Text>Playlist</Text>
                    <View>
                        <Text>{ COURSE.items }</Text>
                    </View>
                </View>
                <View>
                    <Text>Description</Text>
                </View>
            </View>
            {/* playlist */}
            <View>
                { COURSE.playlists.map((playlist, index) => (
                    <View key={index}>
                        <View>
                            <Text>{ index+1 }</Text>
                        </View>
                        <View>
                            <Text>{ video.title }</Text>
                            <Text>{ video.duration }</Text>
                        </View>
                        <View>
                            <Icon name="lock-closed-outline" type="ionicon"/>
                        </View>
                    </View>
                )) }
            </View>
        </ScrollView>
        <View>
            <View>
                <Icon name="cart-outline" type="ionicon"/>
            </View>
            <View>
                <Text>Buy Now</Text>
            </View>
        </View>
    </View>
}