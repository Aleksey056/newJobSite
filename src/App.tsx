import './App.css'
import { Box, Divider, MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css';
import Header from './components/Header/Header'
import Search from './components/Search/Search'
import VacancyList from './components/VacancyList/VacancyList';


function App() {

	return (
		<MantineProvider>
			<Header />
			<Search />
			<Divider c={'#0F0F1033'} />
			<Box className='main'>
				<Box className='main__left-section'>
					{/* <Skills /> */}
					{/* <CitySelect /> */}
				</Box>
				<Box className='main__right-section'>
					{/* <VacancyList /> */}
				</Box>
			</Box>
		</MantineProvider>
	)
}
export default App
