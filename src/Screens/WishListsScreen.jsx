import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const WishListsScreen = () => {
	return (
		<View style={styles.wishlist}>
			<View style={styles.wishlist_container}>
				<View style={styles.wishlistHd}>
					<Text style={styles.wishlistHdTitle}>Wishlists</Text>
				</View>
				<ScrollView
					style={styles.wishlist_content}
					alwaysBounceVertical={true}
					alwaysBounceHorizontal>
					<Text>WishList One</Text>
				</ScrollView>
			</View>
		</View>
	);
};

export default WishListsScreen;

const styles = StyleSheet.create({
	wishlist: {
		width: '100vw',
		flex: 1,
		backgroundColor: 'white',
	},
	wishlist_container: {
		width: '100vw',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		gap: 10,
	},
	wishlistHd: {
		width: '100vw',
		position: 'sticky',
		top: 0,
		left: 0,
		zIndex: 1,
		backgroundColor: 'white',
		paddingTop: 60,
		paddingLeft: 25,
		paddingBottom: 15,
	},
	wishlistHdTitle: {
		fontSize: 28,
		color: 'black',
		fontWeight: 550,
	},
	wishlist_content: {
		paddingHorizontal: 25,
	},
});
