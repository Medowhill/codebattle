import React from 'react'
import axios from 'axios'
import './Record.css'

class Record extends React.Component {

	constructor(props) {
		super(props)
		this.state = { rec: [] }
		this.timeToString = this.timeToString.bind(this)
	}

	componentDidMount() {
		axios.get('/rec/' + this.props.match.params.prob).then(res => {
			console.log(res.data)
			this.setState({rec: res.data})
		})
	}

	timeToString(t) {
		let min = Math.floor(t / 60)
		let sec = t % 60
		return min + '\' ' + ((sec < 10) ? ('0' + sec) : sec) + '\"'
	}

	render() {
		console.log(this.state.rec)
		return (
			<div className="record_con">
				<h1 className="record_h">Ranking for {this.props.match.params.prob}</h1>
				{ this.state.rec.map((v, k) => {
					return (
					<div>
						<p key={3*k} className="record_rank">{k + 1}.</p>
						<p key={3*k+1} className="record_nick">{v.nick}</p>
						<p key={3*k+2} className="record_time">
						 	{this.timeToString(v.time)}
						</p>
					</div>)
				})}
			</div>
		)
	}
}

export default Record
