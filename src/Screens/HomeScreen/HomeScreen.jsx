import React from 'react';
import styles from './styles';
import { Text, View, TextInput } from 'react-native';

const HomeScreen = () => {
	return (
		<View style={styles.homeScreen}>
			{/* Top Header + Search bar */}
			<View style={styles.header}>
				{/* Search bar */}
				<View style={styles.searchbar}>
					<TextInput />
				</View>
				{/* Top Tabs */}
			</View>
		</View>
	);
};

export default HomeScreen;
