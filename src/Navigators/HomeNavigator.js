import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
	FilterScreen,
	HomeScreen,
	ListingDetailsScreen,
	SearchScreen,
} from '../Screens/screens';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Stack = createStackNavigator();

function HomeNavigator() {
	return (
		<Stack.Navigator initialRouteName='Home'>
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
					animationEnabled: true,
					headerShadowVisible: false,
					gestureEnabled: true,
				}}
			/>
			<Stack.Screen
				name='Filter'
				component={FilterScreen}
				options={{
					// headerShown: false,
					presentation: 'modal',
				}}
			/>
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

const getTabBarVisibility = (route) => {
	const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
	console.log(route, routeName);
};

export default HomeNavigator;

// const getHeaderTitle = (route) => {
// 	switch (routeName) {
// 		case 'Home':
// 			return 'HomeScreen';
// 		case 'Trips':
// 			return 'TripsScreen';
// 		case 'Wishlist':
// 			return 'WishListScreen';
// 		case 'Profile':
// 			return 'ProfileScreen';
// 	}
// };
