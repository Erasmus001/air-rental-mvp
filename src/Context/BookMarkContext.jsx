import React, { createContext, useContext, useState } from 'react';

const BookMarkContext = createContext({});

export const useBookMarkContext = () => useContext(BookMarkContext);

const BookMarkContextProvider = ({ children }) => {
	const [bookmarks, setBookmarks] = useState([]);

	const value = {
		bookmarks,
		setBookmarks,
	};
	return (
		<BookMarkContext.Provider value={value}>
			{children}
		</BookMarkContext.Provider>
	);
};

export default BookMarkContextProvider;
