import { FontAwesome, FontAwesome5, Fontisto } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const BottomTabs = () => {
	return (
		<View style={styles.bottomTabs}>
			<FontAwesome5 name='search' size={24} />
			<FontAwesome5 name='heart' size={24} />
			<FontAwesome name='envelope-square' size={24} />
			<FontAwesome5 name='user' size={24} />
		</View>
	);
};

export default BottomTabs;

const styles = StyleSheet.create({
	bottomTabs: {
		width: '100vw',
		backgroundColor: 'white',
		height: 65,
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 15,
		paddingHorizontal: 30,
		position: 'sticky',
		// bottom: 0,
		// left: 0,
		// right: 0,
		zIndex: 1,
	},
});
