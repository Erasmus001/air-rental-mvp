import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { WishlistScreen } from '../Screens/screens';

const Stack = createStackNavigator();

const WishLisNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='WishListScreen'
				component={WishlistScreen}
				options={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
};

export default WishLisNavigator;
