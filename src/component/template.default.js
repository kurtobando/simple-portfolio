import React, { Fragment } from "react"
import Navigation from "../component/navigation"
import Head from "../component/head"

const TemplateDefault = ( props ) => {
	return(
		<Fragment>
			<div className="container min-vh-100">
				<Head />
				<Navigation />
				{ props.children }
			</div>
		</Fragment>
	)
}

export default TemplateDefault