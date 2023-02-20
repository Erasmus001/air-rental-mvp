import { FlatList, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { housesApi } from '../api/data';
import Card from './Card';

const Listings = () => {
	const [houses, setHouses] = useState([]);

	useEffect(() => {
		setHouses(housesApi);
	}, []);

	return (
		<View style={styles.listings}>
			<FlatList
				style={styles.listing}
				data={houses}
				renderItem={(houses) => (
					<Card houses={houses} key={houses} />
				)}></FlatList>
		</View>
	);
};

export default Listings;

const styles = StyleSheet.create({
	listings: {
		width: '100%',
		backgroundColor: 'white',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		paddingHorizontal: 15,
		paddingVertical: 20,
	},
	listing: {
		height: '100%',
		width: '100%',
		gap: 20,
		// overflow: 'scroll',
	},
});
