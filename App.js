import React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { AuthStackNavigator } from './src/navigators/AuthStackNavigator';
import { AuthContext } from './src/contexts/AuthContext';

const Rootstack = createStackNavigator();
const AuthStack = createStackNavigator(); 

export default function() {
  const auth  = React.useMemo(() => ({

      login: (email, password) => { 
        console.log('login', email, password);
      },

      logout: () => {    
        console.log('logout');
      },

      register: (email, password ) => {
        console.log('register', email, password);
      },

  }),
    [],
   
  );

  return (

    <AuthContext.Provider value={auth}>
      <NavigationContainer>

        <Rootstack.Navigator 
          screenOptions={{
          headerShown: false,
        }}>

          <Rootstack.Screen name={'AuthStack'} component={AuthStackNavigator} />
          
        </Rootstack.Navigator>

      </NavigationContainer>
    </AuthContext.Provider>
  )
}



