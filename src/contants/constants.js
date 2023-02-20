import { useNavigation } from '@react-navigation/native';

const Navigation = useNavigation();
const ReplaceRoute = (route) => Navigation.replace(route);

export const Colors = {
	primaryColor: 'black',
	secondaryColor: 'gray',
};

const navigate = (route) => Navigation.navigate(route);

export { navigate, ReplaceRoute };
