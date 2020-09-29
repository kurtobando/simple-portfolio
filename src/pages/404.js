import React from "react"
import { Link } from "gatsby"
import TemplateDefault from "../component/template.default"

const NotFound = () => {
	return(
		<TemplateDefault>
			<div className="d-flex flex-column justify-content-center" style={{ minHeight : "80vh"}}>
				<div className="text-center">
					<h1 className="font-weight-bold display-1">404</h1>
					<h1 className="font-weight-bold display-3">This page doesn't exist.</h1>
					<p>There is nothing funny about that. <Link className="text-primary" to="/">Go Home</Link> </p>
				</div>
			</div>
		</TemplateDefault>
	)
}

export default NotFound