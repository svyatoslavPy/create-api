import React from 'react'

export const FetchContext = React.createContext({
	data: [],
	dataRequest: () => {},
})

export class FetchProvider extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [],
		}
	}

	componentDidMount() {
		this.dataRequest(`https://rickandmortyapi.com/api/character/?page=1`)
	}


	dataRequest = page => {
		fetch(page)
			.then(resp => resp.json())
			.then(res => {
				this.setState({
					data: res,
				})
			})
			.catch(err => {
				console.log(err, 'Request failed')
			})
	}

	getValueData = () => {
		return {
			dataRequest: this.dataRequest,
			data: this.state.data,
		}
	}

	render() {
		return (
			<FetchContext.Provider value={this.getValueData()}>
				{this.props.children}
			</FetchContext.Provider>
		)
	}
}
