import React, { Fragment } from "react"
import TemplateDefault from "../component/template.default"

const Contact = () => {
	return (
		<Fragment>
			<TemplateDefault>
				<h1>Do you see potential on my works? Let me know. </h1>
				<form action="">
					<input type="text" placeholder="name"/>
					<input type="email" placeholder="email address" />
					<textarea rows="10"  placeholder="message"/>
					<input type="submit" value="send message"/>
				</form>
			</TemplateDefault>
		</Fragment>
	)
}

export default Contact