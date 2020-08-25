import React, { Fragment } from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import TemplateDefault from "../component/template.default"
import { TechnologiesList } from "../pages/project"


const TemplateProject = ( props ) => {
	const technologies = props.pageContext.data.frontmatter.technologies.split(',')
	const { title, description, reason } = props.pageContext.data.frontmatter

	return (
		<Fragment>
			<TemplateDefault>
				<Helmet defer={ false }>
					<title>{ title }</title>
					<meta name="description" content={ description } />
				</Helmet>
				<div className="project-template mt-5 mb-5 pb-5">
					<div className="my-5">
						<div className="d-flex flex-wrap align-items-baseline">
							<h1 className="h1 font-weight-bold">{ title }</h1>
							<div>
								<Link to="/" className="btn btn-link btn-outline-dark btn-sm mx-3">
									<small className="mr-2">Source Code</small>
									<FontAwesomeIcon icon={ faGithub } />
								</Link>
							</div>
						</div>
						<p>{ description }</p>
					</div>
					<h3 className="font-weight-bold">Why this project?</h3>
					<p>{ reason }</p>
					<p className="mt-4">{ technologies.map(( value, index ) => <TechnologiesList key={ index } index={ index } text={ value } /> ) }</p>
					<div className="my-5">
						<div dangerouslySetInnerHTML={{ __html : props.pageContext.data.html }}></div>
					</div>
				</div>
			</TemplateDefault>
		</Fragment>
	)
}

export default TemplateProject