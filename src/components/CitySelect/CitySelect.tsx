import { Image, Select } from '@mantine/core';
import { setFilters } from '../../store/vacancySlice';
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux';
import styles from './CitySelect.module.css';
import iconCitySelect from '../../assets/Vector.svg'

const cityData = [
	{ value: '', label: 'Все города' },
	{ value: '1', label: 'Москва' },
	{ value: '2', label: 'Санкт-Петербург' },
	{ value: '70', label: 'Оренбург' }
];

const CitySelect = () => {
	const dispatch = useTypedDispatch()
	const { filters } = useTypedSelector(state => state.vacancy)
	const searchCity = filters.searchCity

	const setSearchCity = (city: string | null) => {
		dispatch(setFilters({ searchCity: city }))
		dispatch(setFilters({ searchText: '' }))
	}

	return (
		<Select
			leftSection={
				<Image
					src={iconCitySelect}
					className={styles.iconCitySelect}
				/>}
			placeholder="Выберете вариант"
			data={cityData}
			value={searchCity}
			onChange={setSearchCity}
			className={styles.moduleCitySelector}
			data-testid='citySelectInput'
		/>
	);
};

export default CitySelect;

