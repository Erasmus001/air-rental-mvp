import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
	const navigation = useNavigation();

	useEffect(() => {
		setTimeout(() => {
			navigation.navigate('Signin');
		}, 1500);
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
		backgroundColor: 'black',
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