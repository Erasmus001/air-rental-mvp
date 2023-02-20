import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
	HomeScreen,
	InboxScreen,
	// ProfileScreen,
	WishListsScreen,
} from '../Screens/screens';
import { FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { notifications } from '../api/data';
import SettingsNavigator from './SettingsNavigator';

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
	return (
		<Tab.Navigator
			initialRouteName='Home'
			screenOptions={{
				tabBarStyle: styles.bottomTabs,
				tabBarShowLabel: false,
			}}>
			<Tab.Screen
				name='Explore'
				component={HomeScreen}
				options={{
					headerShown: false,
					tabBarIcon: ({ color }) => (
						<FontAwesome5 name='search' size={20} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name='Wishlists'
				component={WishListsScreen}
				options={{
					headerShown: false,
					tabBarIcon: ({ color }) => (
						<FontAwesome5 name='heart' size={20} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name='Inbox'
				component={InboxScreen}
				options={{
					headerShown: false,
					tabBarBadge: notifications?.length,
					tabBarBadgeStyle: styles.badge,
					tabBarIcon: ({ color }) => (
						<FontAwesome5 name='bell' size={20} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name='Profile'
				component={SettingsNavigator}
				options={{
					headerShown: false,
					tabBarIcon: ({ color }) => (
						<FontAwesome5 name='user' size={20} color={color} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default BottomTabsNavigator;

const styles = StyleSheet.create({
	bottomTabs: {
		height: 65,
		backgroundColor: 'white',
		paddingVertical: 10,
	},
	badge: {
		backgroundColor: 'black',
		fontSize: 12,
		color: 'white',
	},
});
