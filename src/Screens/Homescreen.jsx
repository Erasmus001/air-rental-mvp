import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Homescreen = () => {
	return (
		<View style={styles.homescreen}>
			<Text style={styles.title}>Home Screen</Text>
		</View>
	);
};

export default Homescreen;

const styles = StyleSheet.create({
	homescreen: {
		flex: 1,
		height: '100vh',
		backgroundColor: '#eee',
		textAlign: 'center',
	},
	title: {
		fontSize: 30,
	},
});
