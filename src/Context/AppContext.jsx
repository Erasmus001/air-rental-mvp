import React, { createContext } from 'react';
import BookMarkContextProvider from './BookMarkContext';

const AppContext = createContext({});

const AppContextProvider = ({ children }) => {
	const value = {};
	return (
		<AppContext.Provider value={value}>
			<BookMarkContextProvider>{children}</BookMarkContextProvider>
		</AppContext.Provider>
	);
};

export default AppContextProvider;
