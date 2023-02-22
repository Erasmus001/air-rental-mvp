import {
	KeyboardAvoidingView,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { FontAwesome5, Fontisto } from '@expo/vector-icons';
import useDebouncedSearchValue from '../hooks/useDebouncedSearchValue';

const SearchScreen = () => {
	const [searchValue, setSearchValue] = useState('');

	const debouncedSearchValue = useDebouncedSearchValue(searchValue, 300);

	const handleSearch = () => {
		console.log(searchValue);
		setSearchValue('');
	};

	useEffect(() => {
		// Fetch data from external API...
	}, []);

	return (
		<KeyboardAvoidingView style={styles.searchScreen}>
			<View style={styles.seachHd}>
				<View style={styles.searchWrapper}>
					<TextInput
						placeholder='Search for rooms, apartment etc...'
						inputMode='search'
						textAlign='left'
						placeholderTextColor={'gray'}
						style={styles.searchInputBox}
						onChangeText={(searchTxt) => setSearchValue(searchTxt)}
					/>
					<TouchableOpacity onPress={handleSearch} style={styles.searchBtn}>
						<FontAwesome5 name='search' size={19} style={styles.searchIcon} />
					</TouchableOpacity>
				</View>
			</View>
			{/* Search listing */}
			<ScrollView
				contentContainerStyle={styles.searchListings}
				scrollIndicatorInsets='false'>
				<TouchableOpacity style={styles.listing}>
					<View style={styles.locationIconContainer}>
						<Fontisto name='map-marker' size={18} style={styles.locationIcon} />
					</View>
					<Text style={styles.searchListingTxt}>
						Two Bedroom Self-Contained
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.listing}>
					<View style={styles.locationIconContainer}>
						<Fontisto name='map-marker' size={18} style={styles.locationIcon} />
					</View>
					<Text style={styles.searchListingTxt}>
						Two Bedroom Self-Contained
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.listing}>
					<View style={styles.locationIconContainer}>
						<Fontisto name='map-marker' size={18} style={styles.locationIcon} />
					</View>
					<Text style={styles.searchListingTxt}>
						Two Bedroom Self-Contained
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.listing}>
					<View style={styles.locationIconContainer}>
						<Fontisto name='map-marker' size={18} style={styles.locationIcon} />
					</View>
					<Text style={styles.searchListingTxt}>
						Two Bedroom Self-Contained
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.listing}>
					<View style={styles.locationIconContainer}>
						<Fontisto name='map-marker' size={18} style={styles.locationIcon} />
					</View>
					<Text style={styles.searchListingTxt}>
						Two Bedroom Self-Contained
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.listing}>
					<View style={styles.locationIconContainer}>
						<Fontisto name='map-marker' size={18} style={styles.locationIcon} />
					</View>
					<Text style={styles.searchListingTxt}>
						Two Bedroom Self-Contained
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.listing}>
					<View style={styles.locationIconContainer}>
						<Fontisto name='map-marker' size={18} style={styles.locationIcon} />
					</View>
					<Text style={styles.searchListingTxt}>
						Two Bedroom Self-Contained
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.listing}>
					<View style={styles.locationIconContainer}>
						<Fontisto name='map-marker' size={18} style={styles.locationIcon} />
					</View>
					<Text style={styles.searchListingTxt}>
						Two Bedroom Self-Contained
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.listing}>
					<View style={styles.locationIconContainer}>
						<Fontisto name='map-marker' size={18} style={styles.locationIcon} />
					</View>
					<Text style={styles.searchListingTxt}>
						Two Bedroom Self-Contained
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.listing}>
					<View style={styles.locationIconContainer}>
						<Fontisto name='map-marker' size={18} style={styles.locationIcon} />
					</View>
					<Text style={styles.searchListingTxt}>
						Two Bedroom Self-Contained
					</Text>
				</TouchableOpacity>
			</ScrollView>
		</KeyboardAvoidingView>
	);
};

export default SearchScreen;

const styles = StyleSheet.create({
	searchScreen: {
		width: '100vw',
		flex: 1,
		backgroundColor: 'white',
		paddingVertical: 10,
		paddingHorizontal: 20,
	},
	seachHd: {
		width: '100%',
		height: 70,
	},
	searchWrapper: {
		width: '100%',
		paddingVertical: 5,
		paddingHorizontal: 10,
		borderRadius: '50%',
		backgroundColor: 'whitesmoke',
		borderRadius: 50,
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		position: 'sticky',
		top: 0,
		left: 0,
		zIndex: 1,
		gap: 10,
	},
	searchInputBox: {
		width: '100%',
		fontSize: 16,
		paddingVertical: 10,
		paddingHorizontal: 10,
	},
	searchBtn: {
		padding: 10,
		backgroundColor: 'black',
		borderRadius: 50,
	},
	searchIcon: {
		color: 'white',
	},
	searchListings: {
		width: '100vw',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		gap: 10,
		paddingVertical: 20,
		paddingHorizontal: 10,
	},
	listing: {
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		gap: 10,
		paddingVertical: 10,
		borderBottomColor: 'black',
		borderBottomWidth: '100%',
	},
	locationIconContainer: {
		paddingHorizontal: 18,
		paddingVertical: 15,
		backgroundColor: 'whitesmoke',
		borderRadius: 5,
	},
	searchListingTxt: {
		fontSize: 16,
	},
	locationIcon: {
		color: '#353535a1',
	},
});
