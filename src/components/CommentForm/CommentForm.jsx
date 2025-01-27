import { useState } from "react";
import axios from "axios";
import "./CommentForm.scss";

export default function CommentForm({ photoId, comments, setComments }) {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [errors, setErrors] = useState({ name: false, comment: false });

    const handleNameChange = (e) => {
        setName(e.target.value);
        if (e.target.value.trim() !== "") {
            setErrors((prev) => ({ ...prev, name: false }));
        }
    };

    const handleCommentChange = (e) => {
        setComment(e.target.value);
        if (e.target.value.trim() !== "") {
            setErrors((prev) => ({ ...prev, comment: false }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let newErrors = {
            name: name.trim() === "",
            comment: comment.trim() === "",
        };

        setErrors(newErrors);

        if (newErrors.name || newErrors.comment) {
            return;
        }

        try {
            const response = await axios.post(
                `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${photoId}/comments?api_key=${window.apikey}`,
                { name: name, comment: comment },
                { headers: { "Content-Type": "application/json" } }
            );
            setName("");
            setComment("");
            setErrors({ name: false, comment: false });
            setComments([response.data, ...comments]);
        } catch (error) {
            console.error("Error submitting comment:", error);
        }
    };

    return (
        <form className="comment-form" onSubmit={handleSubmit}>
            <label htmlFor="name-field" className="comment-form__label">Name</label>
            <input
                type="text"
                id="name-field"
                className={`comment-form__input ${errors.name ? "comment-form__input--error" : ""}`}
                value={name}
                onChange={handleNameChange}
            />

            <label htmlFor="comment-field" className="comment-form__label">Comment</label>
            <textarea
                id="comment-field"
                className={`comment-form__textarea ${errors.comment ? "comment-form__textarea--error" : ""}`}
                value={comment}
                onChange={handleCommentChange}
            />

            <button type="submit" className="comment-form__button">Submit</button>
        </form>
    );
}
