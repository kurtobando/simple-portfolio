import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const List = ( props ) => {
	const { href, text } = props

	return(
		<li className="list-inline-item">
			<a href={ href } target="_blank" rel="noreferrer" >{ text }</a>
		</li>
	)
}

const SocialMediaList = () => {
	const data = useStaticQuery( graphql`
		query{
			site{
				siteMetadata{
					github
					linkedIn
					dribble
				}
			}
		}
	`)

	return(
		<ul className="list-inline">
			{
				Object.keys( data.site.siteMetadata ).map(( value, index ) => {
					return <List key={ index } text={ value } href={ data.site.siteMetadata[value] } />
				})
			}
		</ul>
	)
}

export default SocialMediaList