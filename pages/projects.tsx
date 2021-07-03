import axios from "axios"
import Link from "next/link"
import { GetStaticProps } from "next"
import Layout from "../components/Layout"
import { GRAPHQL_URL } from "../config/config"

type ProjectNode = {
    id: string
    title: string
    uri: string
    excerpt: string
}

interface Project {
    node: ProjectNode
}

function fetchGraphqlProjects(): string {
    return `query fetchGraphqlProjects {
        projects {
          edges {
            node {
              id
              uri
              title
              excerpt
              date
            }
          }
        }
      }
      `
}

export default function Projects({ projects }): JSX.Element {
    return (
        <div>
            <Layout>
                {projects.map((project: Project): JSX.Element => {
                    return (
                        <div key={project.node.id}>
                            <Link href={project.node.uri}>
                                <a>
                                    <h2>{project.node.title}</h2>
                                </a>
                            </Link>
                            <div dangerouslySetInnerHTML={{ __html: project.node.excerpt }} />
                        </div>
                    )
                })}
            </Layout>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const { data } = await axios.post(GRAPHQL_URL, { query: fetchGraphqlProjects() })
    const projects: object[] = data?.data?.projects?.edges

    return {
        props: {
            projects,
        },
    }
}
