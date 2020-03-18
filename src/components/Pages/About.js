import React, { Component } from 'react';
import Header from '../common/Header';
import image from '../assets/img/ladyCoder.jpg';
import Timeline from '../common/Timeline';
import Team from '../common/Team';

class About extends Component {
	render() {
		return (
			<div>
				<Header
					title='About Us'
					subtitle="IT'S really a great story"
					showButton={false}
					image={image}
				/>
				<Timeline />
				<Team />
			</div>
		);
	}
}

export default About;
