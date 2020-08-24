import React, { Fragment } from "react"
import TemplateDefault from "../component/template.default"

const TemplateProject = ( props ) => {
	return (
		<Fragment>
			<TemplateDefault>
				<h2>{ props.pageContext.data.frontmatter.title }</h2>
				<p>{ props.pageContext.data.frontmatter.description }</p>
				<h3>Why this project?</h3>
				<p>{ props.pageContext.data.frontmatter.reason }</p>
				<p>{ props.pageContext.data.frontmatter.technologies }</p>
				<div dangerouslySetInnerHTML={{ __html : props.pageContext.data.html }}></div>
			</TemplateDefault>
		</Fragment>
	)
}

export default TemplateProject