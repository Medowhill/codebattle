import React from 'react'
import axios from 'axios'
import Stopwatch from 'timer-stopwatch'
import { Label, Loader, Icon, Input, Button, Modal } from 'semantic-ui-react'
import Editor from './Editor.js'
import './Coding.css'

const stopwatch = new Stopwatch()
class Coding extends React.Component {

	constructor(props) {
		super(props)
		this.state = { des: '', time: 0, modal: 0, fin: false }
		this.timeToString = this.timeToString.bind(this)
		this.modalText = this.modalText.bind(this)
		this.fin = this.fin.bind(this)
		this.change = this.change.bind(this)
		stopwatch.onTime(time => {
			this.setState({time: Math.floor(time.ms / 1000)})
		})
		this.name = this.props.match.params.prob
		this.nick = ''
	}

	componentDidMount() {
		let url = window.location.href.split('/')
		axios.get('/probinfo/' + this.name).then(res => {
			this.setState({des: res.data.des})
			this.editor.setTemplate(res.data.tem)
			stopwatch.start()
		})
	}

	timeToString(t) {
		let min = Math.floor(t / 60)
		let sec = t % 60
		return min + '\' ' + ((sec < 10) ? ('0' + sec) : sec) + '\"'
	}

	submit() {
		this.setState({modal: 1})
		axios.post('/ans/' + this.name, {code: this.editor.getCode()}).then(res => {
			if (res.data.result == 0) {
				this.setState({modal: 2})
				setTimeout(() => {this.setState({modal: 0})}, 1000)
			} else {
				this.setState({modal: 3})
				stopwatch.stop()
			}
		})
	}

	modalText() {
		switch(this.state.modal) {
			case 1:
				return 'Checking your code. Please wait.'
			case 2:
				return 'Your code is wrong. Please try again.'
			case 3:
				return 'Congratulation! Your code has passed all the test.'
			default:
				return ''
		}
	}

	change(e, d) {
		this.nick = e.target.value
	}

	fin() {
		this.setState({fin: true})
		axios.post('/rec/' + this.name, {
			time: this.state.time,
			nick: this.nick
		}).then(res => {
			window.location.href = window.location.href.split('/')[0] + '/record/' + this.name
		})
	}

	render() {
		return(
			<div>
				<Editor ref={ref => this.editor = ref} />
				<div className="coding_state">
					<Button className="submit_coding" size="massive"
						color="facebook" onClick={this.submit.bind(this)}>
						Submit
					</Button>
					<p className="time_coding">{this.timeToString(this.state.time)}</p>
					<p className="description_coding">{this.state.des}</p>
				</div>
				<Modal basic open={this.state.modal != 0}>
					<Modal.Content>
						<p className="modal">{this.modalText()}</p>
						<p className="modal">
							{(this.state.modal == 3) ?
							('You used ' + this.state.time + ' seconds.') : ''}
						</p>
						{ (this.state.modal == 1) ?
						(<Loader />) :
						(<div></div>)}
					</Modal.Content>
					{ (this.state.modal == 3) ?
					(<Modal.Actions>
						<Input onChange={this.change}
							placeholder="Your nickname" size="large"/>
						<Button disabled={this.state.fin} onClick={this.fin}
							color="blue" inverted size="large">
							<Icon name='checkmark' /> ok
						</Button> 
					</Modal.Actions>) :
					(<Modal.Actions></Modal.Actions>) }
				</Modal>
			</div>
		)
	}
}

export default Coding
