import React from "react"
import {Routes, Route, Navigate } from "react-router-dom"

import Results from './Results'

function RoutesComponent() {
    return (
        <div className='p-4'>
            <Routes>
                <Route exact path="/" element = {<Navigate to="/search" replace={true} />} />
                <Route exact path='/search' element={<Results />} />
                <Route exact path="/image" element={<Results />} />
                <Route exact path="/news" element={<Results />} />
                <Route exact path="/videos" element={<Results />} />
            </Routes>
        </div>
    )
}

export default RoutesComponent