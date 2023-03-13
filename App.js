import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import TripsNavigator from './src/Navigators/TripsNavigator';
import WishLisNavigator from './src/Navigators/WishlistNavigator';
import HomeNavigator from './src/Navigators/HomeNavigator';
import ProfileNavigator from './src/Navigators/ProfileNavigator';
import AppContextProvider from './src/Context/AppContext';
import { Feather } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator();

const App = () => {
	return (
		<AppContextProvider>
			<NavigationContainer>
				<Tabs.Navigator
					initialRouteName='Index'
					screenOptions={{
						tabBarHideOnKeyboard: true,
						title: 'HomeScreen',
						tabBarStyle: {
							height: 70,
							shadowOpacity: 0.5,
							gap: 2,
							paddingVertical: 4,
							alignItems: 'center',
							justifyContent: 'center',
						},
						tabBarLabelStyle: { fontSize: 16, paddingTop: 0 },
					}}>
					<Tabs.Screen
						name='Home'
						component={HomeNavigator}
						options={{
							headerShown: false,
							tabBarIcon: ({ color }) => (
								<Feather name='search' size={25} color={color} />
							),
							tabBarLabel: 'Explore',
						}}
					/>
					<Tabs.Screen
						name='Trips'
						component={TripsNavigator}
						options={{
							headerShown: false,
							tabBarIcon: ({ color }) => (
								<Feather name='' size={25} color={color} />
							),
							tabBarLabel: 'Trips',
							tabBarLabelStyle: { fontSize: 18 },
						}}
					/>
					<Tabs.Screen
						name='Wishlist'
						component={WishLisNavigator}
						options={{
							headerShown: false,
							tabBarIcon: ({ color }) => (
								<Feather name='bookmark' size={25} color={color} />
							),
							tabBarLabel: 'Wishlist',
						}}
					/>
					<Tabs.Screen
						name='Profile'
						component={ProfileNavigator}
						options={{
							headerShown: false,
							tabBarIcon: ({ color }) => (
								<Feather name='user' size={25} color={color} />
							),
							tabBarLabel: 'Profile',
						}}
					/>
				</Tabs.Navigator>
			</NavigationContainer>
		</AppContextProvider>
	);
};

const getRouteName = (route) => {
	const RouteName = getFocusedRouteNameFromRoute(route);

	console.log(RouteName);
	if (RouteName.includes('ListingDetails')) {
		return 'none';
	}
};

// getRouteName()

export default App;
