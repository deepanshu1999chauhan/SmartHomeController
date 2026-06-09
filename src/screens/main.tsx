import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const main = ({ navigation }: {navigation: any}) => {
    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                The Perfect{'\n'}Dream House{'\n'}for you
            </Text>

            <Text style={styles.subtitle}>
                A smart house with advanced{'\n'}
                features that{'\n'}
                you can control by mobile app
            </Text>

            <ImageBackground
                style={styles.image}
                source={require('../images/House.png')}
                resizeMode="contain"
            >

                <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate('welcome')}
                >
                    <Image
                        style={styles.buttonIcon}
                        source={require('../images/proccede.png')}
                    />
                </TouchableOpacity>

            </ImageBackground>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E1D5C9',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 80,
        marginLeft: 40,
        color: '#000',
    },
    subtitle: {
        fontSize: 18,
        marginTop: 23,
        marginLeft: 40,
        color: '#444',
    },
    image: {
        flex: 1,
        marginTop: 30,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 30,
        paddingBottom: 90,        
    },
    button: {
        backgroundColor: '#c3934f89',
        height: 46,
        width: 46,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,        
    },
    buttonIcon: {
        height: 25,
        width: 25,
        resizeMode: 'contain',
        marginTop: 3,
    },
});

export default main;