import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Categories, Listings, Searchbar } from '../Components/components';

const HomeScreen = () => {
	return (
		<View style={styles.homescreen}>
			<View style={styles.header}>
				<Searchbar />
				<Categories />
			</View>
			<Listings />
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	homescreen: {
		flex: 1,
		height: '100vh',
		backgroundColor: '##eeeeeea8',
		textAlign: 'center',
	},
	title: {
		fontSize: 30,
	},
	header: {
		position: 'sticky',
		top: 0,
		left: 0,
		zIndex: 9,
		backgroundColor: 'whitesmoke',
		width: '100vw',
	},
});
