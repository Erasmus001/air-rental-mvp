import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useAppContext } from '../ContextAPI/ContextAPI';

const SigninScreen = ({ navigation }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [isGoogleLoading, setIsGoogleLoading] = useState(false);
	const [isPhoneLoading, setIsPhoneLoading] = useState(false);
	const [noValue, setNoValue] = useState(true);

	const { createUserWithEmailAndPassword } = useAppContext();

	const handleSubmit = (event) => {
		event.preventDefault();

		if (!email || !password) {
			alert('Please fill all required fields');
			return;
		}

		setIsLoading(true);
		setTimeout(() => {
			createUserWithEmailAndPassword(email, password);
			navigation.navigate('Home');
			setIsLoading(false);
			setEmail('');
			setPassword('');
		}, 6000);
	};

	const handlePhoneAuth = () => {
		setIsPhoneLoading(true);

		setTimeout(() => {
			alert('handlePhoneAuth clicked...');
			setIsPhoneLoading(false);
		}, 4000);
	};

	const handleGoogleAuth = () => {
		setIsGoogleLoading(true);

		setTimeout(() => {
			alert('handleGoogleAuth clicked...');
			setIsGoogleLoading(false);
		}, 4000);
	};

	const handleExitSignin = () => navigation.navigate('Home');

	useEffect(() => {
		if (!password || !email) {
			setNoValue(true);
		} else {
			setNoValue(false);
		}
	}, [email, password]);

	return (
		<View style={styles.signinScreen}>
			{/* Close Btn */}
			<View style={styles.closeBtnContainer}>
				<TouchableOpacity style={styles.closeBtn} onPress={handleExitSignin}>
					<Text style={styles.closeBtnTxt}>X</Text>
				</TouchableOpacity>
			</View>
			{/* Form */}
			<View style={styles.form}>
				<Text style={styles.formHdTitle}>Log in or sign up to Airbnb</Text>
				<TextInput
					style={styles.formInput}
					placeholder='Enter email'
					onChangeText={(text) => setEmail(text)}
					keyboardType='email-address'
					value={email}
					textContentType='emailAddress'
					placeholderTextColor='gray'
					autoComplete='email'
					autoCorrect={false}
				/>
				<TextInput
					style={styles.formInput}
					placeholder='Enter password'
					onChangeText={(text) => setPassword(text)}
					secureTextEntry={true}
					value={password}
					textContentType='password'
					maxLength={10}
					minLength={10}
					placeholderTextColor='gray'
					autoComplete='password'
					autoCorrect={false}
				/>
				<Text style={styles.smallText}>
					We'll call or text you to confirm your number. Standard message and
					data rates apply.
				</Text>
				<TouchableOpacity
					style={
						isLoading || noValue ? styles.signBtnDisabled : styles.signInBtn
					}
					disabled={isLoading || noValue ? true : false}
					onPress={handleSubmit}>
					<Text
						style={
							isLoading || noValue
								? styles.signInBtnTxtDisabled
								: styles.signInBtnTxt
						}>
						{isLoading ? 'Loading...' : 'Continue'}
					</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.hr}>
				<View style={styles.hrLine}></View>
				<Text style={styles.hrText}>Or</Text>
				<View style={styles.hrLine}></View>
			</View>
			<View style={styles.authBtns}>
				<TouchableOpacity
					style={
						isGoogleLoading ? styles.googleAuthDisabled : styles.googleAuth
					}
					onPress={handleGoogleAuth}
					disabled={isGoogleLoading ? true : false}>
					<Text style={styles.googleAuthText}>
						{isGoogleLoading ? 'Signing with Google...' : 'Signin with Google'}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={isPhoneLoading ? styles.googleAuthDisabled : styles.googleAuth}
					disabled={isPhoneLoading ? true : false}
					onPress={handlePhoneAuth}>
					<Text style={styles.phoneAuthText}>
						{isPhoneLoading ? 'Signing with Phone...' : 'Signin with Phone'}
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default SigninScreen;

const styles = StyleSheet.create({
	signinScreen: {
		width: '100vw',
		height: '100vh',
		paddingVertical: 20,
		paddingHorizontal: 20,
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		gap: 10,
		fontFamily: 'sans-serif',
		backgroundColor: 'white',
	},
	closeBtnContainer: {
		paddingVertical: 20,
		marginBottom: 10,
	},
	closeBtnTxt: {
		fontSize: 16,
	},
	form: {
		width: '100%',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		gap: 10,
	},
	formHdTitle: {
		width: '100%',
		lineHeight: 1.2,
		fontSize: 20,
		fontWeight: 550,
		marginBottom: 20,
	},
	formInput: {
		width: '100%',
		paddingVertical: 13,
		paddingHorizontal: 13,
		borderWidth: 1,
		borderColor: 'gray',
		borderRadius: 7,
		fontSize: 16,
		color: 'black',
	},
	smallText: {
		fontSize: 13,
	},
	signInBtn: {
		width: '100%',
		paddingVertical: 15,
		paddingHorizontal: 25,
		backgroundColor: 'black',
		borderRadius: 7,
		fontSize: 16,
		color: 'white',
		textAlign: 'center',
	},
	signBtnDisabled: {
		width: '100%',
		paddingVertical: 15,
		paddingHorizontal: 25,
		backgroundColor: '#b6b6b6a4',
		borderRadius: 7,
		fontSize: 16,
		color: 'white',
		textAlign: 'center',
	},
	hr: {
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		// borderWidth: 2,
		// borderColor: 'black',
		gap: 15,
		// paddingHorizontal: 20,
		overflow: 'hidden',
		marginVertical: 20,
	},
	hrLine: {
		width: '100%',
		height: '1px',
		backgroundColor: '#888888a4',
	},
	hrText: {
		fontSize: 14,
		color: '#585858d8',
	},
	authBtns: {
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 15,
	},
	googleAuth: {
		width: '100%',
		paddingVertical: 15,
		paddingHorizontal: 25,
		// backgroundColor: 'black',
		borderRadius: 7,
		fontSize: 16,
		color: 'black',
		textAlign: 'center',
		borderWidth: 1,
		borderColor: 'gray',
		fontWeight: 530,
	},
	googleAuthText: {
		fontSize: 15,
	},
	phoneAuthText: {
		fontSize: 15,
	},
	signInBtnTxt: {
		fontSize: 16,
		color: 'white',
	},
	signInBtnTxtDisabled: {
		color: 'white',
		fontSize: 16,
	},
	googleAuthDisabled: {
		width: '100%',
		paddingVertical: 15,
		paddingHorizontal: 25,
		backgroundColor: '#b6b6b6a4',
		borderRadius: 7,
		fontSize: 16,
		color: 'white',
		textAlign: 'center',
	},
});
