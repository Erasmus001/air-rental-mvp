import React, { useState, createContext, useContext } from 'react';

const AppContext = createContext({
	user: 'Erasmus',
	createUserWithEmailAndPassword: () => Promise,
});

export const useAppContext = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {
	const [user, setUser] = useState('');

	const userDB = [];

	// Create user account
	const createUserWithEmailAndPassword = (email, password) => {
		const newUserDB = [...userDB];

		newUserDB.push(...newUserDB, { email, password });
		console.log(newUserDB);
	};

	const globalValues = {
		user,
		createUserWithEmailAndPassword,
	};
	return (
		<AppContext.Provider value={globalValues}>{children}</AppContext.Provider>
	);
};

export default AppContextProvider;
