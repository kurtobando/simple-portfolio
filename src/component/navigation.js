import React, { Fragment } from "react"
import { Link } from "gatsby"

const Navigation = () => {
	return(
		<Fragment>
			<div className="d-flex flex-wrap justify-content-end">
				<Link className="m-2" to="/">about</Link>
				<Link className="m-2" to="/contact">contact</Link>
				<Link className="m-2" to="/project">project</Link>
			</div>
		</Fragment>
	)
}

export default Navigation