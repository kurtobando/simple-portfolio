import React, { Fragment } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Navigation from "../component/navigation"
import Head from "../component/head"


export default function Home() {
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
            <Head />
            <Navigation />
            <h1>{data.site.siteMetadata.title}</h1>
            <p>{data.site.siteMetadata.description}</p>
            <small>{data.site.siteMetadata.author}</small>
        </Fragment>
    )
}
