import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { categories } from '../api/data';

const Categories = () => {
	const [categoriesData, setCategoriesData] = useState(categories);

	return (
		<View style={styles.categories}>
			<ScrollView
				contentContainerStyle={styles.scroll}
				horizontal
				showsHorizontalScrollIndicator={false}>
				{categoriesData.map((category) => (
					<View style={styles.category} key={category.id}>
						<Text style={styles.category_title}>{category.category_title}</Text>
					</View>
				))}
			</ScrollView>
		</View>
	);
};

export default Categories;

const styles = StyleSheet.create({
	categories: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 10,
		backgroundColor: 'white',
	},
	scroll: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 5,
		flexDirection: 'row',
		paddingHorizontal: 10,
	},
	category: {
		padding: 10,
	},
	category_title: {
		fontSize: 15,
	},
});
