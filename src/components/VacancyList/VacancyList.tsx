import { useEffect } from 'react';
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux';
import { vacancyFetch } from '../../store/vacancySlice';

const VacancyList: React.FC = () => {
	const dispatch = useTypedDispatch()
	const vacancy = useTypedSelector(state => state.vacancy)
	const { status, error, items } = useTypedSelector(state => state.vacancy)

	useEffect(() => {
		dispatch(vacancyFetch())
	}, [])

	if (status === 'loading') {
		return <div>Загрузка...</div>;
	}

	if (status === 'failed') {
		return <div>Ошибка: {error}</div>;
	}

	return (
		<div>

		</div>
	);
};

export default VacancyList;
