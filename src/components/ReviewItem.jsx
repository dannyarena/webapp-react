export default function ReviewItem({ review }) {
    return (
        <div className="review-item"><strong>{review.name}</strong> - voto: {review.vote}
        <p>{review.text}</p>
        </div>
    );
}