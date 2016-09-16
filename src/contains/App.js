import React from 'react'
import { findDOMNode } from 'react-dom'

import confirm from '../components/Confirm'

export default class App extends React.Component{
	hanlder(){
		confirm({
			confirmButtonClass: 'btn-info',
        	cancelButtonClass: 'btn-danger',
        	content:'<input class="form-control" type="text"/>',
        	icon: 'glyphicon glyphicon-heart',
        	closeIconClass: 'glyphicon glyphicon-play',
        	// theme:'black'
		});
	}

	render(){
		return (
			<div>
				<h1>react confirm test example</h1>
				<button className="btn btn-default" onClick={this.hanlder.bind(this)}>btn</button>
			</div>
		)
	}
}