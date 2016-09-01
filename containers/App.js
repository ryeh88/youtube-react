import React from 'react';
import SearchInput from '../components/SearchInput';
import VideoDisplay from '../components/VideoDisplay';

export default class App extends React.Component {
	handleClick(){
		console.log("searchVideo")
	}

	render(){
		return (
			<div>
			<SearchInput />
			<button onClick={this.handleClick.bind(this)}></button>
			<VideoDisplay title="Title of Video" link="http://img.youtube.com/vi/YFP8lbdZ0cs/mqdefault.jpg" description="Description of video here" />
			</div>
		)
	} 
}


