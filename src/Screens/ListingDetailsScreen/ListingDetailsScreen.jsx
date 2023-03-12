import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	ScrollView,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AmenityCard from '../../Components/UI/AmenityCard';

const ListingDetailsScreen = ({ route }) => {
	const navigation = useNavigation();

	const { item } = route?.params;

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
		<ScrollView style={styles.listingDetailScreen}>
			{/* Will be replace by original image */}
			<View style={styles.listingImgContainer}>
				<View style={styles.listingImg} />
			</View>

			{/* Detail Screen Header */}
			<View style={styles.listingHeader}>
				<TouchableOpacity
					onPress={() => {
						navigation.goBack();
					}}
					style={styles.headerBtn}>
					<Feather
						name='arrow-left'
						size={20}
						style={{ color: 'white', fontSize: 22 }}
					/>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => {}} style={styles.headerBtn}>
					<Feather
						name='heart'
						size={20}
						style={{ color: 'white', fontSize: 22 }}
					/>
				</TouchableOpacity>
			</View>

			{/* Listing Details */}
			{/* Listing Title, desc, price, location, rating, bookmark */}
			<View style={styles.details}>
				<View style={styles.detailsHd}>
					<Text style={styles.title}>{title}</Text>
					<Text style={styles.location}>{location}</Text>
					<Text style={styles.desc}>{desc}</Text>
					{/* <Text>
					{reviews?.map((review) => (
						<Text key={review}>{review.review}</Text>
					))}
				</Text> */}
				</View>

				{/* Details properties */}
				<View style={styles.listingDetails}>
					<Text style={styles.listingDetailsTitle}>Property Details</Text>
					<View style={styles.amenities}>
						<AmenityCard amenity={'House'} icon={''} />
						<AmenityCard amenity={'Garden'} icon={''} />
						<AmenityCard amenity={'Pool'} icon={''} />
					</View>
				</View>

				<View style={styles.mapContainer}>
					<Text>Location</Text>
					<View style={styles.map} />
				</View>
			</View>
		</ScrollView>
	);
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
	listingDetailScreen: {
		flex: 1,
		width: '100%',
		backgroundColor: 'white',
	},
	listingImgContainer: {
		width: '100%',
		height: 300,
		backgroundColor: 'lightgray',
		position: 'relative',
	},
	listingImg: {
		height: '100%',
		width: '100%',
		resizeMode: 'cover',
	},
	listingHeader: {
		position: 'absolute',
		flexDirection: 'row',
		top: 30,
		left: 0,
		width: '100%',
		// backgroundColor: 'red',
		height: 60,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 20,
		justifyContent: 'space-between',
	},
	headerBtn: {
		padding: 12,
		backgroundColor: '#383838a2',
		borderRadius: 50,
		alignItems: 'center',
		justifyContent: 'center',
		opacity: 0.7,
	},
	details: {
		width: '100%',
		paddingVertical: 20,
		paddingHorizontal: 20,
		// height: '100%',
	},
	detailsHd: {
		width: '100%',
		gap: 10,
		marginBottom: 40,
	},
	title: {
		fontSize: 22,
		fontWeight: 600,
	},
	location: {
		fontSize: 18,
		fontWeight: 500,
		color: 'gray',
	},
	desc: {
		fontSize: 16,
		lineHeight: 21,
	},
	listingDetails: {
		width: '100%',
	},
	listingDetailsTitle: {
		fontSize: 17,
		fontWeight: 600,
		marginBottom: 15,
	},
	amenities: {
		width: '100%',
		gap: 8,
		flexWrap: 'wrap',
		marginBottom: 30,
	},
	mapContainer: {
		width: '100%',
		height: 280,
		borderRadius: 15,
		overflow: 'hidden',
		gap: 10,
	},
	map: {
		height: '100%',
		width: '100%',
		resizeMode: 'cover',
		backgroundColor: 'lightgray',
	},
});
