import React from 'react'
import './Editor.css'

class Completion extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
    	let getStyle = (line, position) => {
            let left = this.props.leftOff + position * this.props.fontWidth
            let top = this.props.topOff + line * this.props.lineHeight
            let color = (this.props.selected) ? '#96b4dc' : '#ffffff'
    		return {backgroundColor: color, left: left + 'px', top: top + 'px'}
        }
    	
        return(
            <p className="completion"
			style={getStyle(this.props.line, this.props.position)}>{this.props.word}</p>
        )
    }
}

export default Completion
