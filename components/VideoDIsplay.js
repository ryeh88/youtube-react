import React, {Component} from 'react';

export default class VideoDisplay extends React.Component { 
	
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<img className="video-thumbnail" src={this.props.link}></img>
				<p>{this.props.description}</p>
			</div>
		)
	}

}

			// <ul>	
			// {this.props.videos.map((videos, i) => 
			// 	<li key={i}>{videos.snippet.title}</li>
			// 	)}
			// </ul>