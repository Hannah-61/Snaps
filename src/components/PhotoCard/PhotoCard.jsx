import { Link } from "react-router-dom";
import "./PhotoCard.scss";

export default function PhotoCard({ photo }) {
    return (
        <div className="photo-card-wrapper">
            <section className="photo-card">
                <div className="photo-card__photo">
                    <Link to={`photo/${photo.id}`}>
                        <img 
                            className="photo-card__photo__image" 
                            src={photo.photo} 
                            alt={photo.photographer}
                        />
                    </Link>
                    <div className="photo-card__photo__photographer">
                        <p>{photo.photographer}</p>
                    </div>
                </div>
                <ul className="photo-card__tags">
                    {photo.tags.map((tag) => (
                        <li key={tag} className="photo-card__tags__item">
                            <p>{tag}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
