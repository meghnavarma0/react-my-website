import React, { Component } from 'react';
import Field from '../common/Field';
import { withFormik } from 'formik';

import * as Yup from 'yup';

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
								onSubmit={this.props.handleSubmit}
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
																	this.props
																		.values[
																		field
																			.name
																	]
																}
																name={
																	field.name
																}
																onChange={
																	this.props
																		.handleChange
																}
																onBlur={
																	this.props
																		.handleBlur
																}
																touched={
																	this.props
																		.touched[
																		field
																			.name
																	]
																}
																errors={
																	this.props
																		.errors[
																		field
																			.name
																	]
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

export default withFormik({
	mapPropsToValues: () => ({
		name: '',
		email: '',
		phone: '',
		message: ''
	}),

	validationSchema: Yup.object().shape({
		name: Yup.string()
			.min(3, 'Come on bruh! Your name is longer than that!')
			.required('You mus give us your name!'),
		email: Yup.string()
			.email('You must give us a valid email')
			.required('We need your email'),
		phone: Yup.string()
			.min(10, 'please provide your 10 digit phone no.')
			.max(15, 'Your phone no. is too long!')
			.required('We need your phone no. to reach you at!'),
		message: Yup.string()
			.min(500, 'You need to provide us more detailed information')
			.required('Please send us a message in detail')
	}),

	handleSubmit: (values, { setSubmitting }) => {
		console.log(values);
		alert("You've submitted the form!", JSON.stringify(values));
	}
})(Contact);
