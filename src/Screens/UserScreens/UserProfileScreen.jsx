import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import { useAppContext } from '../../ContextAPI/ContextAPI';
import { useNavigation } from '@react-navigation/native';
import EditProfileModal from '../../Components/Modals/EditProfileModal';

const UserProfileScreen = () => {
	const [showModal, setShowModal] = useState(false);
	const navigation = useNavigation();
	const { currentUser } = useAppContext();

	const handleGetBadge = () => alert('Badge Acquired');
	return (
		<View style={styles.userProfileScreen}>
			<View style={styles.userHd}>
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<FontAwesome5 name='chevron-left' size={20} />
				</TouchableOpacity>
				<TouchableOpacity onPress={() => setShowModal(!showModal)}>
					<Text style={styles.editUser}>Edit</Text>
				</TouchableOpacity>
			</View>

			{/* User Profile Avatar */}
			<View style={styles.userContent}>
				<View style={styles.userProfileAvatar}>
					<View style={styles.avatarImg}>
						<FontAwesome5 name='user' size={45} style={styles.Icon} />
					</View>
					<View style={styles.userInfo}>
						<Text style={styles.userName}>Hi, I'm {currentUser}</Text>
						<Text style={styles.joinedDate}>Joined in September 2022</Text>
					</View>
				</View>

				{/* Badge */}
				<View style={styles.badge}>
					<View style={styles.badgeContent}>
						<Feather name='shield' size={42} style={styles.badgeIcon} />
					</View>
					<View style={styles.badgeTexts}>
						<Text style={styles.badgeH3}>Identity verification</Text>
						<Text style={styles.badgeSmallText}>
							Show others you're really you with the identity verification
							badge.
						</Text>
					</View>
					<TouchableOpacity style={styles.badgeBtn} onPress={handleGetBadge}>
						<Text style={styles.badgeBtnText}>Get the badge</Text>
					</TouchableOpacity>
				</View>

				{/* About */}

				{/* User Identity Confirmation */}
				<View style={styles.identity}>
					<Text style={styles.identityUser}>{currentUser} confirmed</Text>
					<Text style={styles.identityConfirm}>
						<Feather name='check' size={20} style={styles.checkMarkIcon} />
						<Text style={styles.identityNumber}>Phone number</Text>
					</Text>
				</View>
			</View>

			{/* Edit Profile Modal */}
			{showModal ? <EditProfileModal /> : null}
		</View>
	);
};

export default UserProfileScreen;

const styles = StyleSheet.create({
	userProfileScreen: {
		height: '100vh',
		flex: 1,
		width: '100%',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		gap: 10,
		backgroundColor: 'white',
	},
	userHd: {
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 20,
		paddingVertical: 25,
	},
	editUser: {
		textDecorationLine: 'underline',
		fontSize: 18,
	},

	// User Profile
	userProfileAvatar: {
		width: '100%',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		gap: 15,
	},
	userContent: {
		width: '100%',
		paddingVertical: 20,
		paddingHorizontal: 30,
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		gap: 30,
	},
	avatarImg: {
		backgroundColor: 'gray',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: 90,
		width: 90,
		padding: 10,
		borderRadius: '50%',
	},
	Icon: {
		color: 'white',
	},
	userName: {
		fontSize: 24,
		fontWeight: 550,
		color: 'black',
		marginBottom: 5,
	},
	joinedDate: {
		fontSize: 17,
		color: 'gray',
	},

	// Badge
	badge: {
		width: '100%',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		gap: 10,
	},
	badgeTexts: {
		width: '100%',
		display: 'flex',
		lignItems: 'flex-start',
		justifyContent: 'flex-start',
	},
	badgeH3: {
		fontSize: 16,
		marginBottom: 5,
		marginTop: 10,
		fontWeight: 550,
	},
	badgeSmallText: {
		fontSize: 14,
	},
	badgeBtn: {
		width: '100%',
		padding: 13,
		borderWidth: 1,
		borderStyle: 'solid',
		borderRadius: 7,
		borderColor: 'black',
		textAlign: 'center',
		marginTop: 5,
	},
	badgeBtnText: {
		fontSize: 16,
		fontWeight: 600,
	},
	badgeIcon: {
		color: 'dodgerblue',
	},

	// Identity
	identity: {
		width: '100%',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		gap: 20,
	},
	identityUser: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	identityConfirm: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		gap: 10,
	},
	checkMarkIcon: {
		fontWeight: 550,
	},
	identityNumber: {
		fontSize: 16,
	},
});
