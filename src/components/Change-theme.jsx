import React from 'react'

export class ChangeTheme extends React.Component {

	// eslint-disable-next-line no-useless-constructor
	constructor(props) {
		super(props)
	}

	handlerDark = () => {
		this.props.changeToDark();
	}

	handlerWhite = () => {
		this.props.changeToWhite();
	}

	render() {
		return (
			<div className='theme-btns'>
				<button onClick={() => { this.handlerDark() }}>Change to dark</button>
				<button onClick={() => { this.handlerWhite() }}>Change to white</button>
			</div>
		)
	}
}
