import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBar from './TabBar';
import Homescreen from '../Screens/Homescreen';
import SigninScreen from '../Screens/SigninScreen';
import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: 'red' }}>
			<Tab.Navigator
				initialRouteName='Home'
				header={null}
				headerMode='none'
				tabBar={(props) => <TabBar {...props} />}
				screenOptions={{
					keyboardHidesTabBar: true,
				}}
				backBehavior={'none'}>
				<Tab.Screen name='Home' component={Homescreen} />
				<Tab.Screen name='Signin' component={SigninScreen} />
			</Tab.Navigator>
		</SafeAreaView>
	);
};

export default BottomTabs;

const styles = StyleSheet.create({});
