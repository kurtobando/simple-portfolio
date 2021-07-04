import axios from "axios"
import { GetStaticPaths, GetStaticProps } from "next"
import Layout from "../../components/Layout"
import { GRAPHQL_URL } from "../../config/config"
import styles from "./Project.module.css"

function fetchProjectsSlug(): string {
    return `query fetchProjectsSlug {
        projects {
          edges {
            node {
              slug
            }
          }
        }
      }`
}

function fetchProject(slug: string): string {
    return `query fetchProject {
        project(id: "${slug}", idType: SLUG) {
          content(format: RENDERED)
          title
        }
      }`
}

export default function ProjectSlug({ project }): JSX.Element {
    const { title = "", content = "" }: { title: string; content: string } = project

    return (
        <Layout>
            <div className={styles.Project_Details}>
                <div>
                    <h2>{title}</h2>
                </div>
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { data } = await axios.post(GRAPHQL_URL, { query: fetchProject(params.slug.toString()) })
    const project = data?.data?.project

    return {
        props: {
            project,
        },
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const { data } = await axios.post(GRAPHQL_URL, { query: fetchProjectsSlug() })
    const projectSlugs = data?.data?.projects?.edges

    return {
        paths: projectSlugs.map((slug) => {
            return {
                params: {
                    slug: slug.node.slug.toString(),
                },
            }
        }),
        fallback: false,
    }
}
