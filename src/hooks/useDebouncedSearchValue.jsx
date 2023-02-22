import { useEffect, useState } from 'react';

const useDebouncedSearchValue = (value, delay) => {
	const [debouncedSearchValue, setDebouncedSearchValue] = useState('');

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedSearchValue(value);
		});

		return () => clearTimeout(handler);
	}, [value, delay]);
	return debouncedSearchValue;
};

export default useDebouncedSearchValue;
