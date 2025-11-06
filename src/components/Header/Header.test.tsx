import { render, screen } from '@testing-library/react';
import Header from './Header';
import { describe, expect, it } from 'vitest';
import { MantineProvider } from '@mantine/core';

const renderWithMantineProvider = (component: React.ReactNode) =>
	render(<MantineProvider>{component}</MantineProvider>);

describe('Header component', () => {
	it('рендерится без ошибок', () => {
		renderWithMantineProvider(<Header />);
		expect(screen.getByText('.FrontEnd')).toBeInTheDocument();
	});

	it('отображает логотип', () => {
		renderWithMantineProvider(<Header />);
		const logoImg = screen.getByAltText('logo');
		expect(logoImg).toBeInTheDocument();
	});

	it('показывает текст "Вакансии FE"', () => {
		renderWithMantineProvider(<Header />);
		expect(screen.getByText('Вакансии FE')).toBeInTheDocument();
	});

	it('отображает блок с пользователем и текстом "Обо мне"', () => {
		renderWithMantineProvider(<Header />);
		expect(screen.getByText('Обо мне')).toBeInTheDocument();
		const userImg = screen.getByAltText('userLogo');
		expect(userImg).toBeInTheDocument();
	});
});
