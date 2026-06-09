import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const home = ({ navigation }: { navigation: any }) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>

                <View style={styles.topRow}>
                    <TouchableOpacity>
                        <Image
                            style={styles.backIcon}
                            source={require('../images/go back-2.png')}
                        />
                    </TouchableOpacity>

                    <Image
                        style={styles.avatar}
                        source={require('../images/avatar.png')}
                    />
                </View>
                <Text style={styles.welcomeText}>Welcome Kat Grem!</Text>
            </View>

            <View style={styles.roomCard}>
                <Text style={styles.roomText}>Choose the room you{'\n'}want to manage</Text>
            </View>

            <TouchableOpacity style={styles.container2}
                onPress={() => navigation.navigate('BedroomStack')}
            >
                <Text style={styles.text}>Bedrooms</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.container2}
                onPress={() => navigation.navigate('kitchenStack')}
            >
                <Text style={styles.text}>Kitchen</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.container2}
                onPress={() => navigation.navigate('bathroomStack')}
            >
                <Text style={styles.text}>Bathroom</Text>
            </TouchableOpacity>


            <TouchableOpacity
                style={styles.container2}
                onPress={() => navigation.navigate('livingStack')}
            >
                <Text style={styles.text}>Living room</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E1D5C9',
    },
    headerContainer: {
        backgroundColor: '#C3934F',
        height: 280,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        paddingTop: 50,
        paddingHorizontal: 25,
    },
    topRow: {
        flexDirection: 'row',
        gap: 90,
        marginTop: 20,
    },
    backIcon: {
        height: 45,
        width: 45,
        resizeMode: 'contain',
    },
    avatar: {
        height: 75,
        width: 75,
        resizeMode: 'contain',
    },
    welcomeText: {
        fontSize: 28,
        fontWeight: '500',
        color: '#000',
        marginTop: 43,
        textAlign: 'center',
    },
    roomCard: {
        backgroundColor: '#D8C2AA',
        marginHorizontal: 40,
        marginTop: 35,
        borderRadius: 70,
        paddingVertical: 13,
        paddingHorizontal: 28,
        elevation: 5,
        shadowOpacity: 0.2,
        marginBottom: 20
    },
    roomText: {
        fontSize: 22,
        fontWeight: '500',
        color: '#000',
        lineHeight: 23,
        marginLeft: 16
    },
    container2: {
        backgroundColor: '#e3b575',
        marginHorizontal: 90,
        marginTop: 35,
        borderRadius: 70,
        paddingVertical: 10,
        elevation: 5,
        shadowOpacity: 0.2,
        marginBottom: 10,
    },
    text: {
        fontSize: 20,
        fontWeight: '500',
        color: '#000',
        textAlign: 'center',
    },
});

export default home;