import "./PhotoCard.scss";

export default function PhotoCard({ photo }) {
    return (
        <div className="photo-card">
            <img src={photo.photo} alt={photo.photoDescription} className="photo-card__image" />
            <div className="photo-card__info">
                <span className="photo-card__photographer">{photo.photographer}</span>
            </div>
            <div className="photo-card__tags">
                {photo.tags.map((tag, index) => (
                    <span key={index} className="photo-card__tag">{tag}</span>
                ))}
            </div>
        </div>
    );
}
