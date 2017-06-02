import React from 'react'
import axios from 'axios'
import './Admin.css'

class Admin extends React.Component {

	send() {
		let name = this.name.value
		let des = this.des.value
		let tem = this.tem.value
		if (name.length != 3) return
		axios.post('/new', {
			name: name.toUpperCase(),
			des: des,
			tem: tem
    	}).then(res => {
			this.name.value = ''
			this.des.value = ''
			this.tem.value = ''
		})
	}

	render() {
		return (
			<div>
				<p>Problem name</p>
				<textarea className="admin_ta" ref={ref => this.name = ref}></textarea>
				<p>Description</p>
				<textarea className="admin_ta" ref={ref => this.des = ref}></textarea>
				<p>Code template</p>
				<textarea className="admin_ta" ref={ref => this.tem = ref}></textarea>
				<button onClick={this.send.bind(this)}>save</button>
			</div>
		)
	}
}

export default Admin
