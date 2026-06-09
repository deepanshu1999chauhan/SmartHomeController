import { View, Text, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import home from '../screens/home';
import BedroomStack from './bedroomStack';
import profile from '../screens/profile';
import save from '../screens/save';

const Tab = createBottomTabNavigator();

const bottumtab = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#E1D5C9',
                    height: 70,
                    borderTopWidth: 0,
                },
                tabBarActiveTintColor: '#C3934F',
                tabBarInactiveTintColor: '#FFFFFF',
            }}
        >
            <Tab.Screen name="home" component={home}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: 'transparent',
                        position: 'absolute',
                        height: 78,
                        borderTopWidth: 0,
                        elevation: 0,
                        marginHorizontal: 26,
                    },
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require('../images/home2.png')}
                            style={{
                                width: 30,
                                height: 30,
                                resizeMode: 'contain',
                                tintColor: focused ? '#C3934F' : 'black',
                            }}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name="managebadroom"
                component={BedroomStack}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: 'transparent',
                        position: 'absolute',
                        height: 78,
                        borderTopWidth: 0,
                        elevation: 0,
                        marginHorizontal: 26,
                    },
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require('../images/manage.png')}
                            style={{
                                width: 30,
                                height: 30,
                                resizeMode: 'contain',
                                tintColor: focused ? '#C3934F' : 'black',
                            }}
                        />
                    ),
                }}
            />
            <Tab.Screen name="profile" component={profile}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: 'transparent',
                        position: 'absolute',
                        height: 78,
                        borderTopWidth: 0,
                        elevation: 0,
                        marginHorizontal: 26,
                    },
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require('../images/profile.png')}
                            style={{
                                width: 30,
                                height: 30,
                                resizeMode: 'contain',
                                tintColor: focused ? '#C3934F' : 'black',
                            }}
                        />
                    ),
                }}
            />
            <Tab.Screen name="save" component={save}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: 'transparent',
                        position: 'absolute',
                        height: 78,
                        borderTopWidth: 0,
                        elevation: 0,
                        marginHorizontal: 26,
                    },
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require('../images/save.png')}
                            style={{
                                width: 30,
                                height: 30,
                                resizeMode: 'contain',
                                tintColor: focused ? '#C3934F' : 'black',
                            }}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default bottumtab;