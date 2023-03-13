import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	StatusBar,
	Image,
	Pressable,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AmenityCard from '../../Components/UI/AmenityCard';
import { useBookMarkContext } from '../../Context/BookMarkContext';
// import ImageBlurLoading from 'react-native-image-blur-loading';

const ListingDetailsScreen = ({ route }) => {
	const navigation = useNavigation();
	const { bookmarks, addToBookmark } = useBookMarkContext();

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
		<ScrollView
			style={styles.listingDetailScreen}
			showsVerticalScrollIndicator={false}
			bounces={true}
			alwaysBounceVertical={true}>
			<StatusBar
				translucent
				barStyle={'default'}
				animated={true}
				backgroundColor={'transparent'}
				networkActivityIndicatorVisible={true}
				showHideTransition={'fade'}
			/>
			<View style={styles.listingImgContainer}>
				<Image source={imgUrl} style={styles.listingImg} />
			</View>

			{/* Detail Screen Header */}
			<View style={styles.listingHeader}>
				<Pressable
					onPress={() => {
						navigation.goBack();
					}}
					style={styles.headerBtn}>
					<Feather
						name='arrow-left'
						size={20}
						style={{ color: 'black', fontSize: 22 }}
					/>
				</Pressable>
				<Pressable
					onPress={() => {
						addToBookmark(item);
						console.log(
							`You added ${item.id} to bookmarks, ${JSON.stringify(bookmarks)}`
						);
					}}
					style={styles.headerBtn}>
					<Feather
						name='heart'
						size={20}
						style={{ color: 'black', fontSize: 22 }}
					/>
				</Pressable>
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
						{item?.amenities?.map((amenity) => (
							<View style={styles.amenitiesList}>
								<AmenityCard amenity={amenity} icon={''} key={amenity} />
							</View>
						))}
					</View>
				</View>

				<View style={styles.mapContainer}>
					<View style={styles.mapTitle}>
						<Text style={styles.mapTitleTxt}>Location</Text>
					</View>
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
		height: 380,
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
		top: 50,
		left: 0,
		width: '100%',
		height: 60,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 20,
		justifyContent: 'space-between',
	},
	headerBtn: {
		padding: 12,
		// backgroundColor: '#383838a2',
		backgroundColor: '#fff',
		borderRadius: 50,
		alignItems: 'center',
		justifyContent: 'center',
		// opacity: 0.8,
	},
	details: {
		width: '100%',
		paddingVertical: 20,
		paddingHorizontal: 20,
		// height: '100%',
	},
	detailsHd: {
		width: '100%',
		gap: 15,
		marginBottom: 50,
	},
	title: {
		fontSize: 26,
		fontWeight: '600',
		marginBottom: 7,
	},
	location: {
		fontSize: 20,
		fontWeight: '500',
		color: 'gray',
		marginBottom: 7,
	},
	desc: {
		fontSize: 17.5,
		lineHeight: 26,
	},
	listingDetails: {
		width: '100%',
	},
	listingDetailsTitle: {
		fontSize: 22,
		fontWeight: '600',
		marginBottom: 15,
	},
	amenities: {
		width: '100%',
		gap: 12,
		flexWrap: 'wrap',
		marginBottom: 30,
	},
	amenitiesList: {
		width: '100%',
		flexDirection: 'row',
		rowGap: 10,
	},
	mapContainer: {
		width: '100%',
		height: 280,
		// overflow: 'hidden',
		gap: 10,
	},
	mapTitleTxt: {
		marginBottom: 15,
		fontSize: 22,
		fontWeight: '600',
	},
	map: {
		borderRadius: 15,
		height: '100%',
		width: '100%',
		resizeMode: 'cover',
		backgroundColor: 'lightgray',
	},
});
