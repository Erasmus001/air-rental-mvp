import {
	KeyboardAvoidingView,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import React, { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

const Searchbar = () => {
	const [searchQuery, setSearchQuery] = useState('');

	return (
		<KeyboardAvoidingView style={styles.searchBarWrapper}>
			<View style={styles.searchbar}>
				<TextInput
					placeholder='Search Rooms, Apartments etc..'
					keyboardType='web-search'
					onChangeText={(text) => setSearchQuery(text)}
					value={searchQuery}
					style={styles.searchInput}
					placeholderTextColor='gray'
				/>
				<TouchableOpacity style={styles.searchBtn}>
					<FontAwesome5 name='search' size={19} style={styles.searchIcon} />
				</TouchableOpacity>
			</View>
		</KeyboardAvoidingView>
	);
};

export default Searchbar;

const styles = StyleSheet.create({
	searchBarWrapper: {
		width: '100vw',
		padding: 20,
		backgroundColor: 'white',
	},
	searchbar: {
		width: '100%',
		height: 60,
		backgroundColor: 'whitesmoke',
		borderRadius: 50,
		shadowOffset: '2px',
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		shadowOpacity: 5,
		shadowColor: 'black',
		shadowRadius: 50,
		paddingHorizontal: 10,
		gap: 15,
	},
	searchInput: {
		paddingVertical: 5,
		paddingHorizontal: 10,
		width: '100%',
		height: '100%',
		borderColor: 'transparent',
		flex: 1,
		fontSize: 16,
	},
	searchBtn: {
		padding: 10,
		backgroundColor: 'black',
		borderRadius: '50%',
	},
	searchIcon: {
		color: 'white',
		fontWeight: 500,
	},
});
