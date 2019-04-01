import React from 'react';

const LikesContainer = props => {
    return [
        <div
            className = "like-section"
            key = "likes-icon-container"
            onClick={props.addLike}
        >
            <div className="like-section-wrapper">
                <i class="far fa-heart"></i>
            </div> 
        </div>,

        <div className="like-section-wrapper">
            <i className="far fa-comment" />
        </div>,
        
        <div className="like-section" key="likes-container">
            <div className="like-section-wrapper">{props.likes}</div>
        </div>
    ]
}

export default LikesContainer;