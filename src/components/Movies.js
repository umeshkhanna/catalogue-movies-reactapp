import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Movies = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        const moviesList = [
            {
                id: 1,
                title: "Harry Potter and Sorcerer's Stone",
                release_date: "2000-01-22",
                runtime: 150,
                mpaa_rating: "PG-13",
                description: "Some Description"
            },
            {
                id: 2,
                title: "Harry Potter and Chambers of secrets",
                release_date: "2001-01-22",
                runtime: 150,
                mpaa_rating: "PG-13",
                description: "Some Description"
            }
        ];
        setMovies(moviesList);
    }, [])
    return (
        <div>
            <h2>Movies!</h2>
            <hr />
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Movie</th>
                        <th>Release Date</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((m) => (
                        <tr key={m.id}>
                            <td>
                                <Link to={`/movies/${m.id}`}>{m.title}</Link>
                            </td>
                            <td>{m.release_date}</td>
                            <td>{m.mpaa_rating}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Movies