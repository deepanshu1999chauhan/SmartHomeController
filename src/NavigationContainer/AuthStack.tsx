import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import bottumtab from './bottumtab';
import BedroomStack from './bedroomStack';
import kitchenStack from './kitchenStack';
import bathroomStack from './bathroomStack';
import living from '../screens/living';
import livingStack from './livingStack';

const Stack = createNativeStackNavigator();
const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>

            <Stack.Screen name="Main" component={bottumtab} />

            <Stack.Screen name="BedroomStack" component={BedroomStack} />
            <Stack.Screen name="kitchenStack" component={kitchenStack} />
            <Stack.Screen name="bathroomStack" component={bathroomStack} />
            <Stack.Screen name="livingStack" component={livingStack} />

        </Stack.Navigator>
    );
};

export default AuthStack;