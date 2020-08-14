import React, { Fragment } from "react"
import TemplateDefault from "../component/template.default"
import SocialMediaList from "../component/social.media.list"
import AccentLine from "../component/accent.line";

const Contact = () => {
	return (
		<Fragment>
			<TemplateDefault>
				<div className="d-flex flex-column justify-content-center mx-auto mt-5" style={{ minHeight : "80vh", maxWidth : "600px" }}>
					<div className="text-center">
						<h1 className="font-weight-bold" style={{ fontSize: "36px" }} >Want to work together ? </h1>
						<div className="col-5 mx-auto my-3">
							<AccentLine/>
						</div>
						<p style={{ fontSize: "24px" }}>I work best with people who are passionate about what they are working on. If you are excited about something you are making. I want to work with you.</p>
						<div className="my-5">
							<SocialMediaList />
						</div>
						<form className="d-flex flex-column contact-form">
							<div className="form-group">
								<input className="form-control" type="text" placeholder="name" />
							</div>
							<div className="form-group">
								<input className="form-control" type="email" placeholder="email address" />
							</div>
							<div className="form-group">
								<textarea className="form-control" rows="5"  placeholder="message" />
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