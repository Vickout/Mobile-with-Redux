import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from './pages/SignIn';
import SignIn from './pages/SignUp';
import SignIn from './pages/Begin';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen 
                    name="Begin" 
                    component={Begin} 
                />
                <Screen 
                    name="SignIn" 
                    component={SignIn} 
                />
                <Screen 
                    name="SignUp" 
                    component={SignUp}    
                />
            </Navigator>
        </NavigationContainer>
    );
}