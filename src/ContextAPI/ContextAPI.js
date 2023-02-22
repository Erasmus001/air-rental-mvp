import React, { useState, createContext, useContext } from 'react';

const AppContext = createContext({
	user: null,
});

export const useAppContext = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState('Eras');

	// Create user account
	const createUserWithEmailAndPassword = (email, password) => {
		setCurrentUser(email);
		console.log(email, password);
	};

	const globalValues = {
		currentUser,
		createUserWithEmailAndPassword,
	};
	return (
		<AppContext.Provider value={globalValues}>{children}</AppContext.Provider>
	);
};

export default AppContextProvider;
