import { View, Text, ImageBackground, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';

const reviews = [
    {
        id: '1',
        name: 'Jenny Wilson',
        date: '13 Sep, 2020',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada eget vitae amet...',
        image: require('../images/House.png'),
    },
    {
        id: '2',
        name: 'Ronald Richards',
        date: '13 Sep, 2020',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada eget vitae amet...',
        image: require('../images/House.png'),
    },
    {
        id: '3',
        name: 'Guy Hawkins',
        date: '13 Sep, 2020',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada eget vitae amet...',
        image: require('../images/House.png'),
    },
    {
        id: '4',
        name: 'Savannah Nguyen',
        date: '13 Sep, 2020',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada eget vitae amet...',
        image: require('../images/House.png'),
    },
];

const save = ({ navigation }: { navigation: any }) => {
    return (
        <ImageBackground
            style={style.image}
            source={require('../images/badroom.png')}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                    style={style.backIcon}
                    source={require('../images/go back-2.png')}
                />
            </TouchableOpacity>
            <FlatList
                data={reviews}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={style.card}>
                        <Image source={item.image} style={style.avatar} />
                        <View style={{ flex: 1 }}>
                            <Text style={style.name}>{item.name}</Text>
                            <Text style={style.date}>{item.date}</Text>
                            <Text style={style.reviewText}>{item.text}</Text>
                        </View>
                    </View>
                )}
            />
        </ImageBackground>
    );
};

const style = StyleSheet.create({
    image: {
        height: 880,
        width: 450,
        resizeMode: 'contain',
    },
    backIcon: {
        height: 45,
        width: 45,
        resizeMode: 'contain',
        marginTop: 70,
        marginLeft: 26,
    },
    card: {
        flexDirection: 'row',
        marginBottom: 10,
        backgroundColor: '#E1D5C9',
        borderRadius: 20,
        shadowOpacity: 0.3,
        marginHorizontal: 20,
        marginRight: 60,
        marginTop: 20,
    },
    avatar: {
        width: 45,
        height: 45,
        borderRadius: 25,
        marginRight: 10,
        marginTop: 13,
        resizeMode: 'contain',
    },
    name: {
        fontWeight: 'bold',
        marginTop: 10,
    },
    date: {
        fontSize: 12,
        color: 'gray',
        marginTop: 3,
        marginBottom: 6,
    },
    reviewText: {
        color: '#8F959E',
        lineHeight: 18,
        width: '95%',
        paddingBottom: 10,
        fontWeight: '500',
    },
    leftSection: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 3,
    },
});

export default save;