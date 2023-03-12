import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const FilterScreen = ({ route }) => {
	console.log(route);
	const { apiData } = route?.params;

	const [typeOfListing, setTypeOfListing] = React.useState('');
	const [selectedPriceRange, setSelectedPriceRange] = React.useState('');

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
	return (
		<View>
			<Text>FilterScreen</Text>
		</View>
	);
};

export default FilterScreen;

const styles = StyleSheet.create({});
