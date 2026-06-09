import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import splash from '../screens/splash';
import main from '../screens/main';
import welcome from '../screens/welcome';
import welcomeBack from '../screens/welcomeBack';
import forgotPassword from '../screens/forgotPassword';

const Stack = createNativeStackNavigator();
const UnauthStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>

            <Stack.Screen name="splash" component={splash} />
            <Stack.Screen name="main" component={main} />
            <Stack.Screen name="welcome" component={welcome} />
            <Stack.Screen name="welcomeBack" component={welcomeBack} />
            <Stack.Screen name="forgotPassword" component={forgotPassword} />

        </Stack.Navigator>
    );
};

export default UnauthStack;