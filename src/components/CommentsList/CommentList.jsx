import { useState, useEffect } from "react";
import axios from "axios";
import "./CommentList.scss";

export default function CommentList({ photoId, comments, setComments }) {
    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await axios.get(
                    `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${photoId}/comments?api_key=${window.apikey}`
                );
                setComments(response.data.sort((a, b) => b.timestamp - a.timestamp));
            } catch (error) {
                console.error("Error fetching comments:", error);
            }
        };
        fetchComments();
    }, [photoId]);

    const formatDate = (timestamp) => {
        return new Date(timestamp).toLocaleDateString('en-US', {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric'
        });
    };

    return (
        <div className="comment-list">
            <h3 className="comment-list__title">{comments.length} Comments</h3>
            {comments.map((comment) => (
                <div key={comment.id} className="comment-list__item">
                    <hr className="comment-list__divider" />
                    <div className="comment-list__header">
                        <span className="comment-list__author">{comment.name}</span>
                        <span className="comment-list__date">{formatDate(comment.timestamp)}</span>
                    </div>
                    <p className="comment-list__text">{comment.comment}</p>
                </div>
            ))}
        </div>
    );
}
