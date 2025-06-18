import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

export default function HomePage() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/movies")
        .then(res => {
            setMovies(res.data);
        })
        .catch(err => {
            console.error("Errore nella chiamata API:", err);
        });
    }, []);
    return (
        <div>
            <h2>Home Page</h2>
            <p>lista film</p>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>
                        <MovieCard movie={(movie)} />
                        </Link>
                        </li>
                ))}
            </ul>
        </div>
    )
}