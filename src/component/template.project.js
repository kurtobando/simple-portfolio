import React, { Fragment } from "react"
import TemplateDefault from "../component/template.default"
import { TechnologiesList } from "../pages/project"

const TemplateProject = ( props ) => {
	const technologies = props.pageContext.data.frontmatter.technologies.split(',')

	return (
		<Fragment>
			<TemplateDefault>
				<div className="project-template mt-5 mb-5 pb-5">
					<div className="my-5">
						<h1 className="h1 font-weight-bold">{ props.pageContext.data.frontmatter.title }</h1>
						<p>{ props.pageContext.data.frontmatter.description }</p>
					</div>
					<h3 className="font-weight-bold">Why this project?</h3>
					<p>{ props.pageContext.data.frontmatter.reason }</p>
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