import { Box } from '@mantine/core';
import type { Vacancy } from '../../types/vacancy';
// import styles from './CardVacancy.module.css'
import type { CardVacancyProps } from '../../types/vacancy';
// import { useTypedSelector } from '../../hooks/redux';



const CardVacancy: React.FC<CardVacancyProps> = ({ vacancy }) => {

	return (
		<Box>{vacancy.name}</Box>
	)
}

export default CardVacancy;
