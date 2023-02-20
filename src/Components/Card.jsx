import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
// import Img from '../../assets/Airbnb Mobile Screenshot/Screenshot_20230218_012320_com.airbnb.android.jpg';

const Card = ({ houses }) => {
	const { id, title, price, desc, _location, imgUrl } = houses.item;
	return (
		<View style={styles.listingCard} id={id}>
			<View style={styles.listingImgWrapper}>
				{/* <Image source={Img} style={styles.listingImg} /> */}
				<View style={styles.listingImg}></View>
			</View>
			<View style={styles.details}>
				<Text style={styles.listingTitle}>{title}</Text>
				<Text style={styles.listingDesc}>{desc}</Text>
				<Text style={styles.listingLocation}>{_location}</Text>
				<Text style={styles.listingPrice}>{price}</Text>
			</View>
		</View>
	);
};

export default Card;

const styles = StyleSheet.create({
	listingCard: {
		width: '100%',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		marginVertical: 10,
		overflow: 'hidden',
	},
	details: {
		width: '100%',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		gap: 5,
		padding: 20,
	},
	listingImgWrapper: {
		width: '100%',
		height: 300,
		overflow: 'hidden',
		borderRadius: 10,
	},
	listingImg: {
		height: '100%',
		width: '100%',
		backgroundColor: 'lightgray',
	},
	listingTitle: {
		fontSize: 20,
		fontWeight: 550,
	},
	listingDesc: {
		fontSize: 16,
	},
	listingLocation: {
		fontSize: 14,
	},
	listingPrice: {
		fontSize: 18,
		fontWeight: 550,
	},
});
