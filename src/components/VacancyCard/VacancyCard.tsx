import { Box } from '@mantine/core';
import type { Vacancy } from '../VacancyList/VacancyList';
// import type { WorkFormat } from '../../types/vacancy';
// import styles from './CardVacancy.module.css'
// import type { VacancyCardProps } from '../../types/vacancy'

// import { useTypedSelector } from '../../hooks/redux';

export type CardVacancyProps = {
	vacancy: Vacancy;
}

const CardVacancy: React.FC<CardVacancyProps> = ({ vacancy }) => {

	return (
		<Box>{vacancy.name}</Box>
	)
}

export default CardVacancy;
