import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieDetailPage() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    useEffect(() => {
        axios.get(`http://localhost:3000/movies/${id}`)
        .then(res => {
            setMovie(res.data);
        })
        .catch(err => {
            console.error("Errore nella chimata", err);
        });
    }, [id]);


    if (!movie) {
        return <p>Caricamento in corso...</p>;
    }
    return (
        <>
        <div>
            <h2>{movie.title}</h2>
            <p><strong>Regista:</strong> {movie.director}</p>
            <p><strong>Genere:</strong> {movie.genre}</p>
            <p><strong>Anno:</strong> {movie.release_year}</p>
            <p><strong>Trama:</strong> {movie.abstract}</p>

            <h3>Recensioni</h3>
            <ul>
                {movie.reviews.map((review, index) => (
                    <li key={index}>
                        <strong>{review.name}</strong> - voto: {review.vote}
                        <p>{review.text}</p>
                        </li>
                ))}
            </ul>
        </div>
        </>
    );
}