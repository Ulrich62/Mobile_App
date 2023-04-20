
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../screens/Home/HomeScreen';
import DetailsScreen from '../screens/Details/DetailsScreen';

const Stack = createStackNavigator();

function MainNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleStyle: {
                    fontWeight: 'bold',
                    textAlign: 'center',
                    alignSelf: 'center',
                    flex: 1,
                    marginTop: 10,
                    marginLeft: 10,
                }
            }}
        >
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Details' component={DetailsScreen} />
        </Stack.Navigator>
    )
}


export default function AppContainer() {
    return (
        <NavigationContainer>
            <MainNavigator />
        </NavigationContainer>
    )
}

