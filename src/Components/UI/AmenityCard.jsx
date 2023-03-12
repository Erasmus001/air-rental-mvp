import { Feather } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const AmenityCard = ({ icon, amenity }) => {
	return (
		<View style={styles.amenityCard}>
			<Text style={styles.icon}>
				<Feather name={icon || 'home'} size={22} />
			</Text>
			<Text style={styles.amenityTitle}>{amenity || 'House'}</Text>
		</View>
	);
};

export default AmenityCard;

const styles = StyleSheet.create({
	amenityCard: {
		width: '100%',
		backgroundColor: 'lightgray',
		padding: 10,
		flexDirection: 'row',
		gap: 10,
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	icon: {
		fontSize: 22,
	},
	amenityTitle: {
		fontSize: 14,
	},
});
