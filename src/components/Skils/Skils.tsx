import { Box, Button, Group, PillsInput, Text, TextInput } from '@mantine/core';
// import styles from './Skils.module.css';
import { setFilters } from '../../store/vacancySlice';
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux';


const Skills = () => {
	const dispatch = useTypedDispatch()
	const { filters } = useTypedSelector(state => state.vacancy)
	const { searchSkills } = filters.searchSkills

	// console.log('skills', searchSkills);


	const setSkills = (skills: string[]) => dispatch(setFilters({ searchSkills: skills }))

	const addSkills = () => {

	}

	const removeSkills = () => {
		// setSkills(ski)
	}

	return (
		<Box>
			<Text>Ключевые навыки</Text>
			<Group>
				<TextInput>
				</TextInput>
				<Button>
					+
				</Button>
			</Group>

			<PillsInput>

			</PillsInput>
		</Box>
	)
}

export default Skills;
