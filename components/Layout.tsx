import Head from "next/head"
import Navigation from "./Navigation"
import styles from "./Layout.module.css"
import { SITE_TITLE, SITE_DESCRIPTION, SITE_AUTHOR } from "../config/config"

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>{SITE_TITLE}</title>
                <meta name="description" content={SITE_DESCRIPTION} />
                <meta name="author" content={SITE_AUTHOR} />
            </Head>
            <div className={styles.Layout}>
                <div className={styles.BrandWithNavigation}>
                    <div className="py-4 font-bold">kurtobando</div>
                    <Navigation />
                </div>
                <div>{children}</div>
            </div>
        </>
    )
}
