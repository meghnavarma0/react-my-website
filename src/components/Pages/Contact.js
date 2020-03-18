import React, { Component } from 'react';
import Field from '../common/Field';

const fields = {
	sections: [
		[
			{
				name: 'name',
				type: 'text',
				elementName: 'input',
				placeholder: 'Enter Your Name'
			},
			{
				name: 'email',
				type: 'email',
				elementName: 'input',
				placeholder: 'Enter Your Email'
			},
			{
				name: 'phone',
				type: 'text',
				elementName: 'input',
				placeholder: 'Enter Your Phone No.'
			}
		],
		[
			{
				name: 'message',
				type: 'text',
				elementName: 'message',
				placeholder: 'Enter Your Message'
			}
		]
	]
};

class Contact extends Component {
	state = {
		name: '',
		email: '',
		phone: '',
		message: ''
	};
	submitFormHandler = event => {
		alert('Form Submitted.. Thank You Very Much!');
	};

	render() {
		return (
			<section className='page-section' id='contact'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12 text-center'>
							<h2 className='section-heading text-uppercase'>
								Contact Us
							</h2>
							<h3 className='section-subheading text-muted'>
								Lorem ipsum dolor sit amet consectetur.
							</h3>
						</div>
					</div>
					<div className='row'>
						<div className='col-lg-12'>
							<form
								id='contactForm'
								name='sentMessage'
								novalidate='novalidate'
								onSubmit={e => this.submitFormHandler(e)}
							>
								<div className='row'>
									{fields.sections.map(
										(section, sectionIndex) => {
											console.log(section);
											return (
												<div
													className='col-md-6'
													key={sectionIndex}
												>
													{section.map((field, i) => {
														return (
															<Field
																{...field}
																key={i}
																value={
																	this.state[
																		field
																			.name
																	]
																}
																onChange={e =>
																	this.setState(
																		{
																			[field.name]:
																				e
																					.target
																					.value
																		}
																	)
																}
															/>
														);
													})}
												</div>
											);
										}
									)}
									<div className='clearfix'></div>
									<div className='col-lg-12 text-center'>
										<div id='success'></div>
										<button
											id='sendMessageButton'
											className='btn btn-primary btn-xl text-uppercase'
											type='submit'
										>
											Send Message
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Contact;
