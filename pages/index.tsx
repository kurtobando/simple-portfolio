import Layout from "../components/Layout"
import SocialMediaList from "../components/SocialMediaList"

export default function Home(): JSX.Element {
    return (
        <div>
            <Layout>
                <div className="text-center ">
                    <div className="h-screen flex flex-col justify-center">
                        <h1 className="font-bold text-3xl">Hey! I’m Kurt</h1>
                        <div className="mx-auto w-5/6 md:w-4/6 lg:w-3/6">
                            <p>
                                a frontend developer who enjoy the experience working with JavaScript, and travel during
                                spare time.
                            </p>
                        </div>
                        <div className="py-4">
                            <SocialMediaList />
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}
