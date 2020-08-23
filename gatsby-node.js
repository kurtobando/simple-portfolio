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