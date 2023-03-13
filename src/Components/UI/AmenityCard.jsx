import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const numOfColumns = 2;
const screenWidth = Dimensions.get('window').width;
const amenityCardWidth = screenWidth / numOfColumns;

const AmenityCard = ({ icon, amenity }) => {
	return (
		<View style={styles.amenityCard}>
			<Text style={styles.icon}>
				<Feather name={icon || 'home'} size={27} />
			</Text>
			<Text style={styles.amenityTitle}>{amenity || 'House'}</Text>
		</View>
	);
};

export default AmenityCard;

const styles = StyleSheet.create({
	amenityCard: {
		width: '100%',
		backgroundColor: '#f1f1f150',
		padding: 10,
		flexDirection: 'row',
		gap: 15,
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'flex-start',
		paddingHorizontal: 20,
		marginBottom: 10,
	},
	icon: {
		fontSize: 24,
		marginRight: 10,
	},
	amenityTitle: {
		fontSize: 20,
	},
});
