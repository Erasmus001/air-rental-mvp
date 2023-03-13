import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useBookMarkContext } from '../../Context/BookMarkContext';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { TabView } from 'react-native-tab-view';

const WishListsScreen = () => {
	const { bookmarks } = useBookMarkContext();

	return (
		<SafeAreaView>
			<View>
				<Text>WishListsScreen</Text>
				<View>
					<Text>{JSON.stringify(bookmarks)}</Text>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default WishListsScreen;

const styles = StyleSheet.create({});
