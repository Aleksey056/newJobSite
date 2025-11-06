import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import vacancyReducer, { setFilters } from '../../store/vacancySlice';
import CitySelect from './CitySelect';
import { describe, expect, it } from 'vitest';
import { MantineProvider } from '@mantine/core';

const store = configureStore({
	reducer: { vacancy: vacancyReducer },
});

describe('CitySelect component', () => {
	it('renders select with city options', () => {
		render(
			<Provider store={store}>
				<MantineProvider>
					<CitySelect />
				</MantineProvider>
			</Provider>
		);
		expect(screen.getByPlaceholderText(/выберете вариант/i)).toBeInTheDocument();
		expect(screen.getByText(/Все города/i)).toBeInTheDocument();
		expect(screen.getByText(/Москва/i)).toBeInTheDocument();
	});

	it('dispatches setFilters on city change', () => {
		render(
			<Provider store={store}>
				<CitySelect />
			</Provider>
		);
		const select = screen.getByRole('combobox');
		fireEvent.change(select, { target: { value: '1' } }); // "Москва" value
		const state = store.getState().vacancy.filters;
		expect(state.searchCity).toBe('1');
		expect(state.searchText).toBe(''); // searchText должен сбрасываться при выборе города
	});
});
