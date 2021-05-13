import React from "react"

const AccentLine = () => {
    return (
        <div className="d-flex">
            <div className="bg-primary" style={{ minHeight: "5px", minWidth: "50%" }}>
                {}
            </div>
            <div className="bg-secondary" style={{ minHeight: "5px", minWidth: "30%" }}>
                {}
            </div>
            <div className="bg-success" style={{ minHeight: "5px", minWidth: "20%" }}>
                {}
            </div>
        </div>
    )
}

export default AccentLine
