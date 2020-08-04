import React, { Fragment } from "react"
import { Link } from "gatsby"

const Navigation = () => {
	return(
		<Fragment>

			<Link to="/">about</Link>
			<Link to="/contact">contact</Link>
			<Link to="/project">project</Link>
		</Fragment>
	)
}

export default Navigation