import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { useAppContext } from '../ContextAPI/ContextAPI';

const SplashScreen = () => {
	const navigation = useNavigation();
	const { currentUser } = useAppContext();

	useEffect(() => {
		setTimeout(() => {
			if (!currentUser) {
				navigation.replace('Signin');
			} else {
				navigation.replace('Home');
			}
		}, 0);
	}, []);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Roomzy</Text>
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
