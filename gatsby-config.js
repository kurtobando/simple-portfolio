/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require('dotenv').config()

const GOOGLE_ANALYTICS_TRACKING_ID = process.env.GOOGLE_ANALYTICS_TRACKING_ID || null

module.exports = {
    /* Your site config here */
    siteMetadata: {
        title: `Hey! I’m Kurt.`,
        description: `a frontend developer who enjoy the experience working with JavaScript, and travel during spare time.`,
        author: `kurt obando`,
        github: `https://github.com/kurtobando`,
        linkedIn: `https://www.linkedin.com/in/kurt-obando/`,
        dribble: `https://dribbble.com/kurtobando`
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: GOOGLE_ANALYTICS_TRACKING_ID,
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
