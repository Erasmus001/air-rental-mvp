import { StyleSheet } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../Screens/ProfileScreen';
import UserProfileScreen from '../Screens/UserScreens/UserProfileScreen';
import PersonalInfoScreen from '../Screens/UserScreens/PersonalInfoScreen';

const Stack = createStackNavigator();

const SettingsNavigator = () => {
	return (
		<Stack.Navigator
			initialRouteName='User'
			screenOptions={{
				headerShown: false,
			}}>
			<Stack.Screen name='User' component={ProfileScreen} />
			<Stack.Screen name='UserProfile' component={UserProfileScreen} />
			<Stack.Screen name='PersonalInfo' component={PersonalInfoScreen} />
			{/* <Stack.Screen name='LoginSecurity' component={UserProfileScreen} /> */}
			{/* <Stack.Screen name='Payment' component={UserProfileScreen} /> */}
		</Stack.Navigator>
	);
};

export default SettingsNavigator;

const styles = StyleSheet.create({});
