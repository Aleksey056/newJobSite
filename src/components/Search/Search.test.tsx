import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import vacancyReducer from '../../store/vacancySlice';
import Search from './Search';
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
			</MantineProvider>
		</Provider >
	)

describe('Search component', () => {
	it('рендер компонента', () => {
		renderWithProvider(<Search />)
		expect(screen.getByText(/Список вакансий/i)).toBeInTheDocument();
		expect(screen.getByPlaceholderText(/Должность или название компании/i)).toBeInTheDocument();
	});

	it('изменение searchText в store после задания текста и отправки', async () => {
		renderWithProvider(<Search />);

		const userClick = userEvent.click
		const userAddText = userEvent.type

		const searchInput = screen.getByTestId('searchInput')
		await userClick(searchInput)
		await userAddText(searchInput, 'Привет')
		// const resultSelectInput = screen.getByTestId('citySelectInput');
		// expect(resultSelectInput).toHaveValue('Все города');

		// const cityMoscow = screen.getByText('Москва');
		// await userClick(cityMoscow);
		// expect(resultSelectInput).toHaveValue('Москва');
		// const state = store.getState().vacancy.filters;
		// expect(state.searchCity).toBe('1');

		// const cityOrenburg = screen.getByText('Оренбург');
		// await userClick(cityOrenburg);
		// expect(resultSelectInput).toHaveValue('Оренбург');
		// const newState = store.getState().vacancy.filters;
		// expect(newState.searchCity).toBe('70');
		screen.debug()
	});
});
