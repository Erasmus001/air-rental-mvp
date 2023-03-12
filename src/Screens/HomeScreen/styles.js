import { StyleSheet } from 'react-native';

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
		gap: 10,
	},
	searchbar: {
		flex: 1,
		width: '100%',
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		gap: 10,
		borderWidth: 1,
		borderColor: 'lightgray',
		borderRadius: 50,
		paddingHorizontal: 20,
		height: 50,
	},
	searchInput: {
		width: '100%',
		fontSize: 16,
		height: '100%',
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

export default styles;
