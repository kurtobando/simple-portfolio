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
                <div className="d-flex justify-content-end align-items-center" style={{ minHeight : "70vh" }}>
                   <div>
                       <h1>{data.site.siteMetadata.title}</h1>
                       <p>{data.site.siteMetadata.description}</p>
                   </div>
                </div>
            </TemplateDefault>
        </Fragment>
    )
}

export default Home
