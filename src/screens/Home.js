import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import BottomNavigation from "../components/BottomNavigation";
import SectionTitle from "../components/SectionTitle";

export default function Home(){
    return <View>
    <ScrollView>
    {/* header */}
    <View>
    <View>
    <Text>Hi, Alison</Text>
    <Text>Find a course you wanna learn</Text>
    </View>
    <View>
    <Icon name="notifications-outline" type="ionicon"/>
    <View/>
    </View>
    </View>
    {/* search */}
    <View>
    <View>
    <Text>Searches</Text>
    <Icon name="search-outline" type="ionicon"/>
    </View>
    <View>
    <Icon name="options-outline" type="ionicon"/>
    </View>
    </View>
    {/* categories */}
    <View>
    <SectionTitle
    title="Categories"
    linkText="See All"
    />
    <ScrollView horizontal={true}>
    { CATEGORIES.map((category, index) => (
        <View key={index}>
        <View>
        <Image source={ category.icon }/>
        </View>
        <Text>{ category.name }</Text>
        </View>
        )) }
        </ScrollView>
        </View>
        {/* popular course */}
        <View>
        <SectionTitle
        title="Popular Course"
        linkText="See All"
        />
        <View>
        <ScrollView horizontal={true}>
        { COURSES.map((course, index) => (
            <View key={index}>
            <View>
            <Image source={ course.image }/>
            <View>
            <Text>${ course.price }</Text>
            </View>
            </View>
            <View>
            <Text>{ course.title }</Text>
            <Text>By { course.author }</Text>
            <View>
            <View>
            <Icon name="play-circle-outline" type="ionicon"/>
            </View>
            <Text>{ course.videos } Tutorial</Text>
            <View>
            <Icon name="star-outline" type="ionicon"/>
            <Text>{ course.rating }</Text>
            </View>
            </View>
            </View>
            </View>
            )) }
            </ScrollView>
            </View>
            </View>
            {/* insturtors */}
            <View>
            <SectionTitle
            title="Best Instructor"
            linkText="See All"
            />
            <View>
            <ScrollView horizontal={true}>
            { INSTRUCTORS.map((instructor, index) => (
                <View key={index}>
                <View>
                <Text>{ instructor.name }</Text>
                <Text>{ instructor.expertise }</Text>
                <Text>{ instructor.students } students</Text>
                <Text>{ instructor.courses } courses</Text>
                <View>
                <Text>{ instructor.rating }</Text>
                <Icon name="star-outline" type="ionicon"/>
                </View>
                </View>
                <Image source={ instructor.photo }/>
                </View>
                )) }
                </ScrollView>
                </View>
                </View>
                {/*  */}
                </ScrollView>
                <BottomNavigation active={ 0 }/>
                </View>
            }