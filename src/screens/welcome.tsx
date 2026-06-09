import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import { SafeAreaView } from 'react-native-safe-area-context';

const welcome = ({ navigation }: { navigation: any }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setconfirmpassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSignIn = async () => {
        console.log('Sign In button pressed');
        console.log('Full Name:', username, 'Email:', email, 'Password:', password, 'Confirmpassword:', confirmpassword);

        if (!username || !email || !password || !confirmpassword) {
            Alert.alert('Error', 'Please fill all fields');
            return;
        }
        if (password !== confirmpassword) {
            Alert.alert('Error', 'Passwords do not match');
            return;
        }

        try {
            const userCredential = await auth().createUserWithEmailAndPassword(email, password);
            console.log('User Created:', userCredential.user.uid);

            await userCredential.user.updateProfile({ displayName: username });
            console.log('DisplayName updated to:', username);

            setUsername('');
            setEmail('');
            setPassword('');
            setconfirmpassword('');

            Alert.alert('Success', 'User account created!');

        } catch (error: any) {
            console.log('Signup Error:', error);
            if (error.code === 'auth/email-already-in-use') {
                Alert.alert('Error', 'That email address is already in use!');
            } else if (error.code === 'auth/invalid-email') {
                Alert.alert('Error', 'That email address is invalid!');
            } else if (error.code === 'auth/weak-password') {
                Alert.alert('Error', 'Password should be at least 6 characters!');
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
                        style={style.image}
                        source={require('../images/go back.png')}
                    />
                </TouchableOpacity>
                <Text style={style.text}>Welcome!</Text>
            </View>
            <Text style={style.text2}>Let us help you control your house.</Text>
            <TextInput
                style={style.textinput}
                placeholder='Enter your full name'
                value={username}
                onChangeText={setUsername}
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
                    placeholder='Enter password'
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                />

                <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                >
                    <Image
                        source={
                            showPassword
                                ? require('../images/eyes-2.png')
                                : require('../images/eyes.png')
                        }
                        style={style.eyeIcon}
                    />
                </TouchableOpacity>
            </View>

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
                                    
            <TouchableOpacity style={style.touchable}
                onPress={handleSignIn}
            >
                <Text style={style.text3}>Register</Text>
            </TouchableOpacity>

            <View style={style.container3}>
                <Text style={style.text4}>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.replace('welcomeBack')} style={{flex: 1}}>
                    <Text style={{ color: '#C3934F', fontSize: 16 }}>Log in</Text>
                </TouchableOpacity>
            </View>

           <View>
            <Text>
            </Text>
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
        gap: 43
    },
    image: {
        height: 50,
        width: 50,
        resizeMode: 'contain',
        marginLeft: 46
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
        marginBottom: 50
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
    },
    touchable: {
        backgroundColor: '#C3934F',
        padding: 20,
        borderRadius: 36,
        marginHorizontal: 33,
        marginTop: 36
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
    passwordContainer: {
        backgroundColor: '#fff',
        marginTop: 20,
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

export default welcome;