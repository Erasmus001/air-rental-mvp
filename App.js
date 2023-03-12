import 'react-native-gesture-handler';
import React from 'react';
import {
	NavigationContainer,
	useNavigationContainerRef,
} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TripsNavigator from './src/Navigators/TripsNavigator';
import WishLisNavigator from './src/Navigators/WishlistNavigator';
import HomeNavigator from './src/Navigators/HomeNavigator';
import ProfileNavigator from './src/Navigators/ProfileNavigator';
import { useFlipper } from '@react-navigation/devtools';

const Tabs = createBottomTabNavigator();

const navigationRef = useNavigationContainerRef();

useFlipper(navigationRef);

const App = () => {
	return (
		<NavigationContainer ref={navigationRef}>
			<Tabs.Navigator>
				<Tabs.Screen name='Home' component={HomeNavigator} />
				<Tabs.Screen name='Trips' component={TripsNavigator} />
				<Tabs.Screen name='Wishlist' component={WishLisNavigator} />
				<Tabs.Screen name='Profile' component={ProfileNavigator} />
			</Tabs.Navigator>
		</NavigationContainer>
	);
};

export default App;
