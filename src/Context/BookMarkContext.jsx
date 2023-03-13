import React, { createContext, useContext, useState } from 'react';
import { Alert } from 'react-native';

const BookMarkContext = createContext({});

export const useBookMarkContext = () => useContext(BookMarkContext);

const BookMarkContextProvider = ({ children }) => {
	const [bookmarks, setBookmarks] = useState([]);

	const addToBookmark = (item) => {
		bookmarks?.map((bookmark) => {
			if (item === bookmark) {
				Alert.alert('Already bookmarked');

				const confirmRemoveBookmark = Alert.prompt(
					'Do you want to remove from bookmark?'
				);

				if (confirmRemoveBookmark) {
					bookmarks.pop(item);
				}
			} else {
				setBookmarks([...bookmarks, item]);
			}
		});
	};

	const value = {
		bookmarks,
		addToBookmark,
	};
	return (
		<BookMarkContext.Provider value={value}>
			{children}
		</BookMarkContext.Provider>
	);
};

export default BookMarkContextProvider;
