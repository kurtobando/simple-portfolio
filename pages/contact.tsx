import Layout from "../components/Layout"
import SocialMediaList from "../components/SocialMediaList"

export default function Contact(): JSX.Element {
    return (
        <div>
            <Layout>
                <div
                    className="flex flex-col justify-center text-center"
                    style={{ height: "80vh", minHeight: "400px" }}>
                    <h1 className="font-bold text-3xl">Want to work together ?</h1>
                    <div className="mx-auto w-5/6 md:w-4/6 lg:w-3/6">
                        <p>
                            I work best with people who enjoy what they are working on. If you are excited about
                            something you are making. I want to work with you.
                        </p>
                    </div>
                    <div className="py-4">
                        <SocialMediaList />
                    </div>
                </div>
                <div></div>
            </Layout>
        </div>
    )
}
