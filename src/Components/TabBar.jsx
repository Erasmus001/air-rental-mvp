import React, { useEffect, useState } from 'react';
import { Keyboard, Platform, TouchableOpacity, View } from 'react-native';
import { Ionicons, Entypo, FontAwesome } from '@expo/vector-icons';

const TabBar = ({ state, navigation }) => {
	const [visible, setVisible] = useState(true);

	const keyboardWillShow = () => {
		setVisible(false);
	};

	const keyboardWillHide = () => {
		setVisible(true);
	};

	useEffect(() => {
		const keyboardWillShowSub = Keyboard.addListener(
			Platform.select({ android: 'keyboardDidShow', ios: 'keyboardWillShow' }),
			keyboardWillShow
		);

		const keyboardWillHideSub = Keyboard.addListener(
			Platform.select({ android: 'keyboardDidHide', ios: 'keyboardWillHide' }),
			keyboardWillHide
		);

		return () => {
			keyboardWillShowSub.remove();
			keyboardWillHideSub.remove();
		};
	}, []);

	return (
		<View
			style={{
				flexDirection: 'row',
				backgroundColor: 'red',
				maxHeight: visible ? 64 : 0,
				borderTopWidth: 0.5,
				borderTopColor: 'black',
			}}>
			{state.routes.map((route, index) => {
				const label = route.name;
				const isFocused = state.index === index;

				const onPress = () => {
					if (!isFocused) {
						navigation.navigate(route.name);
					}
				};

				return (
					<TouchableOpacity
						onPress={onPress}
						activeOpacity={1}
						key={label}
						style={[
							{
								minHeight: 48,
								flex: 1,
								alignItems: 'center',
								justifyContent: 'center',
								marginBottom: 2,
							},
						]}>
						{label === 'Home' && (
							<Ionicons name='home' size={24} color='white' />
						)}
						{label === 'Signin' && (
							<Entypo name='magnifying-glass' size={24} color='white' />
						)}
					</TouchableOpacity>
				);
			})}
		</View>
	);
};

export default TabBar;
