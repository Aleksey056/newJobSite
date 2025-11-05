import { Box, Text, TextInput, Button } from '@mantine/core';
// import styles from './Search.module.css';
import { useState } from 'react';
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux';
import { setFilters } from '../../store/vacancySlice';

const Search = () => {
	const dispatch = useTypedDispatch()
	const { filters } = useTypedSelector(state => state.vacancy)
	const searchText = filters.searchText
	const [text, setText] = useState(searchText)

	const setSearchText = (text: string) => {
		dispatch(setFilters({ searchText: text }))
	}

	return (
		<Box>
			<Text>Список вакансий по профессии Frontend-разработчик</Text>
			<Box>
				<TextInput
					placeholder='Должность или название компании'
					value={text}
					onChange={(e) => setText(e.target.value)}
				>
				</TextInput>
				<Button type='submit' onClick={() => setSearchText(text)}>
					Найти
				</Button>
			</Box>
		</Box >
	)
};

export default Search;
