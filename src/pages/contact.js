import React, { Fragment } from "react"
import Navigation from "../component/navigation"
import Head from "../component/head"

const Contact = () => {
	return (
		<Fragment>
			<Head />
			<Navigation />
			<h1>Do you see potential on my works? Let me know. </h1>
			<form action="">
				<input type="text" placeholder="name"/>
				<input type="email" placeholder="email address" />
				<textarea rows="10"  placeholder="message"/>
				<input type="submit" value="send message"/>
			</form>
		</Fragment>
	)
}

export default Contact