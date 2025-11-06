import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeAll } from 'vitest';
import Skills from '../Skils/Skills';
import { MantineProvider } from '@mantine/core';
import { useTypedSelector } from '../../hooks/redux';

const renderWithMantineProvider = (component: React.ReactNode) =>
	render(<MantineProvider>{component}</MantineProvider>);

describe('Skills', () => {
	it('Добавляем новый тег(скилл) в инпут через Enter', async () => {
		const onChange = vi.fn();
		const { filters } = useTypedSelector(state => state.vacancy)
		const searchSkills = filters.searchSkills
		renderWithMantineProvider(<Skills searchSkills={[]} onChange={onChange} />);

		const input = screen.getByPlaceholderText(/навык/i);
		await userEvent.type(input, 'React{Enter}');

		expect(onChange).toHaveBeenCalledWith(['React']);
	});
});