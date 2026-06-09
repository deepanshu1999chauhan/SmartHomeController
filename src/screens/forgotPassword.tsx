import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';

const forgotPassword = ({ navigation }: { navigation: any }) => {
    const [email, setEmail] = useState('');

    const handleForgotPassword = async () => {
        try {
            if (!email) {
                Alert.alert("Please enter email");
                return;
            }

            await auth().sendPasswordResetEmail(email.trim());

            Alert.alert("Success", "Password reset link sent to your email");
        } catch (error: any) {
            console.log(error);
            Alert.alert("Error", error.message);
        }
    };
    return (
        <View style={style.container}>
            <View style={style.container2}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        style={style.image2}
                        source={require('../images/go back.png')}
                    />
                </TouchableOpacity>
                <Text style={style.text}>Forgot Password?</Text>
            </View>
            <Text style={style.text2}>Let’s continue to control your house </Text>
            <Image
                style={style.image}
                source={require('../images/llustration.png')}
            />
            <TextInput
                style={style.textinput}
                placeholder='Enter your email'
                value={email}
                onChangeText={setEmail}
            />

            <TouchableOpacity style={style.touchable}
                onPress={handleForgotPassword}
            >
                <Text style={style.text3}>Confirm Mail</Text>
            </TouchableOpacity>

            <View style={style.container3}>
                <Text style={style.text4}>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.replace('welcome')} style={{flex:1}}>
                    <Text style={{ color: '#C3934F', fontSize: 16, }}>Log in</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E1D5C9',
    },
    container2: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 90,
        gap: 23
    },
    text: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    text2: {
        fontSize: 22,
        textAlign: 'center',
        marginTop: 10,
        fontWeight: '400',
        marginBottom: 50,
    },
    textinput: {
        backgroundColor: '#fff',
        marginTop: 20,
        padding: 13,
        borderRadius: 23,
        marginHorizontal: 33,
        margin: 10,
        paddingHorizontal: 23,
        fontSize: 16,
        fontWeight: '600',
        color: '#333333',
        marginBottom: 23,
        shadowOpacity: 0.2,
    },
    touchable: {
        backgroundColor: '#C3934F',
        padding: 20,
        borderRadius: 36,
        marginHorizontal: 33,
        marginTop: 60
    },
    text3: {
        textAlign: 'center',
        fontSize: 23,
        fontWeight: 'bold',
        color: '#fff',
    },
    container3: {
        flexDirection: 'row',
        marginLeft: 73,
        marginTop: 50,
    },
    text4: {
        fontSize: 16,
        fontWeight: '600',
    },
    image2: {
        height: 50,
        width: 50,
        resizeMode: 'contain',
        marginLeft: 36
    },
    image: {
        height: 162,
        width: 195,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginBottom: 30
    },
    touchable2: {
        marginHorizontal: 130,
        marginTop: 13,
    },
    text6: {
        textAlign: 'center',
        color: '#C3934F',
        fontSize: 16,
    },
});

export default forgotPassword;