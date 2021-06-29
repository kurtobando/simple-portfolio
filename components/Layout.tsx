import Navigation from "./Navigation"

export default function Layout({ children }) {
    return (
        <div>
            <div>
                <Navigation />
            </div>
            <div>{children}</div>
        </div>
    )
}
