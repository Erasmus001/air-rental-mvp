import React from 'react';
import styles from './styles';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
	const navigation = useNavigation()

	return (
		<View style={styles.homeScreen}>
			{/* Top Header + Search bar */}
			<View style={styles.header}>
				{/* Search bar */}
				<TouchableOpacity style={styles.searchbar} onPress={() => navigation.navigate('Search')}>
					<FontAwesome5 name='search' size={20} />
					<Text>Where do you want to stay?</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.iconBtn}>
					<FontAwesome5 name='bell' size={22} />
				</TouchableOpacity>
				{/* Top Tabs */}
			</View>
		</View>
	);
};

export default HomeScreen;
