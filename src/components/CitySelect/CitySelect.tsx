import { Select } from '@mantine/core';
import styles from './CitySelect.module.css';
import type { CitySelectProps } from '../../types/vacancy'

const cityData = [
	{ value: '', label: 'Все города' },
	{ value: '1', label: 'Москва' },
	{ value: '2', label: 'Санкт-Петербург' },
];

const CitySelect: React.FC<CitySelectProps> = () => {
	return (
		<Select
			
		/>
	);
};

export default CitySelect;

