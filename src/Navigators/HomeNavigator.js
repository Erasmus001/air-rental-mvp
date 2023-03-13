import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
	FilterScreen,
	HomeScreen,
	ListingDetailsScreen,
	SearchScreen,
} from '../Screens/screens';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Stack = createStackNavigator();

function HomeNavigator() {
	return (
		<Stack.Navigator
			initialRouteName='Home'
			screenOptions={{
				gestureDirection: 'horizontal',
				animationEnabled: true,
			}}>
			<Stack.Screen
				name='Home'
				component={HomeScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name='Search'
				component={SearchScreen}
				options={{
					// animationEnabled: true,
					headerShadowVisible: false,
				}}
			/>
			<Stack.Screen name='Filter' component={FilterScreen} />
			<Stack.Screen
				name='ListingDetails'
				component={ListingDetailsScreen}
				options={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
}

export default HomeNavigator;
