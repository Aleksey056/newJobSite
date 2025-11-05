import { useEffect } from 'react';
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux';
import { vacancyFetch } from '../../store/vacancySlice';

const VacancyList: React.FC = () => {
	const dispatch = useTypedDispatch()
	const { status, error, items, currentPage, filters } = useTypedSelector(state => state.vacancy)

	useEffect(() => {
		dispatch(vacancyFetch({ page: currentPage - 1, searchText: filters.searchText, searchCity: filters.searchCity }))
	}, [dispatch, currentPage, filters])

	if (status === 'loading') {
		return <div>Загрузка...</div>;
	}

	if (status === 'failed') {
		return <div>Ошибка: {error}</div>;
	}

	console.log(items)

	return (
		<div>
			{/* {items.map(vacancy)} */}
		</div>
	);
};

export default VacancyList;
