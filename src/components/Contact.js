import React, { useState } from 'react';

import './Contact.css' 

function Contact() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')
	const [isSubmitted, setIsSubmitted] = useState(false)

	const handleSubmit = (e) => {
		e.preventDefault()
		setIsSubmitted(true)
	
		setName('')
		setEmail('')
		setMessage('')
	}

	return (
    <div className='Contact'>
		<div className="contact-us">
			<div className="container">
				<h1 className="title">Contact Us</h1>
				<p className="description">
					Have questions or need help? We're here for you. Feel free
					to reach out using the form below.
				</p>
				<form onSubmit={handleSubmit} className="contact-form">
					<div className="form-group">
						<label htmlFor="name">Your Name:</label>
						<input
							type="text"
							id="name"
							name="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="email">Your Email:</label>
						<input
							type="email"
							id="email"
							name="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="message">Your Message:</label>
						<textarea
							id="message"
							name="message"
							rows="5"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							required
						></textarea>
					</div>
					<button type="submit" className="submit-button">
						Send Message
					</button>
					{isSubmitted && (
						<p className="success-message">
							Your message has been sent!
						</p>
					)}
				</form>
				<div className="contact-info">
					<h2>Other Ways to Reach Us</h2>
					<ul>
						<li>
							<span className="icon">
								<i className="fas fa-phone"></i>
							</span>
							<span className="text">(+91) 798-816-4660</span>
						</li>
						<li>
							<span className="icon">
								<i className="fas fa-envelope"></i>
							</span>
							<span className="text">udhav2476.be22@chitkara.edu.in</span>
						</li>
						<li>
							<span className="icon">
								<i className="fas fa-map-marker-alt"></i>
							</span>
							<span className="text">
								Chitkara University, Rajpura
							</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
    </div>
	)
}

export default Contact
