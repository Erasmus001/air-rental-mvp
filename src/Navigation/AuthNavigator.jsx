import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
	ResetEmailScreen,
	SearchScreen,
	SigninScreen,
	SignupScreen,
} from '../Screens/screens';
import SplashScreen from '../Components/SplashScreen';
import BottomTabsNavigator from '../Navigation/BottomTabsNavigator';

// Stack
const Stack = createStackNavigator();

const AuthNavigator = () => {
	return (
		<Stack.Navigator
			initialRouteName='SplashScreen'
			screenOptions={{
				headerShown: false,
			}}>
			<Stack.Screen name='SplashScreen' component={SplashScreen} />
			<Stack.Screen name='Signup' component={SignupScreen} />
			<Stack.Screen name='Signin' component={SigninScreen} />
			<Stack.Screen name='ResetEmail' component={ResetEmailScreen} />
			<Stack.Screen name='Home' component={BottomTabsNavigator} />
			<Stack.Screen name='Search' component={SearchScreen} />
		</Stack.Navigator>
	);
};

export default AuthNavigator;
