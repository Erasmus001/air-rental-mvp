import React, { useState, createContext, useContext } from 'react';

const AppContext = createContext({
	user: 'Erasmus',
	createUserWithUsernameAndPassword: () => Promise,
});

export const useAppContext = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {
	const [user, setUser] = useState('');

	const userDB = [];

	// Create user account
	const createUserWithUsernameAndPassword = (username, password) => {
		const newUserDB = [...userDB];

		newUserDB.push(...newUserDB, { username, password });
		console.log(newUserDB);
	};

	const globalValues = {
		user,
		createUserWithUsernameAndPassword,
	};
	return (
		<AppContext.Provider value={globalValues}>{children}</AppContext.Provider>
	);
};

export default AppContextProvider;
