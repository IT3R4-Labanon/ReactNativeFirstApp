import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigation} from '@react-navigation/stack';
import { RegistrationScreen } from './src/screens/RegistrationScreen';

const RootStack = createStackNavigator();
const AuthStack = createStackNavigator();


export default function() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name={'RootStack'} componenet={AuthStackNavigator} />

      </RootStack.Navigator>

    </NavigationContainer>
  );
}

