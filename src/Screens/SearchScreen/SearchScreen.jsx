import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	FlatList,
	TouchableOpacity,
} from 'react-native';
import apiData from '../../../api';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const SearchScreen = () => {
	const [searchQuery, setSearchQuery] = React.useState('');

	const navigation = useNavigation();

	const filteredListings = apiData?.filter(
		(listing) =>
			// listing?.title?.toLowerCase().includes(searchQuery?.toLowerCase()) ||
			listing?.location
				?.toLocaleLowerCase()
				.includes(searchQuery?.toLowerCase()) ||
			listing?.typeOfListing?.toLowerCase().includes(searchQuery?.toLowerCase())
		// listing?.price?.toLowerCase().includes(searchQuery?.toLowerCase()) ||
		// listing?.maxPrice?.toLowerCase().includes(searchQuery?.toLowerCase()) ||
		// listing?.minPrice?.toLowerCase().includes(searchQuery?.toLowerCase()) ||
	);

	const renderListing = ({ item }) => (
		<TouchableOpacity
			style={styles.searchList}
			onPress={() => navigation.navigate('ListingDetails', { item })}>
			<View style={styles.mapIcon}>
				<FontAwesome5 name='map-marker' size={22} color={'#242424e5'} />
			</View>
			<Text style={styles.title}>{item.location}</Text>
		</TouchableOpacity>
	);
	return (
		<View style={styles.searchPage}>
			<View style={styles.searchbar}>
				<TextInput
					style={styles.searchInput}
					placeholder='Where do you want to stay?'
					value={searchQuery}
					onChangeText={(query) => setSearchQuery(query)}
				/>
				<TouchableOpacity style={styles.filterBtn}>
					<FontAwesome5 name='filter' size={16} style={styles.filterIcon} />
				</TouchableOpacity>
			</View>
			{!searchQuery ? (
				<View style={styles.noSearchListings}>
					<Text style={styles.noSearchListingsTxt}>Search your home</Text>
				</View>
			) : (
				<View style={styles.searchListings}>
					<FlatList
						data={filteredListings}
						renderItem={renderListing}
						alwaysBounceVertical={true}
						contentContainerStyle={{ width: '100%' }}
						ListFooterComponent={() => (
							<View
								style={{
									width: '100%',
									marginTop: 10,
									alignItems: 'center',
									justifyContent: 'center',
								}}>
								<Text style={{ fontWeight: '600' }}>Powered by Roomzy</Text>
							</View>
						)}
					/>
				</View>
			)}
		</View>
	);
};

export default SearchScreen;

const styles = StyleSheet.create({
	searchPage: {
		flex: 1,
		backgroundColor: 'white',
		paddingHorizontal: 20,
	},
	searchbar: {
		// flex: 1,
		width: '100%',
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		gap: 20,
		borderWidth: 1,
		borderColor: 'lightgray',
		borderRadius: 50,
		paddingHorizontal: 5,
		height: 50,
	},
	searchInput: {
		width: '88%',
		fontSize: 16,
		height: '100%',
		paddingHorizontal: 15,
	},
	noSearchListings: {
		width: '100%',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	noSearchListingsTxt: {
		fontSize: 16,
		color: 'gray',
	},
	searchListings: {
		width: '100%',
		height: '100%',
		marginTop: 10,
	},
	searchList: {
		width: '100%',
		backgroundColor: 'white',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		gap: 20,
		paddingVertical: 10,
		paddingHorizontal: 15,
		borderRadius: 8,
	},
	mapIcon: {
		fontSize: 20,
		padding: 10,
		paddingHorizontal: 15,
		backgroundColor: '#e0dcdc85',
		borderRadius: 5,
		marginRight: 10,
	},
	title: {
		fontSize: 18,
	},
	filterBtn: {
		borderRadius: 50,
		backgroundColor: 'black',
		padding: 12,
		alignItems: 'center',
		justifyContent: 'center',
	},
	filterIcon: {
		color: 'white',
	},
});
