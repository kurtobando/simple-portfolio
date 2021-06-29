import Navigation from "./Navigation"
import styles from "./Layout.module.css"

export default function Layout({ children }) {
    return (
        <div className={styles.Layout}>
            <div className={styles.BrandWithNavigation}>
                <div className="py-4 font-bold">kurtobando</div>
                <Navigation />
            </div>
            <div>{children}</div>
        </div>
    )
}
