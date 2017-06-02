import React from 'react'
import axios from 'axios'
import Problem from './Problem.js'

class Problems extends React.Component {

	constructor(props) {
		super(props)
		this.state = { probs: [] }
		this.click = this.click.bind(this)
	}

	componentDidMount() {
		axios.get('/probs').then(res => {
			this.setState({ probs: res.data })	
		})
	}

	click(title) {
		window.location.href = window.location.href + 'prob/' + title
	}

	clickRec(title) {
		window.location.href = window.location.href + 'record/' + title
	}

	render() {
		return (
			<div>
				{ this.state.probs.map((prob, i) => 
					(<Problem key={i} click={this.click} clickRec={this.clickRec}
						title={prob.name}
						time={(prob.recs.length == 0) ? -1 : prob.recs[0].time} />))}
			</div>
		)
	}

}

export default Problems
