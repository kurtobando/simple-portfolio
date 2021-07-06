import Head from "next/head"
import Navigation from "./Navigation"
import styles from "./Layout.module.css"
import { SITE_TITLE, SITE_DESCRIPTION, SITE_AUTHOR, SITE_URL } from "../config/config"

export default function Layout({ children }): JSX.Element {
    return (
        <>
            <Head>
                <title>{SITE_TITLE}</title>
                <meta name="description" content={SITE_DESCRIPTION} />
                <meta name="author" content={SITE_AUTHOR} />
                <meta name="title" content={SITE_TITLE} />

                <meta property="og:type" content="website" />
                <meta property="og:url" content={SITE_URL} />
                <meta property="og:title" content={SITE_TITLE} />
                <meta property="og:description" content={SITE_DESCRIPTION} />
                <meta property="og:image" content={`${SITE_URL}/preview.png`} />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={SITE_URL} />
                <meta property="twitter:title" content={SITE_TITLE} />
                <meta property="twitter:description" content={SITE_DESCRIPTION} />
                <meta property="twitter:image" content={`${SITE_URL}/preview.png`} />
            </Head>
            <div className={styles.Layout}>
                <div className={styles.BrandWithNavigation}>
                    {/* <div className="py-4 font-bold">kurtobando</div> */}
                    <Navigation />
                </div>
                <div>{children}</div>
            </div>
        </>
    )
}
