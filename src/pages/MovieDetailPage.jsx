import { useParams } from "react-router-dom";

export default function MovieDetailPage() {
    const { id } = useParams();

    return (
        <div>
            <h2>Dettagio film</h2>
            <p>ID film: {id}</p>
        </div>
    );
}