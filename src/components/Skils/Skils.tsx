import { Box, Button, Group, Pill, PillsInput, Text, TextInput } from '@mantine/core';
// import styles from './Skils.module.css';
import { setFilters } from '../../store/vacancySlice';
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux';
import { useState } from 'react';


const Skills = () => {
	const dispatch = useTypedDispatch()
	const { filters } = useTypedSelector(state => state.vacancy)
	const searchSkills = filters.searchSkills
	const [inputValue, setInputValue] = useState('');

	const setSearchSkills = (skills: string[]) => {
		dispatch(setFilters({ searchSkills: skills }))
	}

	const addSkills = () => {
		if (inputValue.trim() && !searchSkills.includes(inputValue.trim())) {
			setSearchSkills([...filters.searchSkills, inputValue.trim()]);
			setInputValue('');
		}
	}

	const removeSkills = (skill: string) => {
		setSearchSkills(searchSkills.filter(s => s !== skill));
	}

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			addSkills();
		}
	};

	return (
		<Box>
			<Text>Ключевые навыки</Text>
			<Group>
				<TextInput
					radius="md"
					w={215}
					size="xs"
					placeholder="Навык"
					value={inputValue}
					onChange={(e) => setInputValue(e.currentTarget.value)}
					onKeyDown={handleKeyDown}>
				</TextInput>
				<Button onClick={addSkills}>
					+
				</Button>
			</Group>

			<PillsInput variant="unstyled" >
				{searchSkills.map((skill) => (
					<Pill
						style={{ marginRight: 4, marginBottom: 6 }}
						key={skill}
						size='md'
						withRemoveButton
						onRemove={() => removeSkills(skill)}
					>
						{skill}
					</Pill>
				))}
			</PillsInput>
		</Box>
	)
}

export default Skills;
