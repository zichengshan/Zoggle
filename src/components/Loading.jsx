import React from "react"

import {Bars} from 'react-loader-spinner'

function Loading() {
    return (
        <div className="flex justify-center items-center">
            <Bars heigth="100" width="100" color="grey" ariaLabel="loading-indicator" />
        </div>
    )
}
export default Loading