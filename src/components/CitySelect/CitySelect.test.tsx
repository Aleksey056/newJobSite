import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import vacancyReducer from '../../store/vacancySlice';
import CitySelect from './CitySelect';
import { describe, expect, it } from 'vitest';
import { MantineProvider } from '@mantine/core';
import userEvent from '@testing-library/user-event';

const store = configureStore({
	reducer: { vacancy: vacancyReducer },
});

const renderWithProvider = (component: React.ReactNode) =>
	render(
		<Provider store={store}>
			<MantineProvider>
				{component}
			</MantineProvider>;
		</Provider >
	)

describe('CitySelect component', () => {
	it('renders select with city options', () => {
		renderWithProvider(<CitySelect />)
		expect(screen.getByPlaceholderText(/выберете вариант/i)).toBeInTheDocument();
		expect(screen.getByText(/Все города/i)).toBeInTheDocument();
		expect(screen.getByText(/Москва/i)).toBeInTheDocument();
		expect(screen.getByText(/Оренбург/i)).toBeInTheDocument();
	});

	it('dispatches setFilters on city change', async () => {
		renderWithProvider(<CitySelect />);
		

		const resultSelectInput = screen.getByTestId('citySelectInput');
		expect(resultSelectInput).toHaveValue('Все города');

		const userClick = userEvent.click

		const cityMoscow = screen.getByText('Москва');
		await userClick(cityMoscow);
		expect(resultSelectInput).toHaveValue('Москва');
		const state = store.getState().vacancy.filters;
		expect(state.searchCity).toBe('1');

		const cityOrenburg = screen.getByText('Оренбург');
		await userClick(cityOrenburg);
		expect(resultSelectInput).toHaveValue('Оренбург');
		const newState = store.getState().vacancy.filters;
		expect(newState.searchCity).toBe('70');
	});
});
