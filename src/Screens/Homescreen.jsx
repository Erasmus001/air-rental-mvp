import { StyleSheet, View } from 'react-native';
import React from 'react';
import Categories from '../Components/Categories';
import Searchbar from '../Components/Searchbar';
import Listings from '../Components/Listings';
import BottomTabs from '../Components/BottomTabs';

const Homescreen = () => {
	return (
		<View style={styles.homescreen}>
			{/* Search Bar */}
			<View style={styles.header}>
				<Searchbar />
				{/* Categories lists */}
				<Categories />
			</View>
			{/* Main Content Listings */}
			<Listings />
			{/* Bottom Tabs*/}
			<BottomTabs />
		</View>
	);
};

export default Homescreen;

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
