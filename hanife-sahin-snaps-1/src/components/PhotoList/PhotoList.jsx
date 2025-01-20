import "./PhotoList.scss";
import PhotoCard from "../PhotoCard/PhotoCard";
import photos from "../../data/photos.json";

export default function PhotoList({ activeFilter }) {
    const filteredPhotos = photos.filter((photo) =>
        activeFilter === null ? true : photo.tags.includes(activeFilter)
    );

    return (
        <div className="photo-list">
            {filteredPhotos.map((photo) => (
                <PhotoCard key={photo.id} photo={photo} />
            ))}
        </div>
    );
}
