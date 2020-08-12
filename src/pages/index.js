import React, { Fragment } from "react"
import { graphql, useStaticQuery } from "gatsby"
import TemplateDefault from "../component/template.default"

const Home = () => {
    const data = useStaticQuery( graphql`
        query{
            site{
                siteMetadata{
                    title
                    description
                    author
                }
            }
        }
    `)
    return(
        <Fragment>
            <TemplateDefault>
                <h1>{data.site.siteMetadata.title}</h1>
                <p>{data.site.siteMetadata.description}</p>
                <small>{data.site.siteMetadata.author}</small>
            </TemplateDefault>
        </Fragment>
    )
}

export default Home
