/* fundamental import */
import React from 'react';
/* navigation imports */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
/* screens imports */
import SignIn from './screens/SignIn/SignIn';
import SignUp from './screens/SignIn/SignUp';
import RecoverPassword from './screens/SignIn/RecoverPassword';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }}/>
          <Stack.Screen name="RecoverPassword" component={RecoverPassword} options={{ headerShown: false }}/>
          <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
