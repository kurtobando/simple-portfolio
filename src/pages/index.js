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
                <div className="d-flex flex-column justify-content-end mt-5" style={{ minHeight : "70vh" }}>
                   <div className="text-center text-md-left">
                       <h1 className="font-weight-bold display-1" >{data.site.siteMetadata.title}</h1>
                       <h2 className="display-3" >{data.site.siteMetadata.description}</h2>
                       <div className="col-6 col-md-12 mx-auto my-4 my-md-0 p-0">
                           <AccentLine />
                       </div>
                       <div className="my-3">
                           <SocialMediaList />
                       </div>
                   </div>
                </div>
            </TemplateDefault>
        </Fragment>
    )
}

export default Home
