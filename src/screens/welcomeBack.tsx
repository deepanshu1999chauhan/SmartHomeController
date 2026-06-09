import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';

const welcomeBack = ({ navigation }: { navigation: any }) => {
    const [email, setEmail] = useState('');
    const [confirmpassword, setconfirmpassword] = useState('');
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleLogin = async () => {
        console.log('Login button pressed');
        console.log('Email:', email);
        console.log('Confirmpassword:', confirmpassword);

        if (!email || !confirmpassword) {
            Alert.alert('Error', 'Please fill all fields');
            return;
        }
        try {
            const userCredential = await auth().signInWithEmailAndPassword(email, confirmpassword);
            console.log('User Credential:', userCredential);
            console.log('User UID:', userCredential.user.uid);
            console.log('User Email:', userCredential.user.email);
            console.log('User DisplayName:', userCredential.user.displayName);

            setEmail('');
            setconfirmpassword('');

            Alert.alert('Success', 'Logged in successfully!');

        } catch (error: any) {
            console.log('Login Error:', error);
            if (error.code === 'auth/user-not-found') {
                Alert.alert('Error', 'No user found with this email!');
            } else if (error.code === 'auth/wrong-password') {
                Alert.alert('Error', 'Incorrect password!');
            } else if (error.code === 'auth/invalid-email') {
                Alert.alert('Error', 'Invalid email address!');
            } else {
                Alert.alert('Error', error.message);
            }
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
                <Text style={style.text}>Welcome Back!</Text>
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

            <View style={style.passwordContainer}>
                <TextInput
                    style={style.passwordInput}
                    placeholder='Confirm password'
                    value={confirmpassword}
                    onChangeText={setconfirmpassword}
                    secureTextEntry={!showConfirmPassword}
                />

                <TouchableOpacity
                    onPress={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                    } >
                    <Image
                        source={
                            showConfirmPassword
                                ? require('../images/eyes-2.png')
                                : require('../images/eyes.png')
                        }
                        style={style.eyeIcon}
                    />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={style.touchable2}
                onPress={() => navigation.navigate('forgotPassword')}
            >
                <Text style={style.text6}>Forgot password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.touchable}
                onPress={handleLogin}
            >
                <Text style={style.text3}>Log in</Text>
            </TouchableOpacity>

            <View style={style.container3}>
                <Text style={style.text4}>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.replace('welcome')} style={{flex: 1}}>
                    <Text style={{ color: '#C3934F', fontSize: 16 }}>Sign in</Text>
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
        marginBottom: 40,
    },
    textinput: {
        backgroundColor: '#fff',
        marginTop: 10,
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
        marginTop: 33
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
        marginBottom: 20,
    },
    touchable2: {
        marginHorizontal: 130,
        marginTop: 10,
    },
    text6: {
        textAlign: 'center',
        color: '#C3934F',
        fontSize: 16,
    },
    passwordContainer: {
        backgroundColor: '#fff',
        marginTop: 10,
        borderRadius: 23,
        marginHorizontal: 33,
        marginBottom: 23,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
    },

    passwordInput: {
        flex: 1,
        paddingVertical: 13,
        fontSize: 16,
        fontWeight: '600',
        color: '#333333',
    },

    eyeIcon: {
        height: 24,
        width: 24,
        resizeMode: 'contain',
    },
});

export default welcomeBack;