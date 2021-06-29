import Link from "next/link"

export default function Navigation() {
    const URL = {
        HOME: `/`,
        PROJECTS: `/projects`,
        CONTACT: `/contact`,
    }

    return (
        <ul>
            <li>
                <Link href={URL.HOME}>
                    <a className="hover:underline">about</a>
                </Link>
            </li>
            <li>
                <Link href={URL.PROJECTS}>
                    <a className="hover:underline">projects</a>
                </Link>
            </li>
            <li>
                <Link href={URL.CONTACT}>
                    <a className="hover:underline">contact</a>
                </Link>
            </li>
        </ul>
    )
}
