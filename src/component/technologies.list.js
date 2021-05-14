import React, { Fragment } from "react"

const TechnologiesList = (props) => {
    const { text, index } = props
    // will add circle
    if (index !== 0) {
        return (
            <Fragment>
                <li className="list-inline-item circle">
                    <svg
                        width="0.6em"
                        height="0.6em"
                        viewBox="0 0 16 16"
                        className="bi bi-circle-fill text-success"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8" cy="8" r="8" />
                    </svg>
                </li>
                <li className="list-inline-item">{text}</li>
            </Fragment>
        )
    }
    // not add circle in the last element
    return <li className="list-inline-item">{text}</li>
}

export default TechnologiesList
