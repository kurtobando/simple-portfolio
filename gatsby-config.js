require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`
})

const GATSBY_GOOGLE_ANALYTICS_TRACKING_ID = process.env.GATSBY_GOOGLE_ANALYTICS_TRACKING_ID || "REPLACE_GOOGLE_ANALYTICS_ID"
const GATSBY_SITE_TITLE = process.env.GATSBY_SITE_TITLE || "REPLACE_SITE_TITLE"
const GATSBY_SITE_DESCRIPTION = process.env.GATSBY_SITE_DESCRIPTION || "REPLACE_SITE_DESCRIPTION"
const GATSBY_SITE_AUTHOR = process.env.GATSBY_SITE_AUTHOR || "REPLACE_SITE_AUTHOR"
const GATSBY_URL_GITHUB = process.env.GATSBY_URL_GITHUB || "REPLACE_URL_GITHUB"
const GATSBY_URL_DRIBBLE = process.env.GATSBY_URL_DRIBBLE || "REPLACE_URL_DRIBBLE"
const GATSBY_URL_LINKEDIN = process.env.GATSBY_URL_LINKEDIN || "REPLACE_URL_LINKEDIN"

module.exports = {
    siteMetadata: {
        title: GATSBY_SITE_TITLE,
        description: GATSBY_SITE_DESCRIPTION,
        author: GATSBY_SITE_AUTHOR,
        github: GATSBY_URL_GITHUB,
        linkedIn: GATSBY_URL_DRIBBLE,
        dribble: GATSBY_URL_LINKEDIN
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: GATSBY_GOOGLE_ANALYTICS_TRACKING_ID,
                head: true,
                defer: false,
            }
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `markdown`,
                path: `${__dirname}/src/markdown/`,
            }
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                commonmark: true,
                footnotes: true,
                pedantic: true,
                gfm: true,
                plugins: [],
            }
        },
    ],
}
