import React from 'react'
import { FetchContext } from '../provider/FetchProvaider'
import { ChangeTheme } from './Change-theme'

export class CardsRikyMorty extends React.Component {
	static contextType = FetchContext

	constructor(props) {
		super(props)

		this.state = {
			counter: 1,
		}
	}

	Prev = () => {
		this.context.dataRequest(this.context.data.info.prev)
	}

	Next = () => {
		this.context.dataRequest(this.context.data.info.next)
	}

	render() {
		return (
			<div
				id='data-result__wrapper'
				className={this.props.theme === 'white' ? 'white' : 'dark'}
			>
				<div className='data-result'>
					<ChangeTheme
						changeToDark={this.props.changeToDark}
						changeToWhite={this.props.changeToWhite}
					></ChangeTheme>
					{this.context.data?.results &&
						this.context.data.results.map(i => (
							<div className='data-result__item'>
								<p>{i.id}</p>
								<p>{i.name}</p>
								<p>{i.status}</p>
							</div>
						))}
					<div className='data-result__btns'>
						<button onClick={() => this.Prev()}>Prev</button>
						<button onClick={() => this.Next()}>Next</button>
					</div>
				</div>
			</div>
		)
	}
}
