import React from 'react'
import './Editor.css'

class Keyword extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		let getStyle = (line, position, color) => {
			let _left = this.props.leftOff + position * this.props.fontWidth
			let _top = this.props.topOff + line * this.props.lineHeight
			let arr = ['#f92672', '#66d9ef', '#fd971f', '#e6cb74', '#ad81ff', '#75715e']
			let _color = arr[color]

			return { color: _color, left: _left + 'px', top: _top + 'px' }
		}
		
		return (
			<p className="keyword"
				style={getStyle(this.props.line, this.props.position, this.props.color)}>
				{this.props.word}
			</p>
		)
	}
}

export default Keyword
