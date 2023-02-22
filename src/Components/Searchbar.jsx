import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Searchbar = () => {
	const navigation = useNavigation();

	const handleSearchNavigate = () => {
		navigation.navigate('Search');
	};

	return (
		<View style={styles.searchBarWrapper}>
			<TouchableOpacity style={styles.searchBtn} onPress={handleSearchNavigate}>
				<FontAwesome5 name='search' size={19} style={styles.searchIcon} />
				<Text>Search...</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Searchbar;

const styles = StyleSheet.create({
	searchBarWrapper: {
		width: '100vw',
		padding: 20,
		backgroundColor: 'white',
	},
	searchBtn: {
		flex: 1,
		paddingVertical: 15,
		paddingHorizontal: 20,
		borderRadius: '50%',
		width: '100%',
		// height: 60,
		backgroundColor: 'whitesmoke',
		borderRadius: 50,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		gap: 10,
	},
	searchIcon: {
		color: 'gray',
		fontWeight: 500,
	},
});
