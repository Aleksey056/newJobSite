import { Box, Text, Image } from '@mantine/core'
import logo from '../../assets/logo_hh.svg'
import userLogo from '../../assets/user-circle.svg'
import ellipse from '../../assets/Ellipse.svg'
import styles from './Header.module.css'

export default function Header() {
	return (
		<Box className={styles.header}>
			<Box className={styles.block1}>
				<Box className={styles.header__logo}>
					<Image className={styles.header__icon} src={logo} />
					<Text>
						.FrontEnd
					</Text>
				</Box>
			</Box>
			<Box className={styles.block2}>
				<Box className={styles.jobs}>
					<Text className={styles.jobs__text}>
						Вакансии FE
					</Text>
					<Image className={styles.ellipse} src={ellipse} />
				</Box>
				<Box className={styles.userInfo}>
					<Image className={styles.userInfo__image} src={userLogo} />
					<Text className={styles.userInfo__text}>Обо мне</Text>
				</Box>
			</Box>
		</Box>
	)
}
