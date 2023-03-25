import React from 'react'

export const ThemeContext = React.createContext({
	theme: 'light',
	Dark: () => {},
	White: () => {},
})

export class ThemeProvider extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			theme: 'white',
		}
	}

	componentDidUpdate() {
		console.log(this.state.theme)
	}

	Dark = () => {
		this.setState({
			theme: 'dark',
		})
	}

	White = () => {
		this.setState({
			theme: 'white',
		})
	}

	getValueTheme() {
		return {
			theme: this.state.theme,
			Dark: this.Dark,
			White: this.White,
		}
	}

	render() {
		// Всё состояние передаётся в качестве значения контекста
		return (
			<ThemeContext.Provider value={this.getValueTheme()}>
				{this.props.children}
			</ThemeContext.Provider>
		)
	}
}
