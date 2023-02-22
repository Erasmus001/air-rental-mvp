import { Modal, StyleSheet, Text } from 'react-native';
import React from 'react';

const EditProfileModal = () => {
	return (
		<Modal style={styles.modal}>
			<Text>EditProfileModal</Text>
		</Modal>
	);
};

export default EditProfileModal;

const styles = StyleSheet.create({
	modal: {
		backgroundColor: 'gray',
		height: '80%',
		borderTopRightRadius: 10,
		borderTopLeftRadius: 10,
	},
});
