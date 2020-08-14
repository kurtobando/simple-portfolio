import React, { Fragment } from "react"
import { graphql, useStaticQuery } from "gatsby"

const List = ( props ) => {
	const { href, text, index } = props
	// will add circle
	if ( index !== 0 ) {
		return(
			<Fragment>
				<li className="list-inline-item">
					<svg width="0.6em" height="0.6em" viewBox="0 0 16 16" className="bi bi-circle-fill text-success" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
						<circle cx="8" cy="8" r="8"/>
					</svg>
				</li>
				<li className="list-inline-item">
					<a href={ href } target="_blank" rel="noreferrer" >{ text }</a>
				</li>
			</Fragment>
		)
	}
	// not add circle in the last element
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
		<ul className="list-inline social-media-list">
			{
				Object.keys( data.site.siteMetadata ).map(( value, index ) => {
					return <List key={ index } index={ index } text={ value } href={ data.site.siteMetadata[value] } />
				})
			}
		</ul>
	)
}

export default SocialMediaList