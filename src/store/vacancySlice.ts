import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'

type vacancyFetchType = {
	searchText?: string,
	searchCity?: string,
	searchSkills?: string[];
	page: number,
}

export const vacancyFetch = createAsyncThunk(
	'vacancy/vacancyFetch',
	async ({ searchText = '', searchCity = '', searchSkills = [], page }: vacancyFetchType, { rejectWithValue }) => {
		try {
			const param = new URLSearchParams({
				industry: '7',
				professional_role: '96',
				page: page.toString(),
				per_page: '10',
			})

			if (searchText) param.append('text', searchText)
			if (searchCity && searchCity !== '') param.append('area', searchCity)
			if (searchSkills.length) param.append('skill_set', searchSkills.join(','))

			const url = `https://api.hh.ru/vacancies?${param.toString()}`

			const response = await fetch(url);
			if (!response.ok) {
				throw new Error('Ошибка при получении данных с HH')
			}

			const data = await response.json();
			return data;
		}
		catch (error: any) {
			return rejectWithValue(error.message)
		}
	}
)

type initialStateType = {
	items: [],
	status: string,
	error: null | string,
	totalPages: number,
	currentPage: number,
	filters: {
		searchText: string,
		searchCity: string,
		searchSkills: string[];
	}

}

const initialState: initialStateType = {
	items: [],
	status: 'idle',
	error: null,
	totalPages: 0,
	currentPage: 1,
	filters: {
		searchText: '',
		searchCity: '',
		searchSkills: ['TypeScript', 'React', 'Redux'],
	}
}

const vacancySlice = createSlice({
	name: 'vacancy',
	initialState,
	reducers: {
		setCurrentPage(state, action: PayloadAction<number>) {
			state.currentPage = action.payload
		},
		setFilters(state, action) {
			state.filters = { ...state.filters, ...action.payload }
			state.currentPage = 1
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(vacancyFetch.pending, (state) => {
				state.status = 'loading';
				state.error = null;
			})
			.addCase(vacancyFetch.fulfilled, (state, action) => {
				state.items = action.payload;
				state.status = 'succeeded';
			})
			.addCase(vacancyFetch.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message || 'Ошибка в запросе данных с сервера';
			})
	}
})

export const { setFilters, setCurrentPage } = vacancySlice.actions
export default vacancySlice.reducer