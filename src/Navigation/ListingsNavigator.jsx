import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from '../Screens/SearchScreen';
import HomeScreen from '../Screens/HomeScreen';

// Stack
const Stack = createStackNavigator();

const ListingsNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerBackTitle: false,
				headerTitle: '',
				headerMode: 'float',
				headerShadowVisible: false,
			}}>
			<Stack.Screen
				name='SearchListing'
				component={SearchScreen}
				options={{
					headerTitle: 'Search',
				}}
			/>
			<Stack.Screen name='SearchListings' component={HomeScreen} />
		</Stack.Navigator>
	);
};

export default ListingsNavigator;
