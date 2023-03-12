import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileScreen } from '../Screens/screens';

const Stack = createStackNavigator();

function ProfileNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='ProfileScreen'
				component={ProfileScreen}
				options={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
}

export default ProfileNavigator;
