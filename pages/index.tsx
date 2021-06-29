import Layout from "../components/Layout"
import SocialMediaList from "../components/SocialMediaList"

export default function Home(): JSX.Element {
    return (
        <div>
            <Layout>
                <h1>Hey! I’m Kurt</h1>
                <p>
                    a frontend developer who enjoy the experience working with JavaScript, and travel during spare time.
                </p>
                <SocialMediaList />
            </Layout>
        </div>
    )
}
