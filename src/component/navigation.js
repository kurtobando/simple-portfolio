import React, { Fragment } from "react"
import { Link } from "gatsby"

const Navigation = () => {
	return(
		<Fragment>
			<div className="d-flex flex-wrap justify-content-end font-weight-bold navigation" >
				<Link className="m-2 text-decoration-none" to="/" activeClassName="active">about</Link>
				<Link className="m-2 text-decoration-none" to="/contact" activeClassName="active">contact</Link>
				<Link className="m-2 text-decoration-none" to="/project" activeClassName="active">project</Link>
			</div>
		</Fragment>
	)
}

export default Navigation