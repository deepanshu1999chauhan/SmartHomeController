import { View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const managefans = ({ navigation }: { navigation: any }) => {
    return (
        <View>
            <ImageBackground
                style={style.image}
                source={require('../images/light.png')}>
                <View style={style.container}>
                    <Image
                        style={style.image2}
                        source={require('../images/menu button.png')}
                    />
                    <Image
                        style={style.image3}
                        source={require('../images/avatar.png')}
                    />
                </View>
                <View style={style.container3}>
                    <View>
                        <Text style={style.text}>Bedrooms</Text>
                        <Text style={style.text2}>Usage today</Text>
                    </View>
                    <TouchableOpacity style={style.touchable}>
                        <Text style={style.text3}>64 kw</Text>
                    </TouchableOpacity>
                </View>

                <Image
                    style={style.image4}
                    source={require('../images/statistics.png')}
                />

                <View style={style.lightcontainer2}>
                    <TouchableOpacity style={style.lightcontainer}>
                        <Image
                            style={style.light}
                            source={require('../images/Vector-7.png')}
                        />
                        <Text style={style.sound}>Light</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={style.lightcontainer}
                   onPress={() => navigation.replace('managesound')} 
                    >
                        <Image
                            style={style.light}
                            source={require('../images/volume-2.png')}
                        />
                        <Text style={style.sound}>Sound</Text>
                    </TouchableOpacity>
                </View>

                <View style={style.lightcontainer2}>
                    <TouchableOpacity style={style.lightcontainer}
                    onPress={() => navigation.replace('managefans2')}
                    >
                        <Image
                            style={style.light}
                            source={require('../images/fan.png')}
                        />
                        <Text style={style.sound}>Fans</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={style.lightcontainer}
                    onPress={() => navigation.replace('manageheater')}
                    >
                        <Image
                            style={style.light}
                            source={require('../images/Vector-6.png')}
                        />
                        <Text style={style.sound}>Heater</Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 70,
        marginHorizontal: 33,
    },
    image: {
        height: 873,
        width: 450,
        resizeMode: 'contain',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 50,
        marginTop: 30
    },
    text2: {
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 50,
        marginTop: 10,
    },
    image2: {
        height: 30,
        width: 30,
        resizeMode: 'contain',
    },
    image3: {
        height: 40,
        width: 40,
        resizeMode: 'contain',
        marginRight: 40
    },
    image4: {
        height: 186,
        width: 351,
        resizeMode: 'contain',
        marginTop: 30,
        marginLeft: 33,
        marginBottom: 30,
    },
    touchable: {
        backgroundColor: 'black',
        marginHorizontal: 90,
        borderRadius: 20,
        marginTop: 36,
        paddingHorizontal: 16,
        padding: 6
    },
    container3: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 18
    },
    text3: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 15,
    },
    nodata: {
        backgroundColor: '#fff',
        padding: 13,
        marginHorizontal: 30,
        marginTop: 60,
        marginRight: 246,
        borderRadius: 28
    },
    data: {
        fontSize: 20,
        textAlign: 'center',
        color: '#616150',
    },
    choosedata: {
        backgroundColor: '#fff',
        padding: 13,
        marginLeft: 210,
        marginRight: 73,
        borderRadius: 28,
        justifyContent: 'flex-end',
    },
    choose: {
        fontSize: 20,
        textAlign: 'center',
        color: '#616150',
    },
    light: {
        height: 40,
        width: 40,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginBottom: 13,
    },
    lightcontainer: {
        backgroundColor: 'black',
        padding: 30,
        borderRadius: 16,
        width: '32%',
    },
    lightcontainer2: {
        flexDirection: 'row',
        gap: 30,
        justifyContent: 'center',
        marginBottom: 20,
        marginRight: 46
    },
    sound: {
        color: '#fff',
        fontSize: 15,
        textAlign: 'center',
    },
});

export default managefans;