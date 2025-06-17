const { id } = useParams();

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieDetailPage() {
    const [movie, setMovies] = useState(null);
    useEffect(() => {
        axios.get(`http://localhost:3000/movies/${id}`)
        .then(res => {
            setMovies(res.data);
        })
        .catch(err => {
            console-error("Errore nella chimata", err);
        });
    }, [id]);
    
    const { id } = useParams();

    return (
        <div>
            <h2>Dettagio film</h2>
            <p>ID film: {id}</p>
        </div>
    );
}