import { GOOGLE_ANALYTICS_TRACKING_ID } from "../config/config"

// log the pageview with their URL
export const pageview = (url: string): void => {
    window.gtag("config", GOOGLE_ANALYTICS_TRACKING_ID, {
        page_path: url,
    })
}

// log specific events happening.
export const event = ({ action, params }): void => {
    window.gtag("event", action, params)
}
