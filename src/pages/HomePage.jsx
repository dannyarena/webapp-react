import { useEffect, useState } from "react";

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
        </div>
    )
}