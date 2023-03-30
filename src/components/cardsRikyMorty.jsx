import React from 'react'
import { FetchContext } from '../provider/FetchProvaider'
import { ChangeTheme } from './Change-theme'

export class CardsRikyMorty extends React.Component {
	static contextType = FetchContext

	// eslint-disable-next-line no-useless-constructor
	constructor(props) {
		super(props)
	}

	Prev = () => {
		let nextRes = String(this.context.data.info.prev)
		let res = nextRes[nextRes.length - 1]
		this.context.dataRequest(res)
	}

	Next = () => {
		let nextRes = String(this.context.data.info.next)
		let res = nextRes[nextRes.length - 1]
		this.context.dataRequest(res)
	}

	items = []

	componentDidMount() {
		for (let i = 1; i <= 5; i++) {
			this.items.push(
				<button onClick={(e) => this.context.dataRequest(e.target.innerText)} className='btn'>
					{i}
				</button>
			)
		}
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
						{this.items.slice(0, 5).map(i => (
							<p>{i}</p>
						))}
						<button onClick={() => this.Next()}>Next</button>
					</div>
				</div>
			</div>
		)
	}
}
