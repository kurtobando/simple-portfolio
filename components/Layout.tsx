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

                <link rel="apple-touch-icon" sizes="180x180" href={`${SITE_URL}/apple-touch-icon.png`} />
                <link rel="icon" type="image/png" sizes="32x32" href={`${SITE_URL}/favicon-32x32.png`} />
                <link rel="icon" type="image/png" sizes="16x16" href={`${SITE_URL}/favicon-16x16.png`} />
                <link rel="manifest" href={`${SITE_URL}/site.webmanifest`} />
                <link rel="mask-icon" href={`${SITE_URL}/safari-pinned-tab.svg`} color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
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
