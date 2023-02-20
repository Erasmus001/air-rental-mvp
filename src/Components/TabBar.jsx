import React, { useEffect, useState } from 'react';
import { Keyboard, Platform, TouchableOpacity, View } from 'react-native';

const TabBar = () => {
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
				<Text>Home</Text>
			</TouchableOpacity>
		</View>
	);
};

export default TabBar;
