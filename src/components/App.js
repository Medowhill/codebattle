import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './Header.js'
import Problems from './Problems.js'
import Coding from './Coding.js'
import Admin from './Admin.js'
import Record from './Record.js'

class App extends React.Component {

	constructor(props) {
		super(props)
	}

	componentWillMount() {
		document.body.style.backgroundColor = '#ECF0F1';
	}

	componentWillUnmount() {
		document.body.style.backgroundColor = null;
	}

	render() {
		return (
			<Router>
				<div>
					<Route path="/" component={Header} />
					<Route exact path="/" component={Problems} />
					<Route path="/prob/:prob" component={Coding} />
					<Route path="/record/:prob" component={Record} />
					<Route path="/admin" component={Admin} />
				</div>
			</Router>
		)
	}
}

export default App
