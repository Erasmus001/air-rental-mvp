import React from 'react';
import {
	Text,
	View,
	Pressable,
	StyleSheet,
	FlatList,
	ScrollView,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import apiData from '../../../api';
import ListingCard from '../../Components/UI/ListingCard';

const HomeScreen = () => {
	const navigation = useNavigation();

	const [listings, setListings] = React.useState(apiData);

	return (
		<SafeAreaView style={styles.homeScreen}>
			<View style={styles.homeScreen}>
				{/* Top Header + Search bar */}
				<View style={styles.header}>
					{/* Search bar */}
					<Pressable
						style={styles.searchbar}
						onPress={() => navigation.navigate('Search')}>
						<FontAwesome5
							name='search'
							size={20}
							style={{ color: 'lightgray', fontWeight: 200 }}
						/>
						<Text style={styles.headerTxt}>Where do you want to stay?</Text>
					</Pressable>
					<Pressable style={styles.iconBtn}>
						<FontAwesome5 name='bell' size={20} />
					</Pressable>
					{/* Top Tabs */}
					<View style={styles.topTabs}></View>
				</View>

				{/* Home Listings */}
				<ScrollView
					style={{ padding: 20 }}
					showsVerticalScrollIndicator={false}
					bounces={'true'}
					alwaysBounceVertical={true}>
					{listings?.map((item, index) => (
						<ListingCard item={item} key={index} />
					))}
				</ScrollView>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	homeScreen: {
		flex: 1,
		backgroundColor: 'white',
	},
	header: {
		width: '100%',
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
		paddingHorizontal: 20,
		paddingVertical: 20,
	},
	searchbar: {
		flex: 1,
		width: '100%',
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		borderWidth: 1,
		borderColor: 'lightgray',
		borderRadius: 50,
		paddingHorizontal: 20,
		height: 50,
		marginRight: 10,
	},
	headerTxt: {
		fontSize: 16,
		marginLeft: 10,
	},
	iconBtn: {
		height: 50,
		borderRadius: 50,
		width: 50,
		borderWidth: 1,
		borderColor: 'lightgray',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default HomeScreen;
