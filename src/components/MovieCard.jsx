export default function MovieCard({ movie }) {
    return (
        <div className="movie-card">
            <h4>{movie.title} ({movie.release_year})</h4>
        </div>
    );
}