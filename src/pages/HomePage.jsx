import { useEffect, useState } from "react";

export default function HomePage() {
    const [movies, setMovies] = useState([]);
    return (
        <div>
            <h2>Home Page</h2>
            <p>lista film</p>
        </div>
    )
}