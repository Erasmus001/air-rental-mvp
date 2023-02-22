import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Components
import ProfileScreen from '../Screens/ProfileScreen';
import UserProfileScreen from '../Screens/UserScreens/UserProfileScreen';
import PersonalInfoScreen from '../Screens/UserScreens/PersonalInfoScreen';
import GetHelpScreen from '../Screens/UserScreens/GetHelpScreen';
import {
	FeedbackScreen,
	LoginSecurityScreen,
	PaymentPayoutScreen,
	PrivacyPolicyScreen,
	TermsAndServiceScreen,
} from '../Screens/UserScreens/userScreens';

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
			<Stack.Screen name='LoginSecurity' component={LoginSecurityScreen} />
			<Stack.Screen name='Payment' component={PaymentPayoutScreen} />
			<Stack.Screen name='GetHelp' component={GetHelpScreen} />
			<Stack.Screen name='Feedback' component={FeedbackScreen} />
			<Stack.Screen name='Terms' component={TermsAndServiceScreen} />
			<Stack.Screen name='PrivacyPolicy' component={PrivacyPolicyScreen} />
		</Stack.Navigator>
	);
};

export default SettingsNavigator;
