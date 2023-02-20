import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';

const SplashScreen = ({ navigation }) => {
	useEffect(() => {
		setTimeout(() => {
			navigation.navigate('Signin');
		}, 100);
	}, []);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Airbnb</Text>
		</View>
	);
};

export default SplashScreen;

const styles = StyleSheet.create({
	container: {
		height: '100vh',
		width: '100vw',
		backgroundColor: 'dodgerblue',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		fontFamily: 'sans-serif',
	},
	title: {
		fontSize: 30,
		fontWeight: 'bold',
		color: 'white',
	},
	button: {
		backgroundColor: 'white',
		paddingVertical: 10,
		paddingHorizontal: 20,
		fontSize: 20,
		borderRadius: 3,
	},
});
