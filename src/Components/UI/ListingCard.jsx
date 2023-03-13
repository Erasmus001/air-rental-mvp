import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

const ListingCard = ({ item }) => {
	const navigation = useNavigation();

	// Destructure all details
	const {
		id,
		title,
		imgUrl,
		location,
		minPrice,
		maxPrice,
		price,
		reviews,
		amenities,
		desc,
		host,
		typeOfListing,
	} = item;

	return (
		<Pressable
			style={styles.card}
			onPress={() => navigation.navigate('ListingDetails', { item })}>
			<View style={styles.cardImgContainer}>
				{/* <View style={styles.cardImg} /> */}
				<Image
					source={imgUrl}
					resizeMethod='scale'
					resizeMode='cover'
					style={styles.cardImg}
				/>
			</View>
			<View style={styles.cardContent}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.location}>{location}</Text>
				<Text style={styles.price}>Ghc {price}</Text>
			</View>
		</Pressable>
	);
};

export default ListingCard;

const styles = StyleSheet.create({
	card: {
		width: '100%',
		columnGap: 15,
		marginBottom: 50,
	},
	cardImgContainer: {
		width: '100%',
		borderRadius: 15,
		overflow: 'hidden',
		height: 300,
		marginBottom: 20,
	},
	cardImg: {
		height: '100%',
		backgroundColor: 'whitesmoke',
		width: '100%',
	},
	cardContent: {
		width: '100%',
	},
	title: {
		fontSize: 22,
		marginBottom: 5,
		fontWeight: '700',
	},
	location: {
		fontSize: 18,
		marginBottom: 5,
		color: 'gray',
	},
	price: {
		fontSize: 20,
		fontWeight: '700',
	},
});
