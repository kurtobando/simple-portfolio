import React, { Fragment } from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const Head = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    author
                }
            }
        }
    `)

    return (
        <Fragment>
            <Helmet defer={false}>
                <title>{data.site.siteMetadata.title}</title>
                <meta name="description" content={data.site.siteMetadata.description} />
                <meta name="author" content={data.site.siteMetadata.author} />
                {/*	https://www.gatsbyjs.org/docs/adding-analytics/ */}
            </Helmet>
        </Fragment>
    )
}

export default Head
