import React from 'react';
import './card.css';

const Card = ({ title, description, image }) => {
    return (
        <div className="card-custom">
            <img src={image} alt={title} className="card-image" />
            <div className="card-content">
                <h3 className="card-tit">{title}</h3>
                <p className="card-desc">{description}</p>
            </div>
        </div>
    );
};

export default Card;