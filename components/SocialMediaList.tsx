import SVGGithub from "./SVGGithub"
import SVGLinkedIn from "./SVGLinkedIn"
import styles from "./SocialMediaList.module.css"
import { URL_GITHUB, URL_LINKEDIN } from "../config/config"

export default function SocialMediaList(): JSX.Element {
    return (
        <div className={styles.SocialMediaList}>
            <ul>
                <li>
                    <a href={URL_GITHUB} target="_blank" rel="noreferrer">
                        <SVGGithub />
                    </a>
                </li>
                <li>
                    <a href={URL_LINKEDIN} target="_blank" rel="noreferrer">
                        <SVGLinkedIn />
                    </a>
                </li>
            </ul>
        </div>
    )
}
