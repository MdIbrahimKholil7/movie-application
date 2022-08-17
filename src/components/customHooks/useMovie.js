import { useEffect, useState } from "react"
import axios from 'axios'
const useMovie = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`https://api.tvmaze.com/search/shows?q=all`)
            setMovies(data)
        })()
    }, [])
    return [movies]
}
export default useMovie