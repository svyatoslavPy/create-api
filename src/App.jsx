import React from 'react'
import { FetchProvider } from './provider/FetchProvaider'
import { CardsRikyMorty } from './components/cardsRikyMorty'
import { ThemeProvider } from './provider/ThemeProvaider'
import { ThemeContext } from './provider/ThemeProvaider'

export class App extends React.Component {
	
	render() {
		return (
			<div id='App'>
				<ThemeProvider>
					<FetchProvider>
						<ThemeContext.Consumer>
							{({ theme, Dark, White }) =>
								<CardsRikyMorty theme={theme} changeToDark={Dark} changeToWhite={White} />
							}
						</ThemeContext.Consumer>
					</FetchProvider>
				</ThemeProvider>
			</div>
		)
	}
}

//  Напишите приложение на реакт с использованием контекста. Приложение должно состоять из провайдера запросов на бэк и списка персонажей, который будет подгружатся с бэка. Списком выступает перечень персонажей из Рик и Морти апи. Добавте пагинацию под список.

// * сделайте переключатель темы Светлая/Темная, которая будет менять цвет фона с темного на светлый, по аналогии с предыдущим ДЗ. Пагинатор (компонент с выбором странички) реализйте классовым компонентом, он должен менят цвет фона и в зависимости от выбранной темы.
