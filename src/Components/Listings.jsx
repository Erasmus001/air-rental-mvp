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
				showsVerticalScrollIndicator={false}
				data={houses}
				keyExtractor={(houses) => houses.id}
				renderItem={(houses) => <Card houses={houses} key={houses} />}
			/>
		</View>
	);
};

export default Listings;

const styles = StyleSheet.create({
	listings: {
		height: '80%',
		width: '100%',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		paddingHorizontal: 15,
		overflow: 'scroll',
		paddingVertical: 20,
	},
	listing: {
		height: '100%',
		width: '100%',
		gap: 20,
	},
});
