import React, {createContext, useContext, useState} from "react"

const ResultContext = createContext()
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1"

function ResultContextProvider({children}) {
    const [results, setResults] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')

    // /videos /images /search
    const getResults = async (type) => {
        setIsLoading(true)

        const response = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                'X-RapidAPI-Key': 'd6e0921898msh79b4953e09cc73cp1ba235jsnaef5f683bb98'
            }
        })

        const data = await response.json()

        setResults(data)
        setIsLoading(false)
    }

    return (
        <ResultContext.Provider value={{getResults, results, searchTerm, setSearchTerm, isLoading}}>
            {children}
        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext)
