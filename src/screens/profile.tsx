import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';

const profile = ({ navigation }: { navigation: any }) => {
    const handleLogout = async () => {
        try {
            await auth().signOut();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                    style={styles.backIcon}
                    source={require('../images/go back-2.png')}
                />
            </TouchableOpacity>

            <Image
                style={styles.avatar}
                source={require('../images/avatar.png')}
            />
            <Text style={styles.text}>Your Name</Text>
            <Text style={styles.text}>yourname@gmail.com</Text>
            <View style={styles.container2}>
                <Text style={styles.text2}>Name :</Text>
                <Text style={styles.text3}>React Native</Text>
            </View>

            <View style={styles.container2}>
                <Text style={styles.text2}>Email account :</Text>
                <Text style={styles.text3}>yourname@gmail.com</Text>
            </View>

            <View style={styles.container2}>
                <Text style={styles.text2}>Mobile number :</Text>
                <Text style={styles.text3}>1230004593</Text>
            </View>

            <View style={styles.container2}>
                <Text style={styles.text2}>Location :</Text>
                <Text style={styles.text3}>Haryana</Text>
            </View>
            <TouchableOpacity onPress={handleLogout} style={{ marginTop: 50, marginLeft: 30, marginRight: '76%' }}>
                <Text style={{ color: 'red', fontSize: 18 }}>Logout</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E1D5C9',
    },
    backIcon: {
        height: 45,
        width: 45,
        resizeMode: 'contain',
        marginTop: 70,
        marginLeft: 26,
    },
    avatar: {
        height: 200,
        width: 200,
        resizeMode: 'contain',
        marginTop: 60,
        alignSelf: 'center',
        marginBottom: 20,
    },
    text: {
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
    },
    text2: {
        fontSize: 20,
        marginTop: 30,
        fontWeight: '500',
    },
    text3: {
        fontSize: 20,
        marginTop: 30,
        fontWeight: '500',
        marginLeft: 16,
    },
    container2: {
        flexDirection: 'row',
        marginLeft: 30,
    },
});

export default profile;