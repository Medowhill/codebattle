import React from 'react'
import { Button } from 'semantic-ui-react'
import './Problem.css'

class Problem extends React.Component {
	constructor(props) {
		super(props)
		this.timeToString = this.timeToString.bind(this)
	}

	timeToString(time) {
		if (time == -1)
			return '-\'--\"'
		let min = Math.floor(time / 60)
		let sec = time % 60
		return min + '\'' + ((sec < 10) ? '0': '') + sec + '\"'
	}

	click(e) {
		this.props.click(this.props.title)
	}

	clickRec() {
		this.props.clickRec(this.props.title)
	}

	render() {
		return(
			<div className="problem_outer">
				<div onClick={this.click.bind(this)} className = "problem">
					<p className="title">{this.props.title}</p>
					<p className="time">{this.timeToString(this.props.time)}</p>
				</div>
				<Button className="prob_b" circular color="blue" icon="bar chart"
					onClick={this.clickRec.bind(this)} />
			</div>
		)
	}
}

Problem.defaultProps = {
	click: e => {},
	clickRec: e => {},
	title: 'AAA',
	time: -1
}

export default Problem
