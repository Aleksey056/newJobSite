import { Box, Text, TextInput, Button } from '@mantine/core';
import styles from './Search.module.css';
import { useState, type FormEvent } from 'react';

type SeachtType = {
	searchText: string,
	setSearchText: (text: string) => void,
}

const Search: React.FC<SeachtType> = ({ searchText, setSearchText }) => {

	const [value, setValue] = useState(searchText)

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault()
		setSearchText(value)
	}

	return (
		<Box>
			<Text>Список вакансий по профессии Frontend-разработчик</Text>
			<form onSubmit={handleSubmit}>
				<TextInput
					placeholder='Должность или название компании'
					value={value}
					onChange={(e) => setValue(e.target.value)}
				>
				</TextInput>
				<Button type='submit'>
					Найти
				</Button>
			</form>
		</Box >
	)
};

export default Search;
