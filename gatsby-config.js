/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

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
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
    ],
}
