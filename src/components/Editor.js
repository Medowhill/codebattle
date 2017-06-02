import React from 'react'
import Keyword from './Keyword.js'
import Completion from './Completion.js'
import './Editor.css'

class Editor extends React.Component {

	constructor(props) {
		super(props)
		this.state = {height: this.props.defaultHeight, highlights: [], symbols: [], selected: -1}
		this.isLetter = this.isLetter.bind(this)
		this.isNumber = this.isNumber.bind(this)
		this.change = this.change.bind(this)
		this.parseString = this.parseString.bind(this)
	}

	isLetter(ch) {
		let l = 'a' <= ch && ch <= 'z'
		let u = 'A' <= ch && ch <= 'Z'
		let d = '0' <= ch && ch <= '9'
		return l || u || d || ch == '_'
	}

	isNumber(str) {
		for (let i = 0; i < str.length; i++)
			if (str.charAt(i) < '0' || '9' < str.charAt(i))
				return false
		return true
	}

	change(code, pos) {
		this.parseString(code);
	}

	parseString(cont) {
		cont += '\n'
		let str = '', highlight = [], symbols = [], comp = []
		let line = 0, position = 0
		let quote = false, comment1 = false, comment2 = false

		for (let i = 0; i < cont.length; i++) {
			let ch = cont.charAt(i), chn = cont.charAt(i + 1)
			if (this.isLetter(ch)) {
				str += ch
			} else if (comment1) {
				if (ch == '*' && chn == '/') {
					str += ch
					str += chn
					i++
					position++
					comment1 = false
					console.log(str, position)
					highlight.push({
						line : line,
						position : 1 + position - str.length,
						word : str,
						_color : 5
					})
					str = ''
				} else if (ch == '\n') {
					console.log(str, position)
					highlight.push({
						line : line,
						position : position - str.length,
						word : str,
						color : 5
					})
					str = ''
				} else if (ch != ' ' || str != '')
					str += ch
			} else if (comment2) {
				if (ch == '\n') {
					comment2 = false
					highlight.push({
						line : line,
						position : position - str.length,
						word : str,
						color : 5
					})
					str = ''
				} else 
					str += ch;
			} else if (ch == '/' && chn == '*') {
				str = ''
				str += ch + chn
				position++
				i++
				comment1 = true
			} else if (ch == '/' && chn == '/') {
				str = ''
				str += ch + chn
				position++
				i++
				comment2 = true
			} else if (quote) {
				str += ch
				if (ch == '\"') {
					quote = false
					highlight.push({
						line : line,
						position : position - str.length + 1,
						word : str,
						color : 3
					});
					str = ''
				}
			} else if (ch == '\"') {
				str = ''
				str += ch
				quote = true
			} else {
				if (this.props.keywordsRed.indexOf(str) != -1)
					highlight.push({
						line : line,
						position : position - str.length,
						word : str,
						color : 0
					})
				else if (this.props.keywordsBlue.indexOf(str) != -1)
					highlight.push({
						line : line,
						position : position - str.length,
						word : str,
						color : 1
					})
				else if (this.props.keywordsOrange.indexOf(str) != -1)
					highlight.push({
						line : line,
						position : position - str.length,
						word : str,
						color : 2
					})
				else if (this.props.keywordsPurple.indexOf(str) != -1)
					highlight.push({
						line : line,
						position : position - str.length,
						word : str,
						color : 4
					})
				else {
					if (str != '' && !this.isNumber(str) && symbols.indexOf(str) == -1)
						symbols.push(str)
					if ('A' <= str.charAt(0) && str.charAt(0) <= 'Z')
						highlight.push({
							line : line,
							position : position - str.length,
							word : str,
							color : 1
						})
					else if (this.isNumber(str))
						highlight.push({
							line : line,
							position : position - str.length,
							word : str,
							color : 4
						});
				}
				str = ''
			}
			position++
			if (ch == '\n') {
				line++
				position = 0
			}
		}

		let start
		for (start = this.textArea.selectionStart - 1; start >= 0; start--)
			if (!this.isLetter(cont.charAt(start)))
				break
		let line_ = 0
		position = 0
		for (let i = 0; i < start + 1; i++) {
			position++
			if (cont.charAt(i) == '\n') {
				line_++
				position = 0
			}
		}
		let current = cont.substring(start + 1, this.textArea.selectionStart)
		if (current != '') {
			let l = symbols
				.concat(this.props.keywordsBlue)
				.concat(this.props.keywordsOrange)
				.concat(this.props.keywordsPurple)
				.concat(this.props.keywordsRed)
			for (let i = 0; i < l.length; i++) {
				if (l[i].indexOf(current) == 0 && l[i] != current)
					comp.push({
						word: l[i],
						absolutePosition: start + 1,
						position: position,
						line: ++line_
					})
			}
		}

		let h = this.props.lineHeight * line + 100
		this.setState({
			highlights: highlight,
			height: (this.props.defaultHeight > h ? this.props.defaultHeight : h),
			symbols: comp,
			selected: -1
		})
	}

	keyDownHandle(e) {
		if (e.which == 9)
			e.preventDefault()
		else if (this.state.symbols.length > 0) {
			if (e.which == 40)
				e.preventDefault()
			else if (e.which == 38 && this.state.selected != -1)
				e.preventDefault()
			else if (e.which == 13 && this.state.selected != -1)
				e.preventDefault()
		}
	}

	keyPressHandle(e)  {
		let cont = e.target.value;
		let pos = e.target.selectionEnd;
		let str = String.fromCharCode(e.which)
		switch (e.which) {
			case 40:
				e.target.value =
					cont.substring(0, pos) + '()' + cont.substring(pos, cont.length)
				e.target.selectionEnd = pos + 1
				str = '()'
				e.preventDefault()
				this.change(e.target.value, e.target.selectionStart)
				break
			case 123:
				e.target.value =
					cont.substring(0, pos) + '{}' + cont.substring(pos, cont.length)
				e.target.selectionEnd = pos + 1
				str = '{}'
				e.preventDefault()
				this.change(e.target.value, e.target.selectionStart)
				break
			case 91:
				e.target.value =
					cont.substring(0, pos) + '[]' + cont.substring(pos, cont.length)
				e.target.selectionEnd = pos + 1
				str = '[]'
				e.preventDefault()
				this.change(e.target.value, e.target.selectionStart)
				break
			case 41:
				if (cont.charAt(pos) == ')') {
					e.target.selectionStart = e.target.selectionEnd = pos + 1
					str = ''
					e.preventDefault()
					this.change(e.target.value, e.target.selectionStart)
				}
				break
			case 125:
				if (cont.charAt(pos) == '}') {
					e.target.selectionStart = e.target.selectionEnd = pos + 1
					str = ''
					e.preventDefault()
				  this.change(e.target.value, e.target.selectionStart)
				}
				break
			case 93:
				if (cont.charAt(pos) == ']') {
					e.target.selectionStart = e.target.selectionEnd = pos + 1
					str = ''
					e.preventDefault()
					this.change(e.target.value, e.target.selectionStart)
				}
				break
			case 13: // new line
				let count = 0
				for (let i = 0; i < pos; i++) {
					if (cont.charAt(i) == '{')
						count++
					else if (cont.charAt(i) == '}')
						count--
				}

				if (count > 0) {
					str = '\n'
					let len = count * 4
					for (let i = 0; i < len; i++)
						str += ' '
					if (cont.charAt(pos - 1) == '{') {
						str += '\n'
						for (let i = 0; i < len - 4; i++)
							str += ' '
					}
					e.target.value =
						cont.substring(0, pos) + str + cont.substring(pos, cont.length)
					e.target.selectionEnd = pos + len + 1
				} else {
					e.target.value =
						cont.substring(0, pos) + '\n' + cont.substring(pos, cont.length)
					e.target.selectionEnd = pos + 1
				}

				e.preventDefault()
				this.change(e.target.value, e.target.selectionStart)
				break
		}
	}

	keyUpHandle(e) {
		if (e.which == 9) { // tab
			let cont = e.target.value
			let pos = e.target.selectionEnd
			e.target.value = cont.substring(0, pos) + '    ' + cont.substring(pos, cont.length)
			e.target.selectionEnd = pos + 4
			this.change(e.target.value, e.target.selectionStart)
		} else if (this.state.symbols.length > 0) {
			let s = this.state.selected
			if (e.which == 40) { // arrow (down)
				s++
				s %= this.state.symbols.length
				this.setState({selected: s})
			} else if (e.which == 38) { // arrow (up)
				s--
				if (s >= 0)
					this.setState({selected: s})
				else
					this.setState({selected: s, symbols: []})
			} else if (e.which == 37 || e.which == 39)
				this.setState({selected: -1, symbols: []})
			else if (e.which == 13) {
				let cont = this.textArea.value, sym = this.state.symbols[s]
				this.textArea.value =
					cont.substring(0, sym.absolutePosition) + sym.word +
					cont.substring(this.textArea.selectionStart, cont.length)
				this.textArea.selectionStart =
					this.textArea.selectionEnd = sym.absolutePosition + sym.word.length
				this.change(this.textArea.value, sym.absolutePosition)
			}
		}
	}

	changeHandle(e) {
		this.change(e.target.value, e.target.selectionStart);
	}

	setTemplate(str) {
		this.textArea.value = str
		this.parseString(str)
	}
	
	getCode() {
		return this.textArea.value
	}

	render() {
		let style_code = { height: this.state.height + 'px' }

		return (
			<div className="editor_container">
				<div>
					{this.state.highlights.map((data, i) =>
						<Keyword position={data.position} line={data.line} word={data.word}
								color={data.color} lineHeight={this.props.lineHeight}
								leftOff={this.props.leftOff} topOff={this.props.topOff}
								fontWidth={this.props.fontWidth} key={i}/>)}
				</div>
				<div>
					{this.state.symbols.map((data, i) =>
						<Completion position={data.position} line={data.line} word={data.word}
								leftOff={this.props.leftOff} topOff={this.props.topOff}
								fontWidth={this.props.fontWidth}
								lineHeight={this.props.lineHeight}
								selected={this.state.selected == i} key={i}/>)}
				</div>
				<textArea
						className="code"
						onKeyDown={this.keyDownHandle.bind(this)}
						onKeyPress={this.keyPressHandle.bind(this)}
						onKeyUp={this.keyUpHandle.bind(this)}
						onChange={this.changeHandle.bind(this)}
						ref={ref => this.textArea = ref}
						style={style_code}
						spellCheck="false">
				</textArea>	
			</div>
		)
   }
}

Editor.defaultProps = {
	keywordsRed: ['abstract', 'continue', 'for', 'new', 'switch', 'assert', 'default', 'package',
'synchronized', 'do', 'if', 'private', 'break', 'implements', 'protected', 'throw', 'else',
'import', 'public', 'throws', 'case', 'enum', 'instanceof', 'return', 'transient', 'catch',
'extends', 'try', 'final', 'interface', 'static', 'class', 'finally', 'strictfp', 'volatile',
'native', 'while'],
	keywordsBlue: ['void', 'boolean', 'char', 'int', 'short', 'long', 'double', 'float'],
	keywordsOrange: ['this', 'super'],
	keywordsPurple: ['true', 'false'],
	defaultHeight: 600,
	leftOff: 13,
	topOff: 3,
	fontWidth: 8.4,
	lineHeight: 21
}
	
export default Editor
