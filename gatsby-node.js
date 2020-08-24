const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
	const { createNode, createNodeField } = actions

	if ( node.internal.type === "MarkdownRemark" ) {
		const file 		= node.fileAbsolutePath
		const basename 	= path.basename( file )
		const ext 		= path.extname( file )
		const slug 		= basename.replace( ext, '')

		createNodeField({
			node,
			name: `slug`,
			value: slug
		})
	}
}



module.exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions
	const template 		 = path.resolve('./src/component/template.project.js')
	const slugs			 = await graphql(`
        query{
			allMarkdownRemark {
				nodes {
					id
					fields {
						slug
					}
					frontmatter {
						description
						reason
						technologies
						title
						image
					}
					html
				}
			}
        }
	`)

	slugs.data.allMarkdownRemark.nodes.forEach(( value ) => {
		createPage({
			component : template,
			path : `/project/${ value.fields.slug }`,
			context : {
				slug : value.fields.slug,
				data : value
			}
		})
	})
}