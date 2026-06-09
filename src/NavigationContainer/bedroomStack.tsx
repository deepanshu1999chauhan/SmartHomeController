import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import managebadroom from '../screens/managebadroom';
import managefans from '../screens/managefans';
import managesound from '../screens/managesound';
import managefans2 from '../screens/managefans2';
import manageheater from '../screens/manageheater';

const Stack = createNativeStackNavigator();

const BedroomStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>

      <Stack.Screen
        name="managebadroom"
        component={managebadroom}
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

export default BedroomStack;