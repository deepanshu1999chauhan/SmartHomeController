import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import managefans from '../screens/managefans';
import managesound from '../screens/managesound';
import managefans2 from '../screens/managefans2';
import manageheater from '../screens/manageheater';
import kitchen from '../screens/kitchen';

const Stack = createNativeStackNavigator();

const kitchenStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>

            <Stack.Screen
                name="kitchen"
                component={kitchen}
            />

            <Stack.Screen
                name="managefans"
                component={managefans}
            />

            <Stack.Screen
                name="managesound"
                component={managesound}
            />

            <Stack.Screen
                name="managefans2"
                component={managefans2}
            />

            <Stack.Screen
                name="manageheater"
                component={manageheater}
            />

        </Stack.Navigator>
    );
};

export default kitchenStack;