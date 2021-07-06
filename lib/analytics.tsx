import { GOOGLE_ANALYTICS_TRACKING_ID } from "../config/config"

// issue    : Property 'gtag' does not exist on type 'Window & typeof globalThis'
// solution : https://stackoverflow.com/questions/12709074/how-do-you-explicitly-set-a-new-property-on-window-in-typescript
declare global {
    interface Window {
        gtag: any
    }
}

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
