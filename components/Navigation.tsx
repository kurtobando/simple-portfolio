import Link from "next/link"
import styles from "./Navigation.module.css"

export default function Navigation() {
    const URL = {
        HOME: `/`,
        PROJECTS: `/projects`,
        CONTACT: `/contact`,
    }

    return (
        <ul className={styles.Navigation}>
            <li>
                <Link href={URL.HOME}>
                    <a>about</a>
                </Link>
            </li>
            <li>
                <Link href={URL.PROJECTS}>
                    <a>projects</a>
                </Link>
            </li>
            <li>
                <Link href={URL.CONTACT}>
                    <a>contact</a>
                </Link>
            </li>
        </ul>
    )
}
