import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import './PhotoPage.scss';
import PhotoDetailCard from "../../components/PhotoDetailCard/PhotoDetailCard";
import CommentForm from "../../components/CommentForm/CommentForm";
import CommentList from "../../components/CommentsList/CommentList";
import Footer from '../../components/Footer/Footer';

import ArrowIcon from "../../assets/images/Arrow.svg";

function PhotoPage() {
    const params = useParams();
    const [photo, setPhoto] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchPhoto = async () => {
            try {
                const response = await axios.get(
                    `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${params.id}?api_key=${window?.apikey}`
                );
                setPhoto(response.data);
            } catch (error) {
                console.error("Error fetching photo:", error);
            }
        };
        fetchPhoto();
    }, [params.id]);

    return (
        <>
            <header className="header">
                <Link to="/" className="header__logo">Snaps</Link>
                <Link to="/" className="header__home">
                    <img src={ArrowIcon} alt="Return Home" className="header__icon" />
                    Home
                </Link>
            </header>
            <div className="content-container">
                {photo ? <PhotoDetailCard photo={photo} /> : <p>Loading...</p>}
                <CommentForm photoId={params.id} comments={comments} setComments={setComments} />
                <CommentList photoId={params.id} comments={comments} setComments={setComments} />
            </div>
            <Footer />
        </>
    );
}

export default PhotoPage;
