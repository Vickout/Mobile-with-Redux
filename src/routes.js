import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Begin from './pages/Begin';
import Main from './pages/Main';

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
                <Screen 
                    name="Main" 
                    component={Main}    
                />
            </Navigator>
        </NavigationContainer>
    );
}