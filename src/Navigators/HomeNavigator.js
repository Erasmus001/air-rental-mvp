import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../Screens/screens';

const Stack = createStackNavigator();

function HomeNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='Home'
				component={HomeScreen}
				options={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
}

export default HomeNavigator;
