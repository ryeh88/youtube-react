import React from 'react';

export default class SearchInput extends React.Component {

	constructor(props, context) {
	  super(props, context);
	
	  this.state = {};
	}


	render() {

		return(
			<div>
				<input type="text" placeholder="Text Here"  />
			</div>
			)
	}
	
}