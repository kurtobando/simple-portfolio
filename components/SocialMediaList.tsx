import SVGGithub from "./SVGGithub"
import SVGLinkedIn from "./SVGLinkedIn"
import styles from "./SocialMediaList.module.css"

export default function SocialMediaList() {
    return (
        <div className={styles.SocialMediaList}>
            <ul>
                <li>
                    <a href="https://github.com/kurtobando/" target="_blank" rel="noreferrer">
                        <SVGGithub />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/kurt-obando/" target="_blank" rel="noreferrer">
                        <SVGLinkedIn />
                    </a>
                </li>
            </ul>
        </div>
    )
}
