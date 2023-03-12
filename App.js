import 'react-native-gesture-handler';
import React from 'react';
import {
	NavigationContainer,
	// useNavigationContainerRef,
} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TripsNavigator from './src/Navigators/TripsNavigator';
import WishLisNavigator from './src/Navigators/WishlistNavigator';
import HomeNavigator from './src/Navigators/HomeNavigator';
import ProfileNavigator from './src/Navigators/ProfileNavigator';
import AppContextProvider from './src/Context/AppContext';

const Tabs = createBottomTabNavigator();

const App = () => {
	return (
		<AppContextProvider>
			<NavigationContainer>
				<Tabs.Navigator>
					<Tabs.Screen
						name='Home'
						component={HomeNavigator}
						options={{
							headerShown: false,
						}}
					/>
					<Tabs.Screen name='Trips' component={TripsNavigator} />
					<Tabs.Screen name='Wishlist' component={WishLisNavigator} />
					<Tabs.Screen name='Profile' component={ProfileNavigator} />
				</Tabs.Navigator>
			</NavigationContainer>
		</AppContextProvider>
	);
};

export default App;
