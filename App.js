import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Components
import SigninScreen from './src/Screens/SigninScreen';
import HomeScreen from './src/Screens/Homescreen';
import SplashScreen from './src/Components/SplashScreen';
import AppContextProvider from './src/ContextAPI/ContextAPI';

const Stack = createStackNavigator();

const App = () => {
	return (
		<AppContextProvider>
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName='SplashScreen'
					screenOptions={{ headerShown: false }}>
					<Stack.Screen name='SplashScreen' component={SplashScreen} />
					<Stack.Screen name='Signin' component={SigninScreen} />
					<Stack.Screen name='Home' component={HomeScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</AppContextProvider>
	);
};

export default App;
