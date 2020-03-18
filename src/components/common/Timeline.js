import React, { Component } from 'react';
import TimelineItem from './TimelineItem';

//Images :
import img1 from '../assets/img/about/1.jpg';
import img2 from '../assets/img/about/2.jpg';
import img3 from '../assets/img/about/3.jpg';
import img4 from '../assets/img/about/4.jpg';

const timeline = [
	{
		year: '2009-2011',
		subtitle: 'Our Humble Beginnings',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, recusandae ex hic quam sed itaque esse, enim numquam assumenda perspiciatis nesciunt nulla quis vero inventore.',
		image: img1
	},
	{
		year: 'March 2011',
		subtitle: 'An Agency is Born',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, recusandae ex hic quam sed itaque esse, enim numquam assumenda perspiciatis nesciunt nulla quis vero inventore.',
		image: img2
	},
	{
		year: 'Descember 2012',
		subtitle: 'Transition to Full Service',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, recusandae ex hic quam sed itaque esse, enim numquam assumenda perspiciatis nesciunt nulla quis vero inventore.',
		image: img3
	},
	{
		year: 'July 2014',
		subtitle: 'Phase Two Expansion',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, recusandae ex hic quam sed itaque esse, enim numquam assumenda perspiciatis nesciunt nulla quis vero inventore.',
		image: img4
	}
];

class Timeline extends Component {
	render() {
		return (
			<section className='page-section' id='about'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12 text-center'>
							<h2 className='section-heading text-uppercase'>
								About
							</h2>
							<h3 className='section-subheading text-muted'>
								Lorem ipsum dolor sit amet consectetur.
							</h3>
						</div>
					</div>
					<div className='row'>
						<div className='col-lg-12'>
							<ul className='timeline'>
								{timeline.map((item, index) => {
									return (
										<TimelineItem {...item} key={index} />
									);
								})}
								<li className='timeline-inverted'>
									<div className='timeline-image'>
										<h4>
											Be Part
											<br />
											Of Our
											<br />
											Story!
										</h4>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Timeline;
