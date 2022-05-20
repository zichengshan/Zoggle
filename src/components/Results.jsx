import React, {useEffect} from "react"

import {useLocation} from "react-router-dom"
import ReactPlayer from 'react-player'

import {useResultContext} from '../contexts/ResultContextProvider'
import Loading from "./Loading";

function Results() {
    const {results, getResults, isLoading, searchTerm, setSearchTerm} = useResultContext()
    const location = useLocation() //images, news, search

    if(isLoading){
        return <Loading />
    }

    return (
        <div>
            Results
        </div>
    )
}

export default Results