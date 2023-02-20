import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, SigninScreen, SignupScreen } from '../Screens/screens';
import SplashScreen from '../Components/SplashScreen';

// Stack
const Stack = createStackNavigator();

const AuthNavigator = () => {
	return (
		<Stack.Navigator initialRouteName='Signin'>
			<Stack.Screen name='SplashScreen' component={SplashScreen} />
			<Stack.Screen name='Home' component={HomeScreen} />
			<Stack.Screen name='Signup' component={SignupScreen} />
			<Stack.Screen name='Signin' component={SigninScreen} />
		</Stack.Navigator>
	);
};

export default AuthNavigator;
