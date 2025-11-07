import { Badge, Box, Button, Text } from '@mantine/core';
import styles from './VacancyCard.module.css'
import type { CardVacancyProps, WorkFormat } from '../../types/vacancy';

const CardVacancy: React.FC<CardVacancyProps> = ({ vacancy }) => {

	function formatSalary(
		salary: string | { from?: number; to?: number; currency?: string } | null
	): string {
		if (!salary) return 'Уровень дохода не указан';
		if (typeof salary === 'string') return salary;
		if (salary.from && salary.to) return `${salary.from} - ${salary.to} ${salary.currency || ''}`;
		if (salary.from) return ` от ${salary.from} ${salary.currency || ''}`;
		return 'Уровень дохода не указан';
	}

	const experience = typeof vacancy.experience === 'string' ? vacancy.experience : vacancy.experience?.name || 'не указано';

	const getWorkFormatTag = (formats?: WorkFormat[]) => {
		if (!formats || formats.length === 0) return null;
		return formats.map(format => {
			if (format.id === 'ON_SITE')
				return <Badge color="rgba(15, 15, 16, 0.5)" variant="light" key="on" radius='xs' size='sm' fw={700} fz={9}>офис</Badge>;
			if (format.id === 'REMOTE')
				return <Badge color="rgba(66, 99, 235, 1)" key="remote" radius='xs' size='sm' fw={700} fz={9} className={styles.bagde}>можно удалённо</Badge>;
			if (format.id === 'HYBRID')
				return <Badge color="black" key="hybrid" radius='xs' size='sm' fw={700} fz={9} className={styles.bagde}>гибрид</Badge>;
			return null;
		});
	};

	return (
		<Box className={styles.cardVacancy}>
			<Box className={styles.head}>
				<Text className={styles.head__name}>
					{vacancy.name}
				</Text>
				<Box className={styles.head__total}>
					<Text className={styles.total__salary}>
						{formatSalary(vacancy.salary)}
					</Text>
					<Text className={styles.total__experience}>
						{experience}
					</Text>
				</Box>
			</Box>

			<Box className={styles.info}>
				<Text className={styles.info__employer}>
					{vacancy.employer?.name || 'неизвестна'}
				</Text>
				<Box>
					<Box className={styles.info__workFormat}>
						{getWorkFormatTag(vacancy.work_format)}
					</Box>
					<Text className={styles.info__city}>
						Город: {vacancy.area?.name || 'не указан'}
					</Text>
				</Box>
			</Box>

			<Box className={styles.buttonGroup}>
				<Button variant="filled" size="sm" color="black" fw={400}>Смотреть вакансию</Button>
				<Button
					size="sm"
					variant="light"
					color='black'
					component="a"
					href={vacancy.alternate_url}
					target="_blank"
					fw={400}
				>
					Откликнуться
				</Button>
			</Box>
		</Box>
	);
}

export default CardVacancy;
