import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/Navigation/AuthNavigator';
import AppContextProvider from './src/ContextAPI/ContextAPI';

const App = () => {
	return (
		<NavigationContainer>
			<AppContextProvider>
				<AuthNavigator />
			</AppContextProvider>
		</NavigationContainer>
	);
};

export default App;
