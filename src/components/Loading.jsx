import React from "react"

import * as Loader from 'react-loader-spinner'

function Loading() {
    return (
        <div className="flex justify-center items-center">
            <Loader type='Puff' color="#00BFFF" height={550} width={80}/>
        </div>
    )
}

export default Loading