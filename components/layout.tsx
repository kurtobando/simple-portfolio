import Navigation from "./navigation"

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
