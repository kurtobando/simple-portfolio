import React, { Fragment } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import TemplateDefault from "../component/template.default"

const TechnologiesList = ( props ) => {
	const { text, index } = props
	// will add circle
	if ( index !== 0 ) {
		return(
			<Fragment>
				<li className="list-inline-item circle">
					<svg width="0.6em" height="0.6em" viewBox="0 0 16 16" className="bi bi-circle-fill text-success" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
						<circle cx="8" cy="8" r="8"/>
					</svg>
				</li>
				<li className="list-inline-item">
					{ text }
				</li>
			</Fragment>
		)
	}
	// not add circle in the last element
	return(
		<li className="list-inline-item">
			{ text }
		</li>
	)
}

const ProjectList = ( props ) => {
	const technologies = props.data.frontmatter.technologies.split(',')

	return(
		<Fragment>
			<Link to={ `/project/${ props.data.fields.slug }` } className="col mt-4 text-decoration-none project-list">
				<div className="card border-0 shadow-sm">
					<div className="card-body p-0">
						<div className="d-flex">
							{/* accent color horizontal */}
							<div className="d-flex flex-column accent-line" >
								<div className="bg-primary" style={{ height : "50%" }}>{}</div>
								<div className="bg-secondary" style={{ height : "30%" }}>{}</div>
								<div className="bg-success" style={{ height : "20%" }}>{}</div>
							</div>
							{/* project details */}
							<div className="p-4">
								<h2 className="h5 font-weight-bold">{ props.data.frontmatter.title }</h2>
								<p>{ props.data.frontmatter.description }</p>
								<h3 className="h6 font-weight-bold">Why this project?</h3>
								<p>{ props.data.frontmatter.reason }</p>
								<p>{ technologies.map(( value, index ) => <TechnologiesList key={ index } index={ index } text={ value } /> ) }</p>
							</div>
						</div>
					</div>
				</div>
			</Link>
		</Fragment>
	)
}

const Project = () => {
	const data = useStaticQuery( graphql`
        query{
			allMarkdownRemark {
				nodes {
					id
					fields {
						slug
					}
					frontmatter {
						description
						reason
						technologies
						title
						image
					}
				}
			}
        }
    `)
	return (
		<Fragment>
			<TemplateDefault>
				<div className="row row-cols-1 row-cols-lg-2 mt-5">
					{ data.allMarkdownRemark.nodes.map(( value ) => <ProjectList key={ value.id } data={ value } /> ) }
				</div>
			</TemplateDefault>
		</Fragment>
	)
}

export default Project