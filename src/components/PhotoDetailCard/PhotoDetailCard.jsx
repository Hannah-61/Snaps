import "./PhotoDetailCard.scss";
import LikeIcon from "../../assets/images/Like_Outline.svg";

export default function PhotoDetailCard({ photo }) {
    const formattedDate = new Date(photo.timestamp).toLocaleDateString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });

    return (
        <div className="photo-card-container">
            <section className="photo-card">
                <div className="photo-wrapper">
                    <img className="photo-wrapper__photo" src={photo.photo} alt={photo.photographer} />
                </div>
                <ul className="photo-tags">
                    {photo.tags.map((tag) => (
                        <li key={tag} className="photo-tags__tag-item">
                            <p>{tag}</p>
                        </li>
                    ))}
                </ul>
                <div className="photo-info">
                    <span className="photo-info__likes">
                        <img src={LikeIcon} alt="Like" className="photo-info__like-icon" />
                        {photo.likes} likes
                    </span>
                    <span className="photo-info__photographer">Photo by <strong>{photo.photographer}</strong></span>
                    <span className="photo-info__date">{formattedDate}</span>
                </div>
            </section>
        </div>
    );
}
