import React, {useEffect} from "react"

import {useLocation} from "react-router-dom"
import ReactPlayer from 'react-player'

import {useResultContext} from '../contexts/ResultContextProvider'
import Loading from "./Loading";

function Results() {
    const {results, getResults, isLoading, searchTerm, setSearchTerm} = useResultContext()
    const location = useLocation() //images, news, search

    // useEffect(() => {
    //     getResults('/search/q=JavaScript&num=40')
    // }, [])

    if(isLoading){
        return <Loading />
    }

    switch (location.pathname){
        case '/search':
            return (
                <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
                    {/*{results ?.results?.map(({link, title})=>())}*/}

                </div>
            )
        case '/images':
            return 'SEARCH'
        case '/videos':
            return 'SEARCH'
        case '/news':
            return 'SEARCH'
        default:
            return 'ERROR'
    }

    return (
        <div>
            Results
        </div>
    )
}

export default Results