import Link from "next/link"
import { useRouter } from "next/router"
import styles from "./Navigation.module.css"

function isCurrentPath(givenPath: string): boolean {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { asPath = "/" } = useRouter()

    let toComparePath: string[] | string = givenPath.split("/")
    toComparePath = `/${toComparePath[1]}`

    let currentPath: string[] | string = asPath.split("/")
    currentPath = `/${currentPath[1]}`

    return currentPath === toComparePath
}

export default function Navigation(): JSX.Element {
    const URL = {
        HOME: `/`,
        PROJECTS: `/projects`,
        CONTACT: `/contact`,
    }

    return (
        <ul className={styles.Navigation}>
            <li>
                <Link href={URL.HOME}>
                    <a className={isCurrentPath(URL.HOME) ? styles.isCurrentPath : ""}>about</a>
                </Link>
            </li>
            <li>
                <Link href={URL.PROJECTS}>
                    <a className={isCurrentPath(URL.PROJECTS) ? styles.isCurrentPath : ""}>projects</a>
                </Link>
            </li>
            <li>
                <Link href={URL.CONTACT}>
                    <a className={isCurrentPath(URL.CONTACT) ? styles.isCurrentPath : ""}>contact</a>
                </Link>
            </li>
        </ul>
    )
}
