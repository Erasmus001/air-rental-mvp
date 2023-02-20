import {
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import React from 'react';
import { Feather, FontAwesome5, Ionicons } from '@expo/vector-icons/';
import { Link, useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
	const navigation = useNavigation();

	const handleLogout = () => navigation.replace('Signin');

	return (
		<ScrollView
			horizontal={false}
			contentContainerStyle={styles.profileScreen}
			showsVerticalScrollIndicator={false}>
			<View style={styles.profileHd}>
				<Text style={styles.profileHdText}>Profile</Text>
			</View>
			{/* Profile */}
			<View style={styles.profileLink}>
				<Link to='/UserProfile' style={styles.profileEditLink}>
					<View style={styles.profileEditLinkUser}>
						<View style={styles.avatar}>
							<FontAwesome5 name='user' size={28} style={styles.userIcon} />
						</View>
						<View>
							<Text style={styles.userName}>Erasmus</Text>
							<Text style={styles.userSmallTxt}>Show profile</Text>
						</View>
					</View>
					<View>
						<FontAwesome5
							name='chevron-right'
							size={22}
							style={styles.chevronRightIcon}
						/>
					</View>
				</Link>
			</View>
			{/* Account Settings */}
			<View style={styles.accountSettings}>
				<View style={styles.accountSettingsHd}>
					<Text style={styles.accountSettingsHdText}>Account Settings</Text>
				</View>
				<View style={styles.accountLists}>
					<Link to='/PersonalInfo' style={styles.listLink}>
						<View style={styles.list}>
							<FontAwesome5 name='user' size={22} />
							<Text style={styles.listText}>Personal information</Text>
						</View>
						<FontAwesome5
							name='chevron-right'
							size={22}
							style={styles.chevronRightIcon}
						/>
					</Link>
					<Link to='/LoginSecurity' style={styles.listLink}>
						<View style={styles.list}>
							<Feather name='shield' size={22} />
							<Text style={styles.listText}>Login & Security</Text>
						</View>
						<FontAwesome5
							name='chevron-right'
							size={22}
							style={styles.chevronRightIcon}
						/>
					</Link>
					<Link to='/Payment' style={styles.listLink}>
						<View style={styles.list}>
							<Ionicons name='cash' size={22} />
							<Text style={styles.listText}>Payments and payouts</Text>
						</View>
						<FontAwesome5
							name='chevron-right'
							size={22}
							style={styles.chevronRightIcon}
						/>
					</Link>
					<Link to='/Inbox' style={styles.listLink}>
						<View style={styles.list}>
							<FontAwesome5 name='bell' size={22} />
							<Text style={styles.listText}>Notifications</Text>
						</View>
						<FontAwesome5
							name='chevron-right'
							size={22}
							style={styles.chevronRightIcon}
						/>
					</Link>
				</View>
			</View>
			{/* Support */}
			<View style={styles.accountSettings}>
				<View style={styles.accountSettingsHd}>
					<Text style={styles.accountSettingsHdText}>Support</Text>
				</View>
				<View style={styles.accountLists}>
					<Link to='/GetHelp' style={styles.listLink}>
						<View style={styles.list}>
							<Feather name='shield' size={22} />
							<Text style={styles.listText}>Get help</Text>
						</View>
						<FontAwesome5
							name='chevron-right'
							size={22}
							style={styles.chevronRightIcon}
						/>
					</Link>
					<Link to='/Feedback' style={styles.listLink}>
						<View style={styles.list}>
							<Ionicons name='cash' size={22} />
							<Text style={styles.listText}>Give us feedback</Text>
						</View>
						<FontAwesome5
							name='chevron-right'
							size={22}
							style={styles.chevronRightIcon}
						/>
					</Link>
				</View>
			</View>
			{/* Legal */}
			<View style={styles.accountSettings}>
				<View style={styles.accountSettingsHd}>
					<Text style={styles.accountSettingsHdText}>Legal</Text>
				</View>
				<View style={styles.accountLists}>
					<Link to='/Terms' style={styles.listLink}>
						<View style={styles.list}>
							<FontAwesome5 name='user' size={22} />
							<Text style={styles.listText}>Terms of Service</Text>
						</View>
						<FontAwesome5
							name='chevron-right'
							size={22}
							style={styles.chevronRightIcon}
						/>
					</Link>
					<Link to='/PrivacyPolicy' style={styles.listLink}>
						<View style={styles.list}>
							<Feather name='shield' size={22} />
							<Text style={styles.listText}>Privacy Policy</Text>
						</View>
						<FontAwesome5
							name='chevron-right'
							size={22}
							style={styles.chevronRightIcon}
						/>
					</Link>
					<TouchableOpacity style={styles.listLink} onPress={handleLogout}>
						<View style={[styles.list, styles.logout]}>
							<Feather
								name='log-out'
								size={22}
								style={[styles.chevronRightIcon, styles.logoutIcon]}
							/>
							<Text style={[styles.listText, styles.logout]}>Logout</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	);
};

export default ProfileScreen;

const styles = StyleSheet.create({
	profileScreen: {
		width: '100%',
		flex: 1,
		height: '100vh',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		gap: 30,
		backgroundColor: 'white',
	},
	profileHd: {
		width: '100%',
		position: 'sticky',
		paddingTop: 40,
		top: 0,
		left: 0,
		zIndex: 1,
		backgroundColor: 'white',
		paddingHorizontal: 30,
		paddingVertical: 10,
	},
	profileHdText: {
		fontSize: 26,
		fontWeight: 550,
	},
	profileLink: {
		width: '100%',
		paddingHorizontal: 30,
	},
	profileEditLink: {
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
	},
	profileEditLinkUser: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		gap: 10,
	},
	avatar: {
		borderRadius: '50%',
		backgroundColor: 'gray',
		padding: 15,
		height: 60,
		width: 60,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	userIcon: {
		color: 'white',
		fontWeight: 500,
	},
	userName: {
		fontSize: 20,
		fontWeight: 500,
	},
	userSmallTxt: {
		fontSize: 15,
		color: '#3a3a3aa8',
	},
	// Account Settings
	accountSettings: {
		width: '100%',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		paddingHorizontal: 30,
		gap: 10,
		backgroundColor: 'white',
	},
	accountSettingsHd: {
		width: '100%',
		marginBottom: 20,
	},
	accountSettingsHdText: {
		fontSize: 20,
		fontWeight: 550,
	},
	accountLists: {
		width: '100%',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		backgroundColor: 'white',
		gap: 10,
	},
	listLink: {
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
		borderBottomColor: 'black',
	},
	list: {
		paddingVertical: 12,
		height: '100%',
		flex: 1,
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		gap: 15,
	},
	listText: {
		fontSize: 16,
	},
	// Logout Button
	logout: {
		width: '100%',
		color: 'red',
		fontSize: 20,
		fontWeight: 550,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	chevronRightIcon: {
		fontWeight: 400,
		fontSize: 18,
	},
	logoutIcon: {
		color: 'red',
	},
});
