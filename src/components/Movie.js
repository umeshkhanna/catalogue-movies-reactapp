import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Movie = () => {
    const [movie, setMovie] = useState({})
    const { id } = useParams()

    useEffect(() => {
        let myMovie = {
            id: 1,
            title: "Harry Potter and Sorcerer's Stone",
            release_date: "2000-01-22",
            runtime: 150,
            mpaa_rating: "PG-13",
            description: "Some Description"
        }
        setMovie(myMovie)
    }, [id])

    return (
        <div>
            <h2>Movie : {movie.title}</h2>
            <small><em>Release Date: {movie.release_date}, Runtime: {movie.runtime} minutes, Rated: {movie.mpaa_rating}</em></small>
            <hr />
            <p>{movie.description}</p>
        </div>
    )
}

export default Movie