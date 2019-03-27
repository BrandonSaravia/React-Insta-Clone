import React from 'react';

const likesContainer = props => {
    return [
        <div
            className = "like-section"
            key = "likes-icon-container"
            onClick={props.incrementLike}
        >
            <div className="like-section-wrapper">
                <i class="far fa-heart"></i>
            </div>    
            <div className="like-section-wrapper">
                <i className="far fa-comment" />
            </div>
        </div>,
        <div className="like-section" key="likes-container">
            <div className="like-section-wrapper">{props.likes}</div>
        </div>
    ]
}

export default likesContainer;