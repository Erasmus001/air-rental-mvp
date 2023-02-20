export const categories = [
	{
		id: 1,
		category_title: 'Rooms',
		type: 'room',
	},
	{
		id: 2,
		category_title: 'Apartments',
		type: 'apartment',
	},
	{
		id: 3,
		category_title: 'Houses',
		type: 'house',
	},
	{
		id: 4,
		category_title: 'Hostels',
		type: 'hostels',
	},
	{
		id: 5,
		category_title: 'Guest House',
		type: 'guest_house',
	},
	{
		id: 6,
		category_title: 'Villas',
		type: 'guest_house',
	},
];

export const housesApi = () => {
	const count = 10;

	const houses = Array.from({ length: count }, (_, i) => {
		return {
			index: i + 1,
			id: i + 1,
			title: `House ${i + 1}`,
			price: `Ghc ${400 * i === 0 ? 4000 : 400 * i}`,
			_location: `Adenta, Road ${i + 1}`,
			desc: `A new building with id ${i + 1}`,
			imgUrl: require('../../assets/Airbnb Mobile Screenshot/Screenshot_20230218_012320_com.airbnb.android.jpg'),
		};
	});

	return houses;
};