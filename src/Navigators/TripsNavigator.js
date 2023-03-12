import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TripsScreen } from '../Screens/screens';

const Stack = createStackNavigator();

function TripsNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='TripsScreen'
				component={TripsScreen}
				options={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
}

export default TripsNavigator;
