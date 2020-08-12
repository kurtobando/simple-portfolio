import React, { Fragment } from "react"
import { graphql, useStaticQuery } from "gatsby"
import TemplateDefault from "../component/template.default"
import AccentLine from "../component/accent.line"
import SocialMediaList from "../component/social.media.list"

const Home = () => {
    const data = useStaticQuery( graphql`
        query{
            site{
                siteMetadata{
                    title
                    description
                }
            }
        }
    `)
    return(
        <Fragment>
            <TemplateDefault>
                <div className="d-flex flex-column justify-content-end" style={{ minHeight : "70vh" }}>
                   <div className="text-center text-md-left">
                       <h1 className="font-weight-bold">{data.site.siteMetadata.title}</h1>
                       <p>{data.site.siteMetadata.description}</p>
                       <AccentLine />
                       <SocialMediaList />
                   </div>
                </div>
            </TemplateDefault>
        </Fragment>
    )
}

export default Home
