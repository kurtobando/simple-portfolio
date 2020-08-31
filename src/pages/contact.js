import React, { Fragment } from "react"
import axios from 'axios'
import { useForm } from "react-hook-form"
import TemplateDefault from "../component/template.default"
import SocialMediaList from "../component/social.media.list"
import AccentLine from "../component/accent.line"

const Contact = () => {
	const { errors, register, handleSubmit } = useForm({ mode: 'onSubmit', reValidateMode : 'onSubmit' })
	const URL = process.env.GATSBY_EXPRESS_URL
	const PORT = process.env.GATSBY_EXPRESS_PORT


	const handleOnSubmit = async ( data, event ) => {
		event.preventDefault()
		event.target.reset()

		const result = await axios({
			method : "POST",
			data : JSON.stringify( data ),
			url : `${URL}:${PORT}/contact/send`,
			headers: {
				'Accept' : 'application/json',
				'Content-Type' : 'application/json',
			}
		})

		console.log( result )
	}
	return (
		<Fragment>
			<TemplateDefault>
				<div className="d-flex flex-column justify-content-center mx-auto mt-5" style={{ minHeight : "80vh", maxWidth : "600px" }}>
					<div className="text-center">
						<h1 className="font-weight-bold display-3" >Want to work together ? </h1>
						<div className="col-5 mx-auto my-3">
							<AccentLine/>
						</div>
						<h2 className="display-4">I work best with people who are passionate about what they are working on. If you are excited about something you are making. I want to work with you.</h2>
						<div className="my-4">
							<SocialMediaList />
						</div>
						<form className="d-flex flex-column contact-form" onSubmit={ handleSubmit( handleOnSubmit ) }>
							<div className="form-group">
								<input
									className="form-control"
									type="text"
									placeholder="name"
									name="name"
									ref={
										register({
											required : "name is required"
										})
									}
								/>
								{ errors.name && <div className="text-left text-danger small pl-4 pt-2">{ errors.name.message }</div> }
							</div>
							<div className="form-group">
								<input
									className="form-control"
									type="email"
									placeholder="email address"
									name="email"
									ref={
										register({
											required : "email address is required"
										})
									}
								/>
								{ errors.email && <div className="text-left text-danger small pl-4 pt-2">{ errors.email.message }</div> }
							</div>
							<div className="form-group">
								<textarea
									className="form-control"
									rows="5"
									placeholder="message"
									name="message"
									ref={
										register({
											required : "message is required"
										})
									}
								/>
								{ errors.message && <div className="text-left text-danger small pl-4 pt-2">{ errors.message.message }</div> }
							</div>
							<input className="btn btn-primary btn-block " type="submit" value="send message" />
						</form>
					</div>
				</div>
			</TemplateDefault>
		</Fragment>
	)
}

export default Contact